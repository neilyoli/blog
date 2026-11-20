export const hostname = 'https://blog.tomeet.cn'
export const title = 'Neilyo 的工程手记 | Java 全栈与 AI FDE'
export const description = '我是 Neilyo，一名走向 AI FDE 的 Java 全栈工程师。这里记录会议助手、AgentKit 和跨境商品文案工具里的工程取舍，也收着我的照片和近况。'
export const author = 'Neilyo'

export const themeLight = '#ffffff'
export const themeDark = '#374151'
export const shikiTheme = {
  light: 'github-light',
  dark: 'github-dark-dimmed',
}

export const lastUpdatedText = '最后更新于:'
export const editLink = {
  pattern:
    'https://github.com/neilyoli/blog/edit/master/pages:path',
  text: '在 GitHub 中修改此页',
}

// Enable only after configuring GitHub Discussions and the repository IDs from giscus.app.
export const giscus = {
  enabled: false,
  repo: 'neilyoli/blog',
  repoId: '',
  category: '',
  categoryId: '',
  light: 'light',
  dark: `${hostname}/css/giscus-dark.css`,
}
