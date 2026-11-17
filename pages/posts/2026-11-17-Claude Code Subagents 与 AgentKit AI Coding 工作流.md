---
title: Claude Code Subagents：把 AI Coding 变成可管理的工程协作流程
lang: zh
excerpt: 从上下文隔离、任务委派、工具权限和 Git Worktree 出发，分析 Claude Code Subagents，并设计一套适用于 AgentKit 的编码执行工作流。
tags:
  - Claude Code
  - AI Coding
  - Agent
  - 工程实践
---

# Claude Code Subagents：把 AI Coding 变成可管理的工程协作流程

最近在推进 AgentKit 时，我开始重新思考一个问题：**当项目从单点功能开发进入多模块协作，应该怎样让 Claude Code 更稳定地承担代码编写工作？**

最直接的做法是多开几个 Claude Code 会话，一个写后端，一个写前端，再开一个会话审查代码。但这并不等于有了一套可靠的协作机制。会话之间缺少统一的任务入口，架构约束容易传递不完整，代码修改可能互相覆盖，最后还需要人工重新梳理每个会话做了什么。

我更希望把这件事做成一套工程流程：主 Agent 负责理解需求、拆分任务和整合结果，专业 Subagents 负责独立工作，权限和工作区控制修改范围，独立审查与工程验证负责把住交付质量。

Claude Code 的 Subagents 正好提供了这套机制的基础。

本文先拆解官方 Subagents 的执行方式，再结合 AgentKit 当前的开发阶段，设计一套可以逐步落地的 AI Coding 工作流。需要说明的是，后半部分是 AgentKit 的实施方案，不代表相关 Agent 配置已经全部落地。

## 一、Subagents 到底是什么

Claude Code 官方将 Subagents 定义为处理特定任务的专业 AI 助手。它们由主会话委派任务，在独立的上下文窗口中工作，可以拥有自己的系统提示词、工具范围和权限设置，完成后把结果返回给调用它的主 Agent。

可以先把它理解成：

- 主 Agent 是技术负责人，负责理解目标、拆分任务、安排执行和整合结果。
- Subagent 是专业执行者，负责一个边界明确的任务。
- 项目文档和代码是共同依据，任务说明负责把本次工作需要的信息交给执行者。
- 主 Agent 对最终集成结果负责，不能把子 Agent 的自我报告直接当成验收结论。

整体关系如下：

~~~mermaid
flowchart TB
    U[开发需求] --> M[Main Agent / 技术负责人]
    M --> A[架构分析 Agent]
    M --> B[后端开发 Agent]
    M --> F[前端开发 Agent]
    M --> S[安全审查 Agent]
    M --> R[代码审查 Agent]
    M --> V[验证 Agent]
    A --> M
    B --> M
    F --> M
    S --> M
    R --> M
    V --> M
    M --> I[集成、修复与最终交付]
~~~

这里最重要的不是 Agent 数量，而是职责和上下文边界。

### 1. 独立上下文，不等于共享主会话

普通 Subagent 启动时会获得一份新的上下文。它不会自动看到主 Agent 的完整对话历史，也不会因为主 Agent 之前读取过某个文件，就自动拥有那个文件的分析结果。

根据官方文档，Subagent 启动时主要会获得：

- 自己的系统提示词和执行环境信息。
- 主 Agent 为这次委派整理的任务说明。
- 当前会话加载的项目指令文件，例如 CLAUDE.md 层级中的规则，以及作为项目指令加载的 AGENTS.md。
- 启动时读取到的 Git 状态快照。
- 在配置中预加载的 Skills。
- 在符合条件时，当前会话中其他已命名 Agent 的信息。

它不会自动继承主会话已经调用过的 Skill、已经阅读过的文件内容或自动记忆。Fork 是例外：Fork 会继承父会话上下文，不应与普通 Subagent 混为一谈。

这意味着，委派任务时不能只写一句“帮我实现登录”。至少要告诉它：

