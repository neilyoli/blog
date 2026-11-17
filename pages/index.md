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
      <p class="mt-3 text-lg sm:text-xl font-semibold text-c-dark">
        AI FDE · Full-stack Engineer
      </p>
      <p class="mt-5 text-xl sm:text-2xl leading-relaxed tracking-tight text-c-dark">
        从业务问题出发，把 AI 做进实际工作。
      </p>
      <p class="mt-4 max-w-2xl text-base leading-8 text-c-light">
        我主要使用 Java 做后端，也熟悉 React、Vue 和 TypeScript。现在正把工作重心转向 AI FDE：和业务使用者一起梳理问题，找到适合 AI 介入的环节，再把模型、Agent 和现有系统连接起来，做成能实际使用的工具。
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
        Understand · Build · Deliver
      </p>
    </div>
  </section>
</div>

## About Me

你好，我是 Neilyo。之前主要做 Java 后端和全栈项目，也参与前端开发、系统集成和产品交付。

相比拿到需求就开始写代码，我更愿意先弄清楚实际工作是怎么进行的：谁在使用、流程卡在哪里、哪些事情重复又耗时，再判断技术能不能帮上忙。

最近我把更多精力放在 AI 应用上，尝试把大模型、Agent 和 MCP 接入实际业务。对我来说，AI FDE 不只是做一个能对话的 Demo，还要把需求、数据、现有系统和使用流程一起考虑，让做出来的东西真正有人用。

## What I Do

<div class="not-prose grid grid-cols-1 sm:grid-cols-3 gap-3 my-5">
  <article class="rounded-xl border border-c p-5 bg-c">
    <div class="flex items-center gap-2 text-c-dark font-semibold">
      <span class="i-carbon-chat text-xl" />
      Understand
    </div>
    <p class="mt-3 text-sm leading-6 text-c-light">
      和业务使用者梳理工作流程、实际问题和预期结果，先确定什么值得解决。
    </p>
  </article>
  <article class="rounded-xl border border-c p-5 bg-c">
    <div class="flex items-center gap-2 text-c-dark font-semibold">
      <span class="i-carbon-flow text-xl" />
      Design
    </div>
    <p class="mt-3 text-sm leading-6 text-c-light">
      结合现有系统和数据，选择合适的模型、Agent、MCP 或自动化方案，并先做验证。
    </p>
  </article>
  <article class="rounded-xl border border-c p-5 bg-c">
    <div class="flex items-center gap-2 text-c-dark font-semibold">
      <span class="i-carbon-application-web text-xl" />
      Build & Deliver
    </div>
    <p class="mt-3 text-sm leading-6 text-c-light">
      用 Java 和现代 Web 技术完成开发、系统集成与部署，再根据实际反馈继续调整。
    </p>
  </article>
</div>

## Technical Background

日常开发主要使用 Java、Spring Boot，也使用 React、Vue 和 TypeScript 构建 Web 应用。AI 相关工作会接触大模型、Agent、MCP、工具调用和知识库等能力。

我更关注这些技术怎么配合起来解决问题，而不是单独追逐某个框架或模型。

## Selected Projects

这些项目是我近期投入较多的实践，分别涉及 Agent 底座、AI 产品和企业会议任务管理。部分项目代码暂未公开，我会在项目卡片中注明。

<ProjectGrid />

## How I Work

- **先到实际场景里了解问题：** 和使用者确认现状、卡点和真正想要的结果。
- **先验证，再扩大范围：** 用小的原型或实际流程验证方案，不急着堆功能。
- **考虑完整使用过程：** 数据从哪里来、工具能做什么、权限如何控制、出错后怎么办，都要提前想清楚。
- **上线后继续跟进：** 看实际使用情况，听反馈，再决定怎么改。

## Writing & Notes

这里记录项目开发中的技术选择、踩过的坑，以及我对 AI 应用和工程实践的思考。

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
