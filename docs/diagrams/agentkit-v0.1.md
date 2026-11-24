# AgentKit v0.1 架构图与 UML 时序图

> 版本基线：`neilyoli/agentkit@24d45f294bb9c19aad1d0c12aa37543ce8622817`（v0.1 / PR #32）。
>
> 本文档是图表的可编辑源文件，使用 GitHub 原生 Mermaid 语法。博客文章中的 SVG 是阅读展示用的静态图；后续修改以本文件中的 Mermaid 源码为准，并同步更新对应展示图。
>
> **恢复语义说明：** v0.1 支持断线重连和页面刷新后的会话展示恢复，不支持服务重启后恢复 AgentScope 执行现场或自动重放任务。

## 1. 系统整体架构

~~~mermaid
flowchart LR
    subgraph Client["客户端"]
        Browser["React 19 工作台"]
        Http["HTTP：Session / Run API"]
        Stream["fetch + ReadableStream：SSE"]
        Browser --> Http
        Browser --> Stream
    end

    subgraph App["单实例 Spring Boot 4.1.2 / agentkit-admin"]
        Auth["AdminInterceptor<br/>Sa-Token Bearer"]
        subgraph API["HTTP 接入层"]
            SessionApi["AgentSessionController"]
            RunApi["AgentRunController"]
            EventApi["AgentEventStreamController"]
        end
        subgraph Service["应用与执行管理"]
            Owner["AgentOwnerResolver"]
            SessionService["AgentSessionService"]
            RunService["AgentRunService"]
            Admission["AgentRunAdmissionTransaction"]
            Executor["AgentRunExecutor<br/>固定线程池 / 零排队"]
            Listener["AgentRunExecutionListener"]
            EventService["AgentEventStreamService"]
            Lifecycle["AgentInstanceLifecycle"]
        end
        subgraph Runtime["Agent Runtime 适配"]
            Contract["AgentRuntime<br/>平台执行契约"]
            Scope["AgentScopeRuntimeService"]
            Bridge["AgentScopeToolBridge"]
            Registry["AgentToolRegistry"]
            Tool["get_current_time"]
        end
    end

    subgraph Storage["持久化与基础设施"]
        MySQL[("MySQL 8<br/>Session / Run / Message / Event")]
        Redis[("Redis<br/>登录态 / 现有缓存")]
        Lock["操作系统文件锁<br/>单实例独占"]
    end

    Model["DeepSeek<br/>deepseek-flash"]

    Http --> Auth
    Stream --> Auth
    Auth --> Redis
    Auth --> SessionApi
    Auth --> RunApi
    Auth --> EventApi

    SessionApi --> Owner
    SessionApi --> SessionService
    RunApi --> RunService
    EventApi --> EventService

    SessionService --> MySQL
    RunService --> Admission
    Admission --> MySQL
    RunService --> Executor
    Executor --> MySQL
    Executor --> Contract
    Contract --> Scope
    Scope --> Model
    Scope --> Bridge
    Bridge --> Registry
    Registry --> Tool
    Listener --> MySQL
    EventService --> MySQL
    EventService --> Stream
    Executor --> Listener
    Lifecycle --> Lock

    classDef client fill:#e8eff5,stroke:#8298aa,color:#24364b;
    classDef service fill:#f5e8e1,stroke:#b45e40,color:#24364b;
    classDef storage fill:#e8f0ec,stroke:#719184,color:#24364b;
    class Browser,Http,Stream client;
    class Auth,SessionApi,RunApi,EventApi,Owner,SessionService,RunService,Admission,Executor,Listener,EventService,Contract,Scope,Bridge,Registry,Tool,Lifecycle service;
    class MySQL,Redis,Lock storage;
~~~

**边界说明**

- 浏览器只通过 Bearer HTTP 接口提交和查询任务，通过 SSE 订阅展示进度。
- Run 的执行生命周期由后台执行器管理，不依赖浏览器连接。
- MySQL 保存运行事实；Redis 不承担 Run 状态、幂等键或事件序号的唯一来源。
- AgentScope 只在 `module.agent.runtime.agentscope` 包内使用，平台其他层依赖自己的 Runtime 契约。
- 单实例文件锁属于进程生命周期保护，不是分布式调度器。