1. 本次要解决什么问题。
2. 哪些架构和业务规则已经确定。
3. 应该先读取哪些文档和代码。
4. 本次允许修改哪些目录或文件。
5. 哪些事情明确不在范围内。
6. 完成后需要怎样验证、怎样汇报。

**Subagents 能隔离上下文，但不会替我们自动补齐上下文。** 任务交接是否清楚，直接决定子 Agent 的执行质量。

### 2. 它解决的是上下文管理，不是免费增加开发者

Subagent 会独立发起模型请求，这些请求仍然计入当前会话对应的使用额度。

它的价值主要体现在：

- 把大量代码检索、日志分析和文档研究放在独立上下文里。
- 主会话只接收与当前决策有关的结论。
- 不同专业任务可以使用不同的提示词、工具范围和模型。
- 可重复的专业角色可以保存成配置，后续继续使用。

所以不能简单地认为“开得越多，开发越快”或者“子 Agent 一定能省 Token”。多个 Agent 如果重复扫描整个仓库、重复讨论同一个架构问题，反而会增加总消耗。

我更倾向于把它看作**上下文隔离和任务专业化机制**，而不是无限扩容的免费劳动力。

### 3. Subagents、Agent Teams 和 Fork 有什么区别

这几个概念容易混淆，实际工作方式并不一样。

| 机制 | 工作方式 | 更适合什么任务 |
|---|---|---|
| Subagents | 主 Agent 委派，子 Agent 独立执行并返回结果 | 代码检索、专项分析、独立开发、代码审查 |
| Agent Teams | 多个 Claude Code 会话组成团队，有共享任务列表和 Agent 间通信 | 多个复杂任务需要相互讨论、协调和持续协作 |
| Fork | 基于当前会话上下文分支执行 | 需要保留当前上下文，同时探索另一条思路 |
| 普通主会话 | 在当前上下文中连续完成工作 | 需要频繁讨论、快速修改或上下文高度连续的任务 |

Agent Teams 与 Subagents 的关键差别是协作方式。Subagents 通常向主 Agent 返回结果，由主 Agent 统一协调；Agent Teams 的成员可以直接通信，并通过共享任务列表协作。

截至本文整理时，官方文档将 Agent Teams 标记为实验性能力，默认关闭，并提示其在会话恢复、任务协调和关闭行为方面仍有已知限制。它也会带来更高的协调成本和 Token 消耗。

因此，AgentKit 第一阶段先采用 Subagents。只有当任务确实需要多个独立会话互相讨论、认领任务和协调进度时，再评估 Agent Teams。

## 二、Subagent 怎么配置

Subagent 使用 Markdown 文件定义，文件顶部是 YAML Frontmatter，后面是该 Agent 的系统提示词。

项目级 Agent 放在仓库的 .claude/agents/ 目录下：

~~~text
agentkit/
└── .claude/
    └── agents/
        ├── agentkit-architect.md
        ├── agentkit-backend-developer.md
        ├── agentkit-frontend-developer.md
        ├── agentkit-security-reviewer.md
        ├── agentkit-code-reviewer.md
        └── agentkit-verifier.md
~~~

项目级配置适合跟随 Git 仓库维护，团队成员进入项目后可以使用同一套角色定义。个人通用 Agent 则可以放在用户目录下的 .claude/agents/。

### 1. 常用配置字段

官方要求的字段只有 name 和 description，其余根据任务需要配置。

