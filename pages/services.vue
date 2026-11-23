<script setup lang="ts">
const wechatId = 'Li-Yuan_Cheng'
const copyFeedback = ref('')

useHead({
  title: '项目合作 · Neilyo',
  meta: [{
    name: 'description',
    content: '我接跨境电商 AI 工具和企业内部流程开发。了解 MagicListing、飞书会议待办的实践，以及如何和我开始一个项目。',
  }],
})

async function copyWechat() {
  try {
    await navigator.clipboard.writeText(wechatId)
    copyFeedback.value = '已复制，去微信搜索即可。'
  }
  catch {
    copyFeedback.value = '请长按或选中上方微信号，手动复制。'
  }
}
</script>

<template>
  <article class="services" aria-labelledby="services-title">
    <header class="intro">
      <div>
        <p class="eyebrow">
          <span aria-hidden="true" /> 项目合作
        </p>
        <h1 id="services-title">
          把重复的工作，<br><em>交给软件。</em>
        </h1>
        <p class="intro-text">
          我叫 Neilyo，在跨境电商做全栈开发，也接 AI 应用和业务系统的项目。运营上新品要翻好几张表，开完会还要逐个问进度，这些都是我愿意花时间解决的问题。
        </p>
        <a class="contact-link" href="#contact">
          聊聊你的项目 <span class="i-ri-arrow-right-down-line" aria-hidden="true" />
        </a>
      </div>

      <figure class="specimen">
        <figcaption>会议待办样例 <span lang="en">Meeting Agent</span></figcaption>
        <div class="paper">
          <p class="paper-label">
            会议摘录
          </p>
          <blockquote>“小林，周五前把德国站上个月的退货原因整理一下。”</blockquote>
          <div class="task">
            <p class="paper-label">
              <span class="i-ri-corner-down-right-line" aria-hidden="true" /> 提取的待办
            </p>
            <strong>整理德国站上月退货原因</strong>
            <dl>
              <div><dt>负责人</dt><dd>小林</dd></div>
              <div><dt>截止</dt><dd>本周五</dd></div>
              <div><dt>状态</dt><dd>待本人确认</dd></div>
            </dl>
          </div>
        </div>
      </figure>
    </header>

    <section class="offers" aria-labelledby="offers-title">
      <h2 id="offers-title">
        哪些项目可以找我
      </h2>
      <div class="offer">
        <h3>跨境电商的<br class="desktop-break">商品内容工具</h3>
        <div>
          <p>如果运营上架一个 SKU，要在商品表、品牌手册和平台后台之间来回切换，我可以把这几步接到一起。先取商品资料，按站点和品牌规则生成标题、卖点，再把需要核对的内容留给运营审核。</p>
          <p>做 MagicListing 时，我最在意的是缺资料的商品。比如水杯的容量没填，草稿里就该把它标出来，让运营找产品同事核实。</p>
          <RouterLink class="case-link" to="/projects">
            看 MagicListing 项目介绍 <span aria-hidden="true">→</span>
          </RouterLink>
        </div>
      </div>
      <div class="offer">
        <h3>飞书与内部系统的<br class="desktop-break">流程开发</h3>
        <div>
          <p>如果开完会有人抄纪要、有人填表、下周再开会还得翻聊天记录，我可以把纪要接进飞书，让负责人收到待办并确认，后续进展回到同一张表里。这是我做 Meeting Agent 时处理的场景。</p>
          <p>如果你们已经有 Java 后台、审批流或数据接口，我会先看现有权限和接口能用到哪一步，再补上缺的环节。</p>
          <RouterLink class="case-link" to="/posts/2026-08-13-会议助手智能体">
            读我的飞书接入笔记 <span aria-hidden="true">→</span>
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="contact" aria-labelledby="contact">
      <div>
        <h2 id="contact" tabindex="-1">
          从一件具体的事聊起。
        </h2>
        <p>加微信时可以提一句「博客合作」。挑一个最近遇到的例子，说说谁在做、卡在哪一步、你希望最后能看到什么结果。</p>
        <p>我们可以先拿一份脱敏样本走一遍，定下第一版做什么、用什么结果验收，再谈工期和费用。</p>
      </div>
      <div class="wechat">
        <p class="paper-label">
          <span class="i-ri-wechat-line" aria-hidden="true" /> 我的微信
        </p>
        <strong class="wechat-id">{{ wechatId }}</strong>
        <button type="button" class="case-link" @click="copyWechat">
          <span class="i-ri-file-copy-line" aria-hidden="true" /> 复制微信号
        </button>
        <p class="copy-feedback" role="status">
          {{ copyFeedback }}
        </p>
      </div>
    </section>
  </article>
</template>