## 2. Maven 模块与代码边界

~~~mermaid
flowchart TB
    Parent["agentkit-parent<br/>Maven 聚合与统一依赖管理"]
    Base["agentkit-base<br/>公共基础设施 / 配置 / support"]
    Admin["agentkit-admin<br/>唯一可执行 Spring Boot 应用"]

    Parent --> Base
    Parent --> Admin
    Admin --> Base

    subgraph Agent["agentkit-admin / module.agent"]
        API["api：身份与错误处理"]
        Session["session：会话"]
        Run["run：任务受理与状态"]
        Message["message：公开消息"]
        Event["event：事件与 SSE"]
        Runtime["runtime：执行契约"]
        Executor["runtime.executor：后台执行"]
        Instance["runtime.instance：实例生命周期"]
        Adapter["runtime.agentscope：SDK 适配"]
        Tool["tool：平台工具"]
    end

    Admin --> Agent
    Runtime --> Executor
    Executor --> Adapter
    Adapter --> Tool
~~~

## 3. 后端组件架构

~~~mermaid
flowchart TB
    Browser["React 工作台"]

    subgraph HTTP["HTTP 接入层"]
        Auth["Sa-Token / Owner 校验"]
        SessionController["AgentSessionController"]
        RunController["AgentRunController"]
        SseController["AgentEventStreamController"]
    end

    subgraph App["应用层"]
        SessionService["AgentSessionService"]
        RunService["AgentRunService"]
        Admission["AgentRunAdmissionTransaction"]
        Executor["AgentRunExecutor"]
        Listener["AgentRunExecutionListener"]
        SseService["AgentEventStreamService"]
    end

    subgraph AgentRuntime["Runtime 层"]
        Contract["AgentRuntime"]
        Scope["AgentScopeRuntimeService"]
        Bridge["AgentScopeToolBridge"]
        Registry["AgentToolRegistry"]
        Tool["get_current_time"]
    end

    DB[("MySQL")]
    Model["DeepSeek"]

    Browser --> Auth
    Auth --> SessionController
    Auth --> RunController
    Auth --> SseController
    SessionController --> SessionService
    RunController --> RunService
    SseController --> SseService
    SessionService --> DB
    RunService --> Admission
    Admission --> DB
    RunService --> Executor
    Executor --> DB
    Executor --> Contract
    Contract --> Scope
    Scope --> Model
    Scope --> Bridge
    Bridge --> Registry
    Registry --> Tool
    Executor --> Listener
    Listener --> DB
    SseService --> DB
    SseService --> Browser
~~~

## 4. 四张核心表的逻辑关系