| 字段 | 作用 | 使用建议 |
|---|---|---|
| name | Agent 唯一标识 | 使用稳定、能表达职责的名称 |
| description | 说明何时委派给它 | 写清适用任务，必要时强调主动使用 |
| tools | 可用工具列表 | 优先按最小权限原则配置 |
| disallowedTools | 禁止使用的工具 | 从继承或显式配置的工具中移除 |
| model | 使用的模型 | 可以继承主会话，也可以按任务选择 |
| permissionMode | 权限模式 | 根据任务风险选择，不要默认放宽权限 |
| maxTurns | 最大执行轮数 | 防止任务无限扩展 |
| skills | 启动时预加载的 Skill | 只加载本角色真正需要的专业知识 |
| memory | 独立持久记忆范围 | 需要跨会话积累经验时再启用 |
| hooks | Agent 生命周期钩子 | 用于执行前检查、执行后验证等 |
| isolation | 工作区隔离方式 | 需要独立代码副本时评估 worktree |
| mcpServers | 可用 MCP 服务 | 只开放当前任务需要的服务 |

配置字段会随着 Claude Code 版本演进。实际使用前应以当前版本官方文档为准，尤其不要照搬旧示例中的字段名。

### 2. 一个只读代码审查 Agent 示例

下面是一个简化的项目级配置：

~~~yaml
---
name: agentkit-code-reviewer
description: Reviews AgentKit changes for architecture, correctness, security, and maintainability. Use proactively after implementation.
tools: Read, Grep, Glob
model: inherit
maxTurns: 30
---

You are the code reviewer for AgentKit.

Your responsibility:
- Review the requested changes against the repository architecture.
- Identify correctness, security, maintainability, and compatibility risks.
- Read the relevant implementation and surrounding call chain.
- Report actionable findings with file paths and evidence.

Constraints:
- Read-only. Do not modify source files.
- Do not change architecture decisions.
- Do not treat the developer's self-reported verification as proof.
- Do not expand the review into unrelated refactoring.

Return:
1. Findings grouped by severity.
2. File paths and relevant code locations.
3. Why each finding matters.
4. Recommended fixes.
5. Remaining uncertainty.
~~~

这个例子有意不开放 Edit 和 Write。审查 Agent 的职责是发现问题和给出证据，不是自己修改代码。

需要注意，tools 是工具级控制。若开放 Bash，不能仅凭提示词就认为它只能执行只读命令。命令级限制还需要结合 Claude Code 的权限规则和 Hooks。权限设计不能只写在 Prompt 里。

### 3. Skills 和 Memory 怎么使用

Subagent 可以通过 skills 字段预加载 Skill。预加载的是 Skill 的完整内容，而不只是一个名称或描述。

例如，Java 后端开发 Agent 可以加载项目 Java 规范，前端开发 Agent 可以加载统一的设计规范。这样专业知识由 Skill 维护，角色提示词只需要说明什么时候使用、如何遵守。

Memory 则是另一回事。它给 Subagent 提供独立的跨会话记忆范围，可以选择 user、project 或 local。

我不建议一开始就让每个 Agent 大量写记忆。对于工程项目，正式文档应该是唯一可信的项目依据：

- AGENTS.md：项目开发约束。
- docs/architecture.md：架构基线和模块边界。
- docs/runtime-contracts.md：运行行为契约。
- docs/plans/：当前实施计划和交接状态。

Subagent Memory 只记录这些正式文档之外的补充经验，例如某个 SDK 的实际使用限制、特定构建问题和排查经验。架构决策、接口约定和实施状态不能只存在于某个 Agent 的记忆里。

## 三、任务应该怎样分配

Subagents 适合处理边界清楚、可以独立完成并返回摘要的任务。官方文档列出的典型用法包括隔离高输出任务、并行研究和串行任务链。

### 1. 并行研究

例如，需要了解一个大型项目的三个模块，可以分别委派：

~~~text
Main Agent
  ├── Agent A：分析身份与权限模块
  ├── Agent B：分析数据库与持久化模块
  └── Agent C：分析 API 与事件模块
~~~

每个 Agent 独立检索，只把关键调用链、风险和结论返回主 Agent。主 Agent 再综合判断。

这种方式适合研究路径互不依赖的工作。

### 2. 串行执行

有明确前后依赖时，应该按顺序执行：

~~~text
架构分析
    ↓
