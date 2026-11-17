export interface ProjectItem {
  name: string
  desc: string
  icon: string
  tech: string[]
  status: string
  link?: string
  repo?: string
}

export const selectedProjects: ProjectItem[] = [
  {
    name: 'AgentKit',
    status: '私有项目',
    desc: '面向 Java 技术栈的 Agent 工程底座，围绕 ReAct、运行时管理、工具接入与 Harness 架构持续演进。',
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
    status: '私有项目',
    desc: '面向跨境电商的 AI Listing 创作工具，实践商品内容生成、多平台规则适配与质量评估。',
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
    status: '公开插件',
    desc: '将会议纪要转化为可执行任务，围绕行动项识别、负责人确认、飞书同步与持续督办，连接会议决策和后续执行。',
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
