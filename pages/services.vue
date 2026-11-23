<script setup lang="ts">
const wechatId = 'Li-Yuan_Cheng'
const copyFeedback = ref('')

useHead({
  title: '项目合作 · Neilyo',
  meta: [{
    name: 'description',
    content: 'Neilyo 的 Agent 项目合作页。聊聊 MagicListing 的商品文案实践、AgentKit 的应用方向、飞书会议纪要跟进，以及企业内部数仓 MCP 查询服务。',
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
          我给业务团队<br><em>做 AI Agent。</em>
        </h1>
        <p class="intro-text">
          我叫 Neilyo，在跨境电商做全栈开发，也在做自己的 Java Agent 项目 AgentKit。写一版能上架的 Listing，把会上定的事跟到下周例会，让运营自己查到数仓里的数据，这几类项目我都愿意接。
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
        三个可以一起做的场景
      </h2>
      <div class="offer">
        <h3>从 SKU 资料<br class="desktop-break">生成商品 Listing</h3>
        <div>
          <p>拿亚马逊上的一款收纳架来说。运营选好 SKU 和目标站点，Agent 读取商品规格，按品牌要求起草标题、五点卖点和描述。资料里只写了“三层”，草稿就不能凭空多出“承重 30 公斤”。缺的参数留给运营核实。</p>
          <p>这套做法来自我做的 MagicListing。我想在 AgentKit 里用同一款商品试写两个站点的 Listing。两个站点共用读取 SKU 资料的工具，各自的语言、尺寸单位和品牌写作要求放进对应的 Skill，最后由运营审稿。</p>
          <RouterLink class="case-link" to="/projects">
            看 AgentKit 和 MagicListing 项目介绍 <span aria-hidden="true">→</span>
          </RouterLink>
        </div>
      </div>
      <div class="offer">
        <h3>把会议纪要<br class="desktop-break">变成有人跟的待办</h3>
        <div>
          <p>会上说“售后整理退货原因，产品再改说明书”，其实有两件事要跟。我做的 Meeting Agent 从飞书纪要里提取待办，分别发给负责人确认。会上只提部门的，还得问一句具体谁来接。没定的截止日期也留待补充。</p>
          <p>负责人确认后，任务和后续进展都记在飞书多维表格里。下次例会前，主持人可以直接看退货分析交了没有、说明书改到哪一步，也能回看当时是哪次会定下来的。</p>
          <RouterLink class="case-link" to="/posts/2026-08-13-会议助手智能体">
            读我的飞书接入笔记 <span aria-hidden="true">→</span>
          </RouterLink>
        </div>
      </div>
      <div class="offer">
        <h3>给公司内部数仓<br class="desktop-break">搭建 MCP 查询服务</h3>
        <div>
          <p>“上周德国站的销售额比前一周少了多少？”回答这句话，先得弄清楚销售额按下单还是付款时间算、是否扣除退款、用什么币种。我会和业务同事找出日常对数用的那张报表，把指标口径和对应的数仓字段定下来。</p>
          <p>然后把这项查询做成 Agent 能调用的只读 MCP 工具，按提问人的店铺权限取数。回答里列出两周的金额、差额和数据来源。第一版就拿这道题验收，看两个周期的数能否分别和原报表对上。</p>
          <RouterLink class="case-link" to="/posts/2026-08-18-企业数据查询mcp">
            读我的企业数据查询 MCP 设计笔记 <span aria-hidden="true">→</span>
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="contact" aria-labelledby="contact">
      <div>
        <h2 id="contact" tabindex="-1">
          从一件具体的事聊起。
        </h2>
        <p>加微信时可以提一句「博客合作」。挑一个你手头的例子就好，一份商品资料、一段脱敏纪要，或者一个每周都得找人查数的问题。</p>
        <p>我们先聊今天是谁在做、哪一步最费时间，再一起定第一版交什么、谁来验收，以及工期和费用。</p>
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