接口契约确认
    ↓
后端实现
    ↓
代码审查
    ↓
开发 Agent 修复
    ↓
工程验证
    ↓
主 Agent 验收
~~~

不要把必须先确定接口的任务同时交给前后端开发 Agent。否则两边很可能各自设计一套接口，最后再花时间返工。

### 3. 什么时候不要委派

以下情况更适合由主 Agent 直接处理：

- 很小、目标明确的修改。
- 需要与用户频繁确认的设计讨论。
- 多个步骤高度依赖同一段连续上下文。
- 只是对当前已经掌握的信息做简单判断。

如果委派一个任务需要花很长时间重新解释背景，最后返回的内容又需要主 Agent 重新做一遍，那么这次委派可能没有价值。

## 四、并行编码最容易出问题的地方：工作区与 Git

代码开发和资料研究不一样。两个 Agent 同时修改代码，很容易产生文件冲突、接口不一致和 Git 状态混乱。

Claude Code 的 Subagent 默认在主会话当前工作目录中工作。需要独立代码副本时，可以配置：

~~~yaml
isolation: worktree
~~~

它会让 Agent 在独立 Git Worktree 中工作，减少直接修改同一份工作区的冲突。

但有一个容易忽略的细节：官方文档说明，Subagent 自动创建的 Worktree 默认从仓库的默认分支创建，而不是从主会话当前 HEAD 创建。

这意味着，如果主会话正在某个功能分支上工作，不能直接假设自动创建的 Worktree 已经包含这个分支上的最新提交。应先核对 Worktree 的分支和提交基线，必要时从明确的实施分支和提交创建独立工作区。

我建议把工作区管理规则定为：

| 工作类型 | 工作区策略 |
|---|---|
| 架构研究、代码检索 | 只读，不需要独立 Worktree |
| 后端与前端独立开发 | 明确目录归属，必要时使用独立 Worktree |
| 修改公共接口、依赖配置 | 由主 Agent 或指定负责人统一处理 |
| 多个 Agent 修改同一文件 | 不允许无协调并行 |
| Git 提交、分支整合、PR | 由主 Agent 统一管理 |

核心原则是：**一个文件在同一时间只有一个明确的修改负责人。**

Worktree 解决的是工作区隔离，不会自动解决架构冲突、接口冲突和任务边界不清的问题。

## 五、为 AgentKit 设计一套 AI Coding 执行组织

前面是 Claude Code 本身的执行机制。下面结合 AgentKit 的实际情况，讨论如何把它用在项目开发中。

AgentKit 的目标是构建通用 Agent 底座和 AI 工作台，首期采用 Java 21、Spring Boot 4.x、Spring MVC + SSE、AgentScope ReAct 和模块化单体，前端采用 React、TypeScript、Vite、Tailwind CSS 与 shadcn/ui。

目前项目已经完成 v0.1 的 M0 技术兼容性与运行协议 POC，并通过 PR #6 合并。正式四模块工程和前端仍处于建设准备阶段。M1 后端与 Morrow AI Workspace V9 前端并行实施方案已经通过 PR #10 提出，等待合并和后续实施。

这正好是引入 Subagents 的合适时机：先建立开发角色和任务规则，再让专业 Agent 按照同一套工程约束开始编码。

### 1. 一个主 Agent，六个专业 Subagents

第一阶段采用一个主 Agent 和六个专业角色。

主 Agent 不需要再定义成一个自定义 Subagent，它就是当前 Claude Code 主会话，承担技术负责人和总调度职责。

