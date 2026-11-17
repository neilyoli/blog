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
    desc: '一个用 Java 开发的 Agent 底座。我在这里尝试整理 Agent 的执行过程、工具调用和运行管理，让这些能力能在不同应用中复用。',
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
    desc: '面向跨境电商运营的 Listing 创作工具，帮助生成商品文案，并根据不同平台的规则进行适配和检查。',
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
    desc: '把会议里确定的事情变成后续能跟进的任务：从纪要中找出行动项，确认负责人，再同步到飞书，方便持续查看进展。',
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
