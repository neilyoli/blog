<script setup lang="ts">
import { description, hostname, selectedProjects, title } from '../shared'
import { formatDate } from '~/utils'

useHead({
  link: [{ rel: 'canonical', href: `${hostname}/` }],
  meta: [
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: `${hostname}/` },
    { property: 'og:image', content: `${hostname}/avatar.webp` },
    { property: 'og:image:alt', content: 'Neilyo 的手绘头像' },
    { name: 'twitter:card', content: 'summary' },
  ],
})

const { blogs } = useBlog()
const recentPosts = computed(() => blogs.value.slice(0, 3))
</script>

<template>
  <div class="journal">
    <section class="journal-hero" aria-labelledby="journal-title">
      <div>
        <p class="byline">
          Neilyo 的工程手记
        </p>
        <h1 id="journal-title">
          代码写完了。<br><em>然后呢？</em>
        </h1>
        <p class="intro">
          我是 Neilyo，写 Java 后端，也用 React 和 Vue 做前端。现在往 AI FDE（前置型交付工程师）方向走。
        </p>
        <p class="intro">
          接到「想做个 AI 助手」的需求，我喜欢先把椅子拉过去：「带我走一遍，你平时怎么做？」从哪个窗口复制，往哪张表里粘，看过一遍，才知道代码该写在哪儿。
        </p>
        <div class="hero-actions">
          <a class="primary-link" href="#projects">看我做过的项目 <span aria-hidden="true">↓</span></a>
          <RouterLink class="text-link" to="/posts">
            读工程笔记 <span aria-hidden="true">→</span>
          </RouterLink>
        </div>
      </div>
      <a class="author-card" href="https://github.com/neilyoli" aria-label="在 GitHub 上认识 Neilyo">
        <div class="portrait"><img class="no-zoom" src="/avatar.webp" alt="" width="190" height="190"></div>
        <div class="author-caption"><strong>Neilyo</strong><span>GitHub · @neilyoli</span></div>
      </a>
    </section>

    <section id="projects" class="journal-section" aria-labelledby="projects-title">
      <div class="section-heading">
        <h2 id="projects-title">
          项目里的三个问题
        </h2>
        <RouterLink class="text-link" to="/projects">
          项目索引 <span aria-hidden="true">→</span>
        </RouterLink>
      </div>
      <article v-for="project in selectedProjects" :key="project.name" class="case-row">
        <div class="case-label">
          <strong>{{ project.name }}</strong><span>{{ project.status }}</span>
        </div>
        <div>
          <h3>{{ project.question }}</h3>
          <p>{{ project.desc }}</p>
          <a v-if="project.link" class="text-link" :href="project.link">看插件源码 <span aria-hidden="true">↗︎</span></a>
          <RouterLink v-else-if="project.note" class="text-link" :to="project.note">
            读这次源码盘点 <span aria-hidden="true">→</span>
          </RouterLink>
        </div>
      </article>
    </section>

    <section class="journal-section" aria-labelledby="notes-title">
      <div class="section-heading">
        <h2 id="notes-title">
          最近写下的事
        </h2>
        <RouterLink class="text-link" to="/posts">
          全部文章 <span aria-hidden="true">→</span>
        </RouterLink>
      </div>
      <ul class="note-list">
        <li v-for="post in recentPosts" :key="post.path">
          <RouterLink class="note-link" :to="post.path">
            <time :datetime="post.date">{{ formatDate(post.date) }}</time>
            <span>{{ post.title }}</span>
            <span class="note-arrow" aria-hidden="true">→</span>
          </RouterLink>
        </li>
      </ul>
    </section>

    <section class="journal-section signoff" aria-labelledby="hello-title">
      <h2 id="hello-title">
        换你讲讲？
      </h2>
      <p>如果我们有半小时，我很想听听你手头那个「明明有系统，大家却还在手工做」的环节。聊岗位、聊合作，从一件具体的小事开始，我比较聊得开。</p>
      <nav class="social-links" aria-label="Neilyo 的公开主页">
        <a href="https://github.com/neilyoli">GitHub</a>
        <a href="https://gitee.com/lycnihao">Gitee</a>
        <a href="https://www.zhihu.com/people/neilyo-99-90">知乎</a>
        <a href="https://space.bilibili.com/327872329">Bilibili</a>
      </nav>
      <p class="postscript">
        合上电脑，我喜欢骑车、打羽毛球、听歌。<RouterLink class="text-link" to="/photos">
          相册里还有一场雪。
        </RouterLink>
      </p>
    </section>
  </div>
</template>

<route lang="yaml">
meta:
  layout: about
</route>