| 角色 | 主要职责 | 工具权限建议 |
|---|---|---|
| Architect | 架构分析、模块边界、API 契约和技术方案审查 | Read、Grep、Glob |
| Backend Developer | Maven 模块、Java 业务代码、数据库、安全和运行服务 | Read、Grep、Glob、Bash、Edit、Write |
| Frontend Developer | React 页面、组件、状态管理、API Adapter 和交互 | Read、Grep、Glob、Bash、Edit、Write |
| Security Reviewer | 登录、权限、CSRF、Session/Run 归属和 SSE 安全审查 | Read、Grep、Glob |
| Code Reviewer | 分层、代码质量、架构符合性和维护成本审查 | Read、Grep、Glob |
| Verifier | 编译、类型检查、Lint、构建和业务场景验证 | Read、Grep、Glob、Bash |

角色权限只是起点，仍需配合项目级权限策略控制命令和文件访问范围。

这里有两个边界必须明确：

第一，Architect 负责提出方案和发现架构风险，但不拥有最终架构决策权。已经确认的架构决策不能由子 Agent 自行修改。

第二，Reviewer 负责审查，不负责直接改代码。发现问题后由主 Agent 将问题交给原开发 Agent 修复，再进行复审。

### 2. 项目目录结构

项目级配置统一放在仓库中：

~~~text
agentkit/
├── .claude/
│   ├── agents/
│   │   ├── agentkit-architect.md
│   │   ├── agentkit-backend-developer.md
│   │   ├── agentkit-frontend-developer.md
│   │   ├── agentkit-security-reviewer.md
│   │   ├── agentkit-code-reviewer.md
│   │   └── agentkit-verifier.md
│   └── settings.json
│
├── AGENTS.md
├── docs/
│   ├── architecture.md
│   ├── runtime-contracts.md
│   ├── roadmap.md
│   └── plans/
│
├── agentkit-server/
└── agentkit-web/
~~~

settings.json 只维护确实需要的项目权限、Hook 和执行设置，不要把所有角色提示词、架构规则和实施细节重复放进去。

### 3. 主 Agent 负责什么

主 Agent 是整个流程的唯一总入口，主要承担以下职责：

1. 读取需求，判断是否需要委派。
2. 核对 AGENTS.md、架构文档和当前实施计划。
3. 将大任务拆分为边界清楚的子任务。
4. 确认 API 契约、文件归属和依赖关系。
5. 向 Subagent 传递必要上下文和验收条件。
6. 监控任务进展，解决依赖和冲突。
7. 整合代码，组织独立审查和验证。
8. 更新实施计划，完成 Git 提交和 PR 交付。

主 Agent 不应该把所有工作都亲自做一遍，也不能只负责转发消息。它必须掌握整体工程状态，对最终集成结果负责。

## 六、M1 后端与 F1 前端应该怎样协同

以 AgentKit 当前的 M1 + F1 为例，我建议分成六个阶段。

### 阶段一：先统一架构和接口契约

先由 Architect 分析：

- 四个 Maven 模块的职责和依赖方向。
- 用户登录与身份传递。
- Session、Run 的创建、查询和访问控制。
- HTTP API 和 SSE 事件契约。
- 前后端状态模型及异常处理。

Architect 输出方案和风险，主 Agent 对照正式架构文档确认。涉及已确认设计的变更，必须先完成决策和授权。

契约确认后再进入并行编码，避免两边各自猜接口。

### 阶段二：后端与前端并行开发

~~~text
                 Main Agent
                     │
              冻结 API 契约
                     │
          ┌──────────┴──────────┐
          │                     │
   Backend Developer     Frontend Developer
          │                     │
   agentkit-server/       agentkit-web/
          │                     │
   Java 后端工程          React 工作台
   登录与身份             V9 视觉实现
   Session / Run          登录和对话界面
   持久化与运行托管        Mock API Adapter
          │                     │
          └──────────┬──────────┘
                     │
                 集成联调
~~~

后端 Agent 只负责 agentkit-server，前端 Agent 只负责 agentkit-web。

前端先使用独立的 Mock Adapter，后端接口稳定后再接入真实 API Adapter。Mock 和真实接口实现必须分离，不能把模拟成功状态当成生产能力。

