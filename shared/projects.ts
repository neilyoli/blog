export interface ProjectItem {
  name: string
  subtitle: string
  desc: string
  details?: string[]
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
    desc: '一个面向 Java 生态的 Agent 工程项目，围绕 Agent 执行、会话与任务管理、工具和 Skill 扩展，以及运行时治理持续演进。',
    details: [
      '从最初研究 ReAct Agent，到后来关注 Harness、Agent Runtime 和多智能体协作，我一直在尝试构建一套适合 Java 生态的 Agent 工程体系。',
      'MagicListing 和 Meeting Agent 中积累的实践经验，也会成为 AgentKit 的一部分输入。不是简单搬运业务代码，而是把经过验证、具有通用价值的设计和能力抽象出来，逐步沉淀到工程底座中。',
      '这是一个长期项目，很多设计还会在实践中继续验证和调整。',
    ],
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
    desc: '面向跨境电商运营的 AI Listing 创作产品，围绕平台规则、品牌风格、内容生成与质量校验持续迭代。实践经验也会反过来影响 AgentKit 的设计。',
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
    desc: '围绕企业会议纪要和任务跟进展开，识别行动项、同步负责人和截止日期，并支持任务确认、进展更新与跨会议追踪。实践中积累的通用经验也会逐步沉淀到 AgentKit。',
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