~~~mermaid
erDiagram
    AGENT_SESSION ||--o{ AGENT_RUN : contains
    AGENT_SESSION ||--o{ AGENT_MESSAGE : contains
    AGENT_RUN ||--o{ AGENT_MESSAGE : produces
    AGENT_RUN ||--o{ AGENT_EVENT : emits

    AGENT_SESSION {
        string id PK
        string owner_type
        bigint owner_id
        string title
        string active_run_id
        bigint message_sequence
    }

    AGENT_RUN {
        string id PK
        string session_id
        string owner_type
        bigint owner_id
        string request_key
        string input_digest
        string status
        string finish_reason
        bigint event_count
    }

    AGENT_MESSAGE {
        string id PK
        string session_id
        string run_id
        bigint sequence
        string role
        text content
        boolean complete
    }

    AGENT_EVENT {
        string id PK
        string run_id
        bigint sequence
        string event_type
        json payload
    }
~~~

> 这是逻辑关联图。v0.1 的实际 DDL 以 Flyway V2 为准；不要根据 ER 图推断数据库已经建立了所有外键约束。

## 5. Run 受理事务

~~~mermaid
flowchart TD
    Start["POST /agent/sessions/{sessionId}/runs"]
    Ready{"实例是否就绪"}
    Owner["解析当前员工并校验 Session Owner"]
    Idem{"幂等 Key 是否已存在"}
    Same{"输入摘要是否一致"}
    Capacity{"容量预检查是否通过"}
    Insert["插入 ACCEPTED Run"]
    Occupy{"条件占用 Session 成功"}
    Message["分配消息序号并写 USER Message"]
    Event["分配事件序号并写 run.accepted"]
    Commit["提交数据库事务"]
    Dispatch["事务外派发后台执行器"]
    Accepted["返回 SubmitRunResult"]
    Duplicate["返回原 Run，不重复派发"]
    Conflict["409 INPUT_CONFLICT"]
    Busy["回滚事务，409 SESSION_BUSY"]
    Limit["429 CAPACITY_EXCEEDED"]
    Unavailable["503 RUNTIME_UNAVAILABLE"]
    Rejected["FAILED / START_REJECTED"]

    Start --> Ready
    Ready -->|否| Unavailable
    Ready -->|是| Owner
    Owner --> Idem
    Idem -->|是| Same
    Same -->|是| Duplicate
    Same -->|否| Conflict
    Idem -->|否| Capacity
    Capacity -->|否| Limit
    Capacity -->|是| Insert
    Insert --> Occupy
    Occupy -->|否| Busy
    Occupy -->|是| Message
    Message --> Event
    Event --> Commit
    Commit --> Dispatch
    Dispatch -->|线程池接收| Accepted
    Dispatch -->|线程池满或关闭| Rejected
~~~

> 容量检查是受理阶段的预检查，并发请求可能同时通过。真正的执行并发上限由固定线程池和零排队策略兜底；派发失败会将已持久化的 Run 收敛为可查询失败。

## 6. AgentScope Runtime 与平台工具桥接

~~~mermaid
flowchart LR
    Model["DeepSeek"]
    Toolkit["AgentScope Toolkit"]
    Bridge["AgentScopeToolBridge"]
    Registry["AgentToolRegistry"]
    Tool["AgentTool<br/>get_current_time"]

    Model -->|工具调用| Toolkit
    Toolkit --> Bridge
    Bridge --> Registry
    Registry --> Tool
    Tool --> Registry
    Registry --> Bridge
    Bridge --> Toolkit
    Toolkit -->|工具结果| Model
~~~

## 7. 核心业务时序图：Run 提交与后台执行

~~~mermaid
sequenceDiagram
    autonumber
    actor User as 用户
    participant Web as React 工作台
    participant API as AgentRunController
    participant Service as AgentRunService
    participant TX as AgentRunAdmissionTransaction
    participant DB as MySQL
    participant Dispatcher as AgentRunDispatcher
    participant Executor as AgentRunExecutor
    participant Runtime as AgentRuntime
    participant Scope as AgentScopeRuntimeService
    participant Model as DeepSeek
    participant Listener as AgentRunExecutionListener

    User->>Web: 发送消息，生成 Idempotency-Key
    Web->>API: POST /runs + Bearer + Idempotency-Key
    API->>Service: submit(sessionId, key, input)
    Service->>TX: admit(owner, session, key, digest, input)
    TX->>DB: 校验 Session Owner、幂等键、容量预检查
    TX->>DB: 插入 Run、条件占用 Session
    TX->>DB: 写 USER Message、run.accepted Event
    DB-->>TX: COMMIT
    TX-->>Service: 返回新建 Run
    Service->>Dispatcher: dispatch(runId)

    alt 执行线程池接收
        Dispatcher->>Executor: execute(runId)
        Dispatcher-->>Service: dispatched=true
    else 线程池满或实例关闭
        Dispatcher->>DB: ACCEPTED → FAILED / START_REJECTED
        Dispatcher->>DB: 写 run.failed 并释放 Session
        Dispatcher-->>Service: dispatched=false
    end

    Service-->>API: SubmitRunResult
    API-->>Web: HTTP 202 + runId + 当前 status

    Note over Web,Executor: 后台线程独立执行；它可能在 HTTP 202 返回前已经开始

    Executor->>DB: 条件领取 ACCEPTED → RUNNING
    Executor->>DB: 写 run.started
    Executor->>DB: 加载当前输入与已完成历史
    Executor->>Runtime: submit(request, listener)
    Runtime->>Scope: 组装一次性 ReActAgent / AgentRun
    Scope->>Model: OpenAI 兼容流式请求

    loop ReAct 模型与工具循环
        Model-->>Scope: 文本增量或工具调用
        Scope-->>Listener: SDK 事件映射为 RuntimeEvent
        Listener->>DB: 写工具事件或文本快照短事务
    end

    Scope-->>Listener: onCompleted(result)
    Listener->>DB: 终态事务：更新 Run、完成 Message、写终态 Event
    Listener->>DB: 按 runId 条件释放 Session
~~~

## 8. 核心业务时序图：取消与完成竞争

~~~mermaid
sequenceDiagram
    autonumber
    actor User as 用户
    participant API as AgentRunController
    participant Service as AgentRunService
    participant DB as MySQL
    participant Executor as AgentRunExecutor
    participant Handle as AgentExecutionHandle
    participant SDK as AgentScope AgentRun
    participant Listener as AgentRunExecutionListener

    User->>API: POST /agent/runs/{runId}/cancel
    API->>Service: cancel(runId)
    Service->>DB: 查询 Owner 与当前 Run 状态

    alt Run 仍为 ACCEPTED
        Service->>DB: 条件更新 ACCEPTED → CANCELLED
        DB->>DB: 写 run.cancelled，释放 Session
        Service-->>API: 返回 CANCELLED
        Note over Executor,SDK: 执行器之后领取时条件更新影响 0 行，不会启动模型
    else Run 已为 RUNNING
        Service->>DB: 条件更新 RUNNING → CANCELING
        DB->>DB: 写 run.cancel_requested
        Service->>Executor: forwardCancel(runId)
        alt 执行句柄已经绑定
            Executor->>Handle: cancel()
            Handle->>SDK: sdkRun.cancel()
        else 句柄尚未绑定
            Note over Executor,SDK: 当前转发为空操作；执行器绑定句柄后重读 CANCELING 并补发取消
        end
        SDK-->>Listener: 流真实终止信号 onError / onComplete
        Listener->>DB: 条件更新 CANCELING → CANCELLED
        DB->>DB: 写 run.cancelled，释放 Session
        Service-->>API: 返回当前 Run 状态
    else 完成与取消同时竞争
        Note over Service,Listener: 两边通过数据库条件更新竞争，先提交状态转换的一方获胜
        alt 成功终态先提交
            Listener->>DB: RUNNING → SUCCEEDED
            User->>API: 取消请求
            API->>Service: cancel(runId)
            Service->>DB: RUNNING → CANCELING（影响 0 行）
            Service-->>API: 返回 SUCCEEDED
        else 取消先进入 CANCELING
            Service->>DB: RUNNING → CANCELING
            Listener->>DB: RUNNING → SUCCEEDED（影响 0 行）
            Listener->>DB: CANCELING → CANCELLED
        end
    end
~~~

## 9. 核心业务时序图：页面刷新与 SSE 恢复

~~~mermaid
sequenceDiagram
    autonumber
    actor Browser as 浏览器
    participant SessionAPI as AgentSessionController
    participant DB as MySQL
    participant SSEAPI as AgentEventStreamController
    participant Stream as AgentEventStreamService
    participant Executor as AgentRunExecutor

    Browser->>SessionAPI: GET /agent/sessions/{id}/snapshot
    SessionAPI->>DB: REPEATABLE READ 查询 Session、最新 50 条 Message、活动 Run
    DB-->>SessionAPI: Message + activeRun + activeRun.eventCount
    SessionAPI-->>Browser: Snapshot + resumeEventSequence
    Browser->>Browser: 恢复已持久化消息与活动状态

    opt 存在活动 Run
        Browser->>SSEAPI: GET /events + Last-Event-ID = resumeEventSequence
        SSEAPI->>Stream: open(runId, cursor)
        Stream->>DB: 校验 Owner 与 cursor <= eventCount
        Stream-->>Browser: 200 text/event-stream

        loop 每 500ms 轮询已提交事件
            Stream->>DB: 查询 sequence > lastSentSequence，最多 100 条
            DB-->>Stream: 按序返回 Event
            Stream-->>Browser: SSE id / event / data
            Browser->>Browser: 应用事件并推进 lastProcessedSequence
        end
    end

    alt 当前连接发生网络断开
        Stream-->>Browser: 连接关闭并释放订阅配额
        Note over Executor,DB: Run 继续执行，事件继续写入 MySQL
        Browser->>SSEAPI: 同一 Run + Last-Event-ID = lastProcessedSequence
        SSEAPI->>Stream: 重新建立订阅
    else 用户刷新整个页面
        Note over Browser,SessionAPI: 重新读取 Snapshot，再使用新的 resumeEventSequence 建立订阅
    end
~~~

> Snapshot 是展示基线，不是所有历史事件的重放。游标之前的工具进度事件不会重新播放；页面恢复消息和 Run 状态，之后只接收游标之后的新事件。

## 10. Run 状态机

~~~mermaid
stateDiagram-v2
    [*] --> ACCEPTED

    ACCEPTED --> RUNNING: 执行器领取成功
    ACCEPTED --> CANCELLED: 领取前取消
    ACCEPTED --> FAILED: 派发或启动拒绝
    ACCEPTED --> INTERRUPTED: 服务中断收敛

    RUNNING --> SUCCEEDED: 成功终态事务
    RUNNING --> FAILED: 模型或内部错误
    RUNNING --> CANCELING: 接受取消请求
    RUNNING --> INTERRUPTED: 关闭等待超时

    CANCELING --> CANCELLED: 底层执行退出并收敛
    CANCELING --> INTERRUPTED: 关闭等待超时

    SUCCEEDED --> [*]
    FAILED --> [*]
    CANCELLED --> [*]
    INTERRUPTED --> [*]
~~~

## 11. 单实例启动与关闭生命周期

~~~mermaid
flowchart TD
    Start["应用启动"]
    Lock{"取得操作系统文件锁"}
    Legacy["扫描遗留非终态 Run"]
    Converge["标记 INTERRUPTED / APP_RESTARTED<br/>按 runId 释放 Session"]
    Ready["生命周期就绪，允许受理"]
    Stop["收到关闭信号"]
    Block["拒绝新 Run 和新 SSE 订阅"]
    Cancel["取消在管 Run"]
    WaitTerminal["等待 Run 终态，最多 10 秒"]
    Interrupt["剩余非终态 Run 收敛为 INTERRUPTED"]
    WaitExit["等待底层执行真实退出，最多 15 秒"]
    Exited{"所有执行是否确认退出"}
    Release["释放文件锁"]
    Forfeit["扣留文件锁，直到进程真实退出"]
    Failed["启动失败，拒绝对外服务"]

    Start --> Lock
    Lock -->|否| Failed
    Lock -->|是| Legacy
    Legacy --> Converge
    Converge --> Ready
    Ready --> Stop
    Stop --> Block
    Block --> Cancel
    Cancel --> WaitTerminal
    WaitTerminal --> Interrupt
    Interrupt --> WaitExit
    WaitExit --> Exited
    Exited -->|是| Release
    Exited -->|否| Forfeit
~~~

## 12. 图表与代码的对应关系

| 图表 | 主要代码入口 |
|---|---|
| 系统整体架构 | `AgentSessionController`、`AgentRunController`、`AgentEventStreamController` |
| Maven 模块 | `agentkit-server/pom.xml` |
| 后端组件架构 | `module.agent` |
| 数据模型 | Flyway `V2__create_agent_tables.sql` |
| Run 受理事务 | `AgentRunService`、`AgentRunAdmissionTransaction` |
| Runtime 与工具桥接 | `AgentScopeRuntimeService`、`AgentScopeToolBridge`、`AgentToolRegistry` |
| Run 提交与执行时序 | `AgentRunExecutor`、`AgentRunExecutionListener`、`AgentRunExecutionStoreImpl` |
| 取消竞争时序 | `AgentRunService.cancel`、`AgentRunExecutionStoreImpl` |
| SSE 恢复时序 | `AgentSessionService.snapshot`、`AgentEventStreamService` |
| 状态机 | `RunStatus`、`AgentRunExecutionStoreImpl` |
| 实例生命周期 | `AgentInstanceLifecycle`、`AgentInstanceExclusivity` |

## 维护约定

1. 先修改本文件中的 Mermaid 源码，再更新博客文章里的 SVG 展示图。
2. 图表描述必须与对应代码和冻结契约一致；发现差异时先确认代码事实，不要让图表替代码定义行为。
3. 系统图描述组件边界；时序图描述调用顺序；状态图描述允许的状态转换，不要用一张图承担所有说明。
4. 未实现的能力使用“规划 / 后续版本”标注，不画成当前生产链路。
