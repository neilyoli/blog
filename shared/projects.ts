export interface ProjectItem {
  name: string
  question: string
  desc: string
  note?: string
  icon: string
  tech: string[]
  status: string
  link?: string
  repo?: string
}

export const selectedProjects: ProjectItem[] = [
  {
    name: 'Meeting Agent',
    status: '公开插件',
    question: '会上有两位小陈，这条待办发给谁？',
    desc: '我做的会议助手从飞书纪要里提取行动项，并保留对应的原话。模型可以提议负责人，程序会拿参会人名单核对。遇到同名，就把这条留给人确认。被点名接活的人，应该能看到依据。',
    icon: 'i-carbon-calendar-check',
    link: 'https://github.com/neilyoli/agenteam/tree/main/agenteam-server/agenteam-plugin-meeting',
    repo: 'neilyoli/agenteam',
    tech: [
      'i-logos-java',
      'i-logos-spring-icon',
      'i-logos-mysql',
    ],
  },
  {
    name: 'AgentKit',
    status: '私有项目',
    question: '服务器还有心跳，能说明任务还在跑吗？',
    desc: '做 Java Agent 底座时，我把仓库里的心跳实现翻了一遍。它能证明 JVM 还活着，却回答不了某次任务卡在哪一步。我把这条边界记进复用清单，后面设计任务恢复时，还得单独看每次执行的状态。',
    note: '/posts/2026-11-20-ai-coding之前先看懂项目已有能力',
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
    question: '同一件商品，换个平台，标题还能照搬吗？',
    desc: '我做 MagicListing 时，把写商品卖点和检查平台规则分成了两步。模型负责起草，程序按目标平台检查。这样运营改一句文案时，能分清是在调整说法，还是碰到了发布规则。',
    icon: 'i-carbon-shopping-bag',
    tech: [
      'i-logos-java',
      'i-logos-spring-icon',
      'i-logos-vue',
      'i-logos-typescript-icon',
    ],
  },
]
