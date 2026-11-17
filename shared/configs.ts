export const hostname = 'https://blog.tomeet.cn'
export const title = 'Neilyo | Full-stack Engineer'
export const description = 'Neilyo 的个人主页，记录全栈开发、Java 工程实践、AI Engineering 与真实项目。'
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