原型中的 Listing、Skills、知识库、MCP 和管理端等后续功能不属于 v0.1 实施范围，不应因为原型存在就提前开发。

### 阶段三：主 Agent 负责集成

主 Agent 检查：

- 前后端请求和响应字段是否一致。
- 登录态和 CSRF 处理是否正确。
- Session 和 Run 的状态流转是否一致。
- SSE 事件是否符合后端公开事件契约。
- Mock Adapter 是否已经被真实 API Adapter 替换。
- 页面是否展示了尚未实现的功能。

发现契约差异时，先确定统一方案，再把明确的修改任务交给对应开发 Agent。

### 阶段四：独立审查

由 Security Reviewer 和 Code Reviewer 分别检查。

安全审查重点：

- 是否存在身份伪造和越权访问。
- 用户能否读取其他人的 Session 或 Run。
- SSE 订阅是否重新检查权限。
- CSRF 和登录失效处理是否符合约定。
- 后台执行是否错误依赖浏览器登录线程。
- 工具执行是否使用可信的身份上下文。

代码审查重点：

- Maven 模块是否出现循环依赖。
- Controller、Service、Mapper 是否职责清楚。
- AgentScope 类型是否泄漏到 core。
- 是否重复实现 SDK 或已有工具库的能力。
- 前端组件和 API Adapter 是否有不必要的耦合。
- 是否引入了暂时没有实际调用方的抽象。

### 阶段五：工程验证

Verifier 负责执行实际工程检查，并给出可核对的命令和结果：

- 后端受影响模块编译。
- 前端类型检查、Lint 和生产构建。
- 登录、Session 和 Run 的真实业务场景。
- SSE 断开、重新订阅和事件续接。
- 并发准入、请求幂等和取消竞争。
- 数据库故障与终态提交。
- 权限撤销和用户数据隔离。

AgentKit 默认不批量创建测试类，但这不代表省略质量验证。仍然要保留编译、类型检查、Lint、构建和关键业务场景验证。权限、并发和幂等等高风险路径，需要有可重复的验证证据。

### 阶段六：修复与交付

审查发现问题后，由主 Agent 把具体问题交给原开发 Agent 修复。修复后重新执行受影响的检查。

最终由主 Agent：

- 检查 Git diff 和工作区状态。
- 确认没有混入其他 Agent 的无关修改。
- 更新原有实施计划和相关架构说明。
- 统一提交代码并创建 PR。
- 给出已完成内容、验证结果和未解决问题。

未经授权，不自动合并 PR、不执行生产发布。

## 七、这套机制还需要哪些工程约束

Subagents 解决了专业分工和上下文隔离，但它本身不会自动保证代码质量。真正要用于生产项目，还需要一些明确的工程规则。

### 1. 任务边界必须明确

每个任务都要说明修改范围、禁止范围和验收条件。不要只告诉 Agent 一个模块名称，就让它自由发挥。

### 2. 一个文件只能有一个主要修改者

尤其是公共接口、父 POM、全局配置、数据库迁移和架构文档。这些文件必须有明确负责人，不能让多个 Agent 同时修改。

### 3. 权限必须按最小范围配置

研究和审查 Agent 默认只读。开发 Agent 只负责自己的目录。Verifier 只负责执行验证命令，不承担业务源码修改。

如果开放 Bash，还需要通过权限规则和 Hooks 管理危险命令。提示词中的“不要执行 git push”不能代替实际权限控制。

### 4. 架构决策必须有正式记录

主 Agent 和 Subagents 都应该以正式架构文档为依据。发现现有文档与代码不一致时，先核实并报告，不能静默修改架构。

### 5. 验证结果必须有证据

Agent 说“构建通过”不代表构建真的执行过。交付报告必须区分已执行、通过、失败和未执行，保留实际命令和关键输出。

### 6. 先不要过度使用 Memory、Hooks 和嵌套 Agent

第一阶段先把角色定义、任务交接和审查流程跑通。

后续出现重复问题时，再增加：