<style scoped>
.services {
  --ink: #202a39;
  --muted: #516074;
  --line: #cdd7e1;
  --accent: #185f9f;
  --wash: #eef4f8;
  --paper: #fff;
  max-width: 1010px;
  margin: 0 auto;
  color: var(--ink);
}
html.dark .services {
  --ink: #f4f6fa;
  --muted: #c8d3df;
  --line: #59697d;
  --accent: #a8d3ff;
  --wash: #2b3849;
  --paper: #354456;
}
.services p { margin: 0; }
.intro, .contact {
  display: grid;
  grid-template-columns: minmax(0, 1.14fr) minmax(0, .86fr);
  align-items: center;
  gap: clamp(32px, 6vw, 80px);
}
.intro { padding: clamp(18px, 3vw, 42px) 0 clamp(48px, 7vw, 84px); }
.eyebrow, .paper-label, figcaption {
  display: flex;
  align-items: center;
  gap: .65rem;
  font-size: .83rem;
  font-weight: 700;
}
.eyebrow, .paper-label { color: var(--accent); }
.eyebrow > span { width: 2rem; border-top: 2px solid; }
h1 {
  margin: 20px 0;
  font-size: clamp(2.6rem, 5vw, 4.45rem);
  line-height: 1.16;
  letter-spacing: -.045em;
}
h1, h2, h3 { font-weight: 700; }
h1 em { color: var(--accent); font-style: normal; }
.intro-text, .offer p, .contact p:not(.paper-label) {
  color: var(--muted);
  line-height: 1.85;
}
.intro-text { max-width: 29em; font-size: 1.06rem; }
.contact-link, .case-link {
  display: inline-flex;
  align-items: center;
  gap: .55rem;
  font-weight: 700;
}
.contact-link {
  margin-top: 24px;
  padding: .65rem 1.1rem;
  border-radius: 4px;
  background: var(--ink);
  color: var(--paper);
}
.contact-link:hover { background: var(--accent); }
.specimen {
  margin: 0;
  padding: clamp(16px, 2.2vw, 30px);
  border-radius: 2px 18px 2px 2px;
  background-color: var(--wash);
  background-image: radial-gradient(var(--line) .8px, transparent .8px);
  background-size: 9px 9px;
}
figcaption { justify-content: space-between; margin-bottom: 16px; }
figcaption span { font-weight: 400; color: var(--muted); }
.paper {
  padding: clamp(18px, 2.2vw, 30px);
  border: 1px solid var(--line);
  border-top: 3px solid var(--accent);
  background: var(--paper);
  box-shadow: 3px 4px 0 var(--wash), 4px 5px 0 var(--line);
  transform: rotate(-1deg);
}
blockquote { margin: .65rem 0 1.1rem; font-size: 1.2rem; line-height: 1.55; }
.task { border-top: 1px dashed var(--line); padding-top: 1rem; }
.task strong { display: block; margin: .5rem 0; font-size: 1.05rem; }
.task dl { display: flex; flex-wrap: wrap; gap: .5rem 1.5rem; }
.task dt { color: var(--muted); font-size: .78rem; }
.task dd { margin: .15rem 0 0; font-size: .88rem; }
.offers, .offer, .contact { border-top: 1px solid var(--line); }
.offers { padding-top: clamp(28px, 4vw, 48px); }
h2 { font-size: clamp(1.7rem, 3vw, 2.4rem); line-height: 1.3; }
.offers h2 { margin-bottom: 24px; }
.offer {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: clamp(24px, 5vw, 60px);
  padding: clamp(22px, 3.5vw, 38px) 0;
}
h3 { font-size: clamp(1.3rem, 2.1vw, 1.7rem); line-height: 1.45; }
.offer p + p, .contact p + p { margin-top: .6rem; }
.case-link {
  margin-top: .7rem;
  padding: .35rem 0;
  color: var(--accent);
  text-decoration: underline;
  text-underline-offset: .3em;
  text-decoration-color: var(--line);
}
.case-link:hover { text-decoration-color: currentColor; }
.contact {
  align-items: start;
  padding: clamp(24px, 4vw, 44px);
  background: var(--wash);
}
.contact h2 { margin-bottom: 14px; scroll-margin-top: 5rem; }
.wechat { border-left: 1px solid var(--line); padding-left: clamp(20px, 3vw, 36px); }
.wechat-id { display: block; margin-top: .5rem; font-size: clamp(1.5rem, 2.8vw, 2.2rem); user-select: all; }
.copy-feedback { font-size: .85rem; }
.services :is(a, button):focus-visible { outline: 2px solid var(--accent); outline-offset: 4px; }
@media (max-width: 720px) {
  .intro, .contact { grid-template-columns: 1fr; }
  .specimen { max-width: 450px; width: 100%; }
  .offer { grid-template-columns: 1fr; gap: .7rem; }
  .desktop-break { display: none; }
  .wechat { border-left: 0; border-top: 1px solid var(--line); padding: 20px 0 0; }
}
</style>
