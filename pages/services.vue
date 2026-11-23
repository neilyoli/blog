<script setup lang="ts">
const wechatId = 'Li-Yuan_Cheng'
const copyFeedback = ref('')

useHead({
  title: '项目合作 · Neilyo',
  meta: [{
    name: 'description',
    content: '从一条退货备注到一次商品页修改。Neilyo 记录如何与跨境电商团队一起，把企业数仓、飞书和 Listing 工作接入 AI 系统。',
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
          一条退货备注，<br><em>怎样回到商品页？</em>
        </h1>
        <p class="intro-text">
          我是 Neilyo，在跨境电商做全栈开发。售后听过买家的原话，产品同事手里有尺寸，能改商品页的人在运营。设计 AI 系统时，我喜欢跟着一件事走一遍，看看一个人已经知道的事，怎样才能在下一个人手里派上用场。
        </p>
        <a class="contact-link" href="#contact">
          聊聊你们的工作 <span class="i-ri-arrow-right-down-line" aria-hidden="true" />
        </a>
      </div>

      <figure class="specimen">
        <figcaption>德国站 · 收纳架 <span>情境示例</span></figcaption>
        <div class="paper">
          <p class="paper-label">
            买家的退货备注
          </p>
          <blockquote>“页面上写着宽 42 厘米，我的箱子才 40 厘米，怎么还是放不进去？”</blockquote>
          <div class="task">
            <p class="paper-label">
              同一款商品的规格表
            </p>
            <dl>
              <div><dt>架体外宽</dt><dd>42 厘米</dd></div>
              <div><dt>层内净宽</dt><dd>38 厘米</dd></div>
            </dl>
          </div>
        </div>
      </figure>
    </header>

    <section class="story" aria-labelledby="story-title">
      <div class="story-copy">
        <h2 id="story-title">
          把这件事跟到下次周会
        </h2>
        <p>这可能只是一个买家的误会。要知道值不值得改页面，我会请售后同事带我查一次，看德国站最近的退货里，还有几条提到“放不下”。等数字和他们平时看的报表对上，再把这项数仓查询做成只读 MCP 工具。下次运营自己问，就能在原有的店铺权限内找到记录，逐条看买家的原话。</p>
        <p>记录带到周会上，讨论就具体了。假设团队决定“产品核对净宽，运营补到德国站详情页”，Meeting Agent 可以从纪要里提取这两个待办，请当事人确认，进展记在飞书多维表格里。运营接手时，手里有产品同事核实过的尺寸，也有买家当初那句“放不下”。</p>
        <p>我做 MagicListing 时，最在意的就是草稿里的每个参数都能找到依据。拿到核实过的规格，Agent 起草德国站 Listing 时，就能把原来含糊的“宽 42 厘米”写清楚——架体外宽 42 厘米，两侧支架之间净宽 38 厘米。运营审过再发布。等改版后售出的商品有了售后记录，团队还可以用同样的口径看，有没有人因为同样的误解退货。</p>
      </div>
      <aside class="notes" aria-label="相关项目与笔记">
        <h3>相关项目与笔记</h3>
        <RouterLink class="case-link" to="/posts/2026-08-18-企业数据查询mcp">
          企业数仓的 MCP 查询设计 <span aria-hidden="true">→</span>
        </RouterLink>
        <RouterLink class="case-link" to="/posts/2026-08-13-会议助手智能体">
          会议助手怎样接入飞书 <span aria-hidden="true">→</span>
        </RouterLink>
        <RouterLink class="case-link" to="/projects">
          MagicListing 与 AgentKit <span aria-hidden="true">→</span>
        </RouterLink>
      </aside>
    </section>

    <section class="approach" aria-labelledby="approach-title">
      <h2 id="approach-title">
        让运营用它值一次班
      </h2>
      <div>
        <p>第一版能跑起来，我会请当天值班的运营挑一单自己来做，我坐在旁边看。如果为了找到产品同事确认过的尺寸，还得退出系统翻聊天记录，那这一步就得接着改。等我不在场，换班的人也能把事情办完，这一版才算交到了团队手里。</p>
        <p>这也是我做 AgentKit 的缘由。换一个站点，写作习惯会变，查商品资料、沿用员工权限、找回上次确认的结果，这些本领却可以留给下一个流程。我在探索怎样让 Agent 共用这些能力，也让熟悉业务的人能自己调整规则、接手维护。</p>
      </div>
    </section>

    <section class="contact" aria-labelledby="contact">
      <div>
        <h2 id="contact" tabindex="-1">
          你们是怎么做的？
        </h2>
        <p>如果读到这里，你想起了团队里那个要翻几张表、问几个人才能回答的问题，欢迎来聊聊。我很想听听，上一次遇到它时，你是怎么把事情做完的。</p>
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
.intro-text, .story-copy p, .approach p, .contact p:not(.paper-label) {
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
.task dl { display: flex; flex-wrap: wrap; gap: .5rem 2rem; margin-top: .65rem; }
.task dt { color: var(--muted); font-size: .78rem; }
.task dd { margin: .15rem 0 0; font-size: 1.1rem; font-weight: 700; }
.story, .approach, .contact { border-top: 1px solid var(--line); }
.story, .approach {
  display: grid;
  align-items: start;
  gap: clamp(24px, 5vw, 60px);
  padding: clamp(28px, 4vw, 48px) 0;
}
.story { grid-template-columns: minmax(0, 2.6fr) minmax(0, 1fr); }
h2 { font-size: clamp(1.7rem, 3vw, 2.4rem); line-height: 1.3; }
.story h2 { margin-bottom: 18px; }
.story-copy p + p, .approach p + p { margin-top: 1rem; }
.notes { border-left: 1px solid var(--line); padding-left: 20px; }
.notes h3 { color: var(--muted); font-size: .95rem; }
.notes .case-link { display: flex; width: fit-content; font-size: .95rem; }
.approach { grid-template-columns: minmax(0, 1fr) minmax(0, 2fr); }
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
  .intro, .story, .approach, .contact { grid-template-columns: 1fr; }
  .specimen { max-width: 450px; width: 100%; }
  .approach { gap: 1rem; }
  .wechat { border-left: 0; border-top: 1px solid var(--line); padding: 20px 0 0; }
}
</style>
