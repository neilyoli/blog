export const hostname = 'https://blog.tomeet.cn'
export const title = 'Neilyo Blog'
export const description = 'Just infected with a disease called curiosity.'
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
