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
        FULL-STACK ENGINEER
      </p>
      <h1 class="m-0 text-4xl sm:text-5xl font-bold tracking-tight leading-tight text-c-dark">
        Hi, I'm <span class="text-brand">Neilyo</span>.
      </h1>
      <p class="mt-3 text-lg sm:text-xl font-semibold text-c-dark">
        Full-stack Engineer
      </p>
      <p class="mt-5 text-xl sm:text-2xl leading-relaxed tracking-tight text-c-dark">
        从后端到前端，把想法做成能用的软件。
      </p>
      <p class="mt-4 max-w-2xl text-base leading-8 text-c-light">
        平时主要做 Java 后端，也做 React、Vue 和 TypeScript 前端。我喜欢把一个功能从需求、开发一直做到上线。最近也在尝试把大模型和 Agent 用到实际项目里。
      </p>
      <div class="mt-6 flex flex-wrap gap-3">
        <a href="/projects" class="btn px-4 py-2.5">
          Selected Projects
          <span class="i-ri-arrow-right-up-line ml-1" />
        </a>
        <a href="/posts" class="btn px-4 py-2.5">
          Writing & Notes
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
      <p class="text-xs tracking-[0.16em] uppercase text-c-lighter">
        Code · Build · Learn
      </p>
    </div>
  </section>
</div>

## About Me

你好，我是 Neilyo，一名全栈工程师，主要做 Java 后端开发，也负责 React、Vue、TypeScript 等前端工作。

比起只负责一个接口或页面，我更喜欢把一个功能完整地做出来：先弄清楚需求，再设计接口和数据结构，接着完成前后端开发、联调和部署。上线之后，也会根据实际使用情况继续调整。

最近我在做一些 AI 相关的项目，关注大模型、Agent 和 MCP 在实际开发中的用法，也会记录 AI 辅助编程时遇到的问题和经验。

## What I Work On

<div class="not-prose grid grid-cols-1 sm:grid-cols-3 gap-3 my-5">
  <article class="rounded-xl border border-c p-5 bg-c">
    <div class="flex items-center gap-2 text-c-dark font-semibold">
      <span class="i-logos-java text-xl" />
      Backend
    </div>
    <p class="mt-3 text-sm leading-6 text-c-light">
      Java、Spring Boot、数据库设计和 API 开发。
    </p>
  </article>
  <article class="rounded-xl border border-c p-5 bg-c">
    <div class="flex items-center gap-2 text-c-dark font-semibold">
      <span class="i-logos-react text-xl" />
      Frontend
    </div>
    <p class="mt-3 text-sm leading-6 text-c-light">
      React、Vue、TypeScript、页面交互和前后端联调。
    </p>
  </article>
  <article class="rounded-xl border border-c p-5 bg-c">
    <div class="flex items-center gap-2 text-c-dark font-semibold">
      <span class="i-carbon-ai text-xl" />
      AI Applications
    </div>
    <p class="mt-3 text-sm leading-6 text-c-light">
      大模型接入、Agent、MCP，以及 AI 辅助编程。
    </p>
  </article>
</div>

## Selected Projects

这里放了三个我正在投入的项目，分别涉及 Agent 开发、AI 产品和会议任务管理。部分项目代码暂未公开，我会在项目卡片中注明。

<ProjectGrid />

## How I Work

- **先把需求弄清楚：** 明确要解决什么问题，再开始设计和编码。
- **尽量把事情做完整：** 不只完成单个接口或页面，也关注联调、部署和后续维护。
- **代码保持简单：** 能用现有能力解决的问题，不重复造轮子。
- **把 AI 用在合适的地方：** 让它帮忙处理重复工作，关键设计和结果仍然认真检查。

## Writing & Notes

平时会把开发中遇到的问题、项目里的技术选择，以及对 AI 编程和 Agent 的一些尝试整理成文章。

<ListPosts :limit="3" />

<div class="not-prose mt-5">
  <a href="/posts" class="text-sm font-medium text-brand hover:underline">
    查看全部文章
    <span class="i-ri-arrow-right-line ml-1 align-middle" />
  </a>
</div>

## Beyond Code

工作之外，喜欢骑行、打羽毛球和听音乐。

<route lang="yaml">
meta:
  layout: about
</route>
