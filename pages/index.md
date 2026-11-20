---
socials:
  - icon: i-eva:github-outline
    name: GitHub
    link: https://github.com/neilyoli
  - icon: i-ri:git-repository-line
    name: Gitee
    link: https://gitee.com/lycnihao
  - icon: i-ant-design:zhihu-outlined
    name: Zhihu
    link: https://www.zhihu.com/people/neilyo-99-90
    alias: zhihu
  - icon: i-ri:bilibili-fill
    name: Bilibili
    link: https://space.bilibili.com/327872329
    alias: bilibili
---

<div class="not-prose max-w-4xl mx-auto">
  <section class="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_200px] gap-8 md:gap-12 items-center py-8 md:py-12">
    <div>
      <p class="text-xs font-semibold tracking-[0.18em] text-c-lighter mb-4">
        AI FDE · FULL-STACK ENGINEER
      </p>
      <h1 class="m-0 text-4xl sm:text-5xl font-bold tracking-tight leading-tight text-c-dark">
        Hi, I'm <span class="text-brand">Neilyo</span>.
      </h1>
      <p class="mt-4 max-w-2xl text-base leading-8 text-c-light">
        平时写 Java，也做前端和 AI 应用。最近主要在研究 Agent 工程，也在持续做一些和 AI 有关的产品。
      </p>
      <p class="mt-3 max-w-2xl text-base leading-8 text-c-light">
        这里记录我正在做的项目、技术实践，以及生活里一些有意思的片段。
      </p>
      <div class="mt-6 flex flex-wrap gap-3">
        <a href="#projects" class="btn px-4 py-2.5">
          Explore Projects
          <span class="i-ri-arrow-right-up-line ml-1" />
        </a>
        <a href="https://github.com/neilyoli" class="btn px-4 py-2.5" target="_blank" rel="noopener noreferrer">
          GitHub
          <span class="i-ri-arrow-right-up-line ml-1" />
        </a>
      </div>
      <Links :links="frontmatter.socials" class="mt-5" />
    </div>

    <div class="flex flex-col items-center justify-center gap-3 md:justify-self-end">
      <img
        src="/avatar.webp"
        alt="Neilyo"
        class="no-zoom h-40 w-40 sm:h-48 sm:w-48 rounded-full border border-c object-cover shadow-sm"
      >
    </div>
  </section>
</div>

## About Me

### A Little About Me

我叫 Neilyo，是一名软件工程师。

Java 是日常开发中的主要技术栈，前端也会自己动手。从后端服务到 Web 应用，从业务系统到 AI 产品，平时接触的东西还挺杂。

最近投入比较多的是 AI 应用和 Agent 工程。大模型、Agent Runtime、MCP、工具调用，以及 AI Coding，都是我正在持续研究的方向。

**AI 写代码越来越快，但好的规范会让项目走得更远。**

这也是我最近在自己的项目中反复实践的一件事。架构设计、代码规范、能力复用和文档沉淀，看起来不像直接交付功能，却会影响一个项目能不能持续迭代。我希望在利用 AI 提高开发效率的同时，也把这些基础工作做好。

工作之外，喜欢骑行、打羽毛球和听音乐。生活里还有不少值得花时间的事情。

这里是我的个人空间，项目、想法和生活记录都会慢慢放进来。

## Projects

<div id="projects" />

### Things I'm Building

目前主要在做三个项目。

它们有不同的出发点，但并不是完全独立的。MagicListing 和 Meeting Agent 提供真实的业务场景，AgentKit 则是我长期投入的技术探索主线。

在业务项目中遇到的问题，会成为新的研究起点；经过实践验证、具有通用价值的设计和能力，再逐步沉淀到 AgentKit。

<ProjectGrid featured />

## Beyond Code

### Beyond the Screen

电脑之外，也有自己的生活。

喜欢骑行、打羽毛球和听音乐。天气合适的时候出去骑一段，偶尔约场球，或者找点喜欢的音乐听听。

以后这里也会放一些和技术无关的记录。

## Connect

### Find Me Elsewhere

如果你也对 AI、Agent 工程、开源项目或者软件开发感兴趣，欢迎交流。

也可以在下面这些地方找到我。

<Links :links="frontmatter.socials" class="mt-5" />

<route lang="yaml">
meta:
  layout: about
</route>
