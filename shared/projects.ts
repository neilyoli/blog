export interface ProjectItem {
  name: string
  subtitle: string
  desc: string
  icon: string
  tech: string[]
  status: string
  featured?: boolean
  link?: string
  repo?: string
}

export const selectedProjects: ProjectItem[] = [
  {
    name: 'AgentKit',
    subtitle: 'My Long-term Exploration of Agent Engineering',
    featured: true,
    status: '持续探索 · 私有项目',
    desc: '这是我目前长期投入的个人项目，也是我在 AI 工程方向最重要的一次探索。从最初研究 ReAct Agent，到后来关注 Harness、Agent Runtime 和多智能体协作，我一直在尝试构建一套适合 Java 生态的 Agent 工程体系。项目以 Java 为主要技术栈，围绕 Agent 执行、会话与任务管理、工具和 Skill 扩展，以及运行时治理持续演进。MagicListing 和 Meeting Agent 中积累的实践经验，也会成为 AgentKit 的一部分输入。不是简单搬运业务代码，而是把经过验证、具有通用价值的设计和能力抽象出来，逐步沉淀到工程底座中。这是一个长期项目，很多设计还会在实践中继续验证和调整。',
    icon: 'i-carbon-bot',
    tech: [
      'i-logos-java',
      'i-logos-spring-icon',
      'i-logos-react',
      'i-logos-typescript-icon',
    ],
  },
  {
    name: 'MagicListing',
    subtitle: 'AI-powered Listing Creation',
    status: '持续迭代 · 私有项目',
    desc: '一个面向跨境电商运营的 AI Listing 创作产品。商品 Listing 看起来只是标题、描述和卖点文案，但实际生成时还需要考虑平台规则、品牌风格和运营策略。项目围绕内容生成、质量校验和平台适配持续迭代。目前采用 Skill、Java Validator 和平台 Extension Schema 的分层设计，让生成能力与确定性规则各自承担合适的职责。这是我在 AI 产品方向的一项持续实践，也让我接触到不少真实业务中的问题。这些问题和解决经验，也会反过来影响 AgentKit 的设计。',
    icon: 'i-carbon-shopping-bag',
    tech: [
      'i-logos-java',
      'i-logos-spring-icon',
      'i-logos-vue',
      'i-logos-typescript-icon',
    ],
  },
  {
    name: 'Meeting Agent',
    subtitle: 'From Meeting Notes to Follow-ups',
    status: '持续迭代 · 公开插件',
    desc: '这个项目围绕企业会议纪要和任务跟进展开。会议中形成的事项，需要从纪要里识别出来，判断是否进入督办，明确负责人、协作人和截止日期，再同步到飞书多维表格，供后续持续跟进。从纪要分析、任务识别，到负责人确认、任务进展更新和跨会议追踪，整个过程涉及 Agent 工作流、业务规则和外部系统集成。相比生成一份会议摘要，我更关注会议中的事情能否真正进入后续工作流程。这也是一次很有价值的企业 AI 应用实践，其中积累的通用经验，也会逐步沉淀到 AgentKit。',
    icon: 'i-carbon-calendar-check',
    link: 'https://github.com/neilyoli/agenteam/tree/main/agenteam-server/agenteam-plugin-meeting',
    repo: 'neilyoli/agenteam',
    tech: [
      'i-logos-java',
      'i-logos-spring-icon',
      'i-logos-mysql',
    ],
  },
]