- PreToolUse：执行前检查危险命令和操作范围。
- PostToolUse：文件修改后执行必要检查。
- SubagentStart / SubagentStop：记录 Agent 生命周期和清理资源。
- Project Memory：沉淀独立于正式架构文档的专业经验。
- Nested Subagents：只在一个专业任务内部确实需要进一步拆分时使用。

Claude Code 默认允许 Subagent 继续创建嵌套 Subagent，默认深度上限是主会话以下三层；默认同时运行的 Subagent 上限是 20 个。可以通过环境变量调整，但这些是平台上限，不是项目的并行度目标。

对 AgentKit 来说，第一阶段一个主 Agent 直接管理六个专业角色已经足够。没有必要为了体现多智能体而把任务层级做复杂。

## 八、分阶段落地，而不是一次性把所有机制做满

我建议按以下顺序推进：

| 阶段 | 建设内容 | 验收重点 |
|---|---|---|
| 第一阶段 | 建立六个项目级 Subagent | 角色职责、工具权限和交付格式清楚 |
| 第二阶段 | 补充主 Agent 调度规则 | 能按任务类型委派，能传递必要上下文 |
| 第三阶段 | 用独立研究和只读审查任务试运行 | 结果准确，主会话上下文不过度膨胀 |
| 第四阶段 | 应用到 M1 + F1 并行开发 | API 契约一致，目录归属明确，没有文件冲突 |
| 第五阶段 | 建立独立审查与验证闭环 | 审查问题能够回到原开发 Agent 修复，验证有证据 |
| 第六阶段 | 根据实际问题补充 Hooks、Memory 和 Worktree 规则 | 机制解决真实问题，而不是增加配置负担 |

第一轮不建议同时引入 Agent Teams、复杂嵌套、全量持久记忆和大量 Hooks。先把最基本的委派、执行、审查和验收跑通，再根据实际效果调整。

## 九、最后的判断

我认为 Claude Code Subagents 对 AgentKit 最大的价值，不是让一个项目同时出现更多个 AI，而是让 AI Coding 从“一个模型自己理解、自己修改、自己说完成”，转变为一套有职责、有边界、有验证的工程协作流程。

这套机制应该坚持几个原则：

1. 主 Agent 负责全局决策、任务调度和最终集成。
2. 专业 Subagents 只承担边界明确的工作。
3. 上下文、工具和工作区按任务隔离。
4. 开发与审查分开，审查结果必须有证据。
5. 工程文档是长期事实来源，Agent Memory 不能取代正式文档。
6. Git 提交、PR、合并和发布必须有明确的责任人和授权。

对 AgentKit 当前阶段，我选择先用 Subagents，而不是直接上 Agent Teams。先让后端和前端能按统一契约并行开发，再让独立审查和验证形成闭环。

**最终目标不是建立一个看起来很复杂的 Agent 组织，而是让 Claude Code 能够持续、稳定、可追溯地完成工程任务。**

---

## 参考资料

- [Claude Code 官方文档：Create custom subagents](https://code.claude.com/docs/en/sub-agents)
- [Claude Code 官方文档：Orchestrate teams of Claude Code sessions](https://code.claude.com/docs/en/agent-teams)
- [AgentKit 仓库](https://github.com/neilyoli/agentkit)
- [AgentKit 架构基线](https://github.com/neilyoli/agentkit/blob/main/docs/architecture.md)
- [AgentKit 开发路线](https://github.com/neilyoli/agentkit/blob/main/docs/roadmap.md)
- [AgentKit v0.1 后端 M1 与前端 F1 并行实施方案 PR #10](https://github.com/neilyoli/agentkit/pull/10)

> 本文记录的是截至 2026-11-17 的 Claude Code 官方机制和 AgentKit 执行方案。Claude Code 的配置字段、版本要求和实验性能力可能继续变化，实际实施时应以官方最新文档及项目锁定版本为准。
