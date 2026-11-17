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
        FULL-STACK ENGINEER · SOFTWARE BUILDER
      </p>
      <h1 class="m-0 text-4xl sm:text-5xl font-bold tracking-tight leading-tight text-c-dark">
        Hi, I'm <span class="text-brand">Neilyo</span>.
      </h1>
      <p class="mt-3 text-lg sm:text-xl font-semibold text-c-dark">
        Full-stack Engineer
      </p>
      <p class="mt-5 text-xl sm:text-2xl leading-relaxed tracking-tight text-c-dark">
        Building software from backend to frontend.
      </p>
      <p class="mt-4 max-w-2xl text-base leading-8 text-c-light">
        拥有 7 年软件开发经验，以 Java 后端开发为主，同时参与 React、Vue 与 TypeScript 驱动的现代 Web 应用开发。近期持续投入 AI 工程实践，探索如何将 Agent、MCP 与自动化能力融入真实产品。
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

我是一名拥有 7 年软件开发经验的全栈工程师，主要使用 Java、Spring Boot 构建后端系统，也参与现代 Web 应用的设计与实现。

我习惯从完整产品的角度思考问题：先理解业务目标和约束，再梳理模块边界、数据流与接口契约，最后推进前后端实现、部署和持续迭代。比起堆砌技术名词，我更在意软件是否真正解决问题，是否可靠、易于维护，并能随着需求变化持续演进。

在 AI 方向，我持续实践大模型应用、Agent Runtime、MCP 与 AI Coding，关注如何把模型能力接入现有系统和真实业务，而不是停留在概念 Demo。

## What I Build

<div class="not-prose grid grid-cols-1 sm:grid-cols-3 gap-3 my-5">
  <article class="rounded-xl border border-c p-5 bg-c">
    <div class="flex items-center gap-2 text-c-dark font-semibold">
      <span class="i-logos-java text-xl" />
      Backend Engineering
    </div>
    <p class="mt-3 text-sm leading-6 text-c-light">
      Java、Spring Boot、API 设计、数据建模与企业级后端系统。
    </p>
  </article>
  <article class="rounded-xl border border-c p-5 bg-c">
    <div class="flex items-center gap-2 text-c-dark font-semibold">
      <span class="i-logos-react text-xl" />
      Frontend Engineering
    </div>
    <p class="mt-3 text-sm leading-6 text-c-light">
      React、Vue、TypeScript、组件化开发与现代 Web 交互体验。
    </p>
  </article>
  <article class="rounded-xl border border-c p-5 bg-c">
    <div class="flex items-center gap-2 text-c-dark font-semibold">
      <span class="i-carbon-ai text-xl" />
      AI Engineering
    </div>
    <p class="mt-3 text-sm leading-6 text-c-light">
      LLM 应用、Agent、MCP、Skills 与 AI Coding 工程实践。
    </p>
  </article>
</div>

## Selected Projects

围绕工程底座、AI 产品和企业业务场景持续实践。部分项目仓库为私有项目，公开代码入口会单独标注。

<ProjectGrid />

## Engineering Approach

- **从问题出发：** 先弄清楚业务目标、使用场景和约束，再决定技术方案。
- **控制复杂度：** 重视模块边界、接口契约和清晰的分层设计。
- **关注交付质量：** 不止让功能跑起来，也关注部署、维护和后续演进。
- **合理使用 AI：** 让 AI 承担高重复度工作，把架构判断、业务决策和质量把关留在人手里。

## Writing & Notes

记录全栈开发、Java 工程实践、Agent 架构与 AI Coding 过程中的经验和思考。

<ListPosts :limit="3" />

<div class="not-prose mt-5">
  <a href="/posts" class="text-sm font-medium text-brand hover:underline">
    查看全部文章
    <span class="i-ri-arrow-right-line ml-1 align-middle" />
  </a>
</div>

## Beyond Code

工作之外，喜欢骑行、羽毛球和音乐。保持好奇，也保持生活的节奏。

<route lang="yaml">
meta:
  layout: about
</route>
