<script setup lang="ts">
const wechatId = 'Li-Yuan_Cheng'
const copyFeedback = ref('')

useHead({
  title: '项目合作 · Neilyo',
  meta: [{
    name: 'description',
    content: 'FDE 项目合作：企业内部工具、AI 应用与智能体、流程自动化、系统集成和数据工具开发。',
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
      <div class="intro-copy">
        <p class="eyebrow">
          <span aria-hidden="true" /> FDE · 前置型工程师
        </p>
        <h1 id="services-title">
          工作里遇到难题，<br><em>可以找我一起想想办法。</em>
        </h1>
        <p class="intro-text">
          我帮助企业开发贴合实际工作的工具、AI 应用和自动化流程。先弄清楚团队怎样工作，再梳理需求、开发系统、连接现有工具，并和实际使用的人一起把流程跑通。
        </p>
        <p class="intro-note">
          你不必先想好技术方案。把现在怎么做、哪里费时、希望改善什么说清楚就可以。
        </p>
        <a class="contact-link" href="#contact">
          描述项目需求 <span class="i-ri-arrow-right-down-line" aria-hidden="true" />
        </a>
      </div>

      <figure class="specimen">
        <figcaption>
          <span>需求情境</span>
          <span>跨境电商 · Listing 生成</span>
        </figcaption>
        <div class="paper">
          <p class="paper-label">
            团队希望解决的问题
          </p>
          <blockquote>
            不同 SKU 的资料分散在表格里，运营需要反复整理参数、撰写文案，再逐条检查站点规则。
          </blockquote>
          <div class="paper-divider">
            <p class="paper-label">
              希望得到的工具
            </p>
            <div class="tool-tags">
              <span>SKU 资料导入</span>
              <span>AI 文案生成</span>
              <span>规则校验</span>
              <span>人工审核</span>
            </div>
          </div>
        </div>
        <p class="specimen-note">
          从重复的日常工作出发，做一套团队能持续使用的工具。
        </p>
      </figure>
    </header>

    <section class="service-section" aria-labelledby="service-title">
      <div class="section-heading">
        <p class="eyebrow">
          PROJECT TYPES
        </p>
        <h2 id="service-title">
          可以委托我做什么
        </h2>
        <p>
          不局限于某一种技术或产品，重点是解决实际业务中的问题。
        </p>
      </div>

      <div class="service-grid">
        <article class="service-card">
          <div class="card-meta">
            <span>01</span>
            <span>BUSINESS TOOLS</span>
          </div>
          <h3>企业内部工具与业务系统</h3>
          <p>
            把依赖 Excel、聊天记录和人工交接的工作，整理成符合团队流程的内部工具。
          </p>
          <p class="service-examples">
            <strong>需求示例</strong>
            运营工作台、商品资料管理、任务协作系统、内部管理平台。
          </p>
        </article>

        <article class="service-card">
          <div class="card-meta">
            <span>02</span>
            <span>AI APPLICATIONS</span>
          </div>
          <h3>AI 应用与智能体</h3>
          <p>
            让 AI 结合企业资料、业务数据和现有工具，承担有明确边界的查询、整理、生成和跟进工作。
          </p>
          <p class="service-examples">
            <strong>需求示例</strong>
            企业知识助手、会议任务跟进、运营助手、Listing 内容生成。
          </p>
        </article>

        <article class="service-card">
          <div class="card-meta">
            <span>03</span>
            <span>WORKFLOW & INTEGRATION</span>
          </div>
          <h3>流程自动化与系统集成</h3>
          <p>
            连接飞书、ERP、表格和企业内部系统，减少重复录入、信息搬运、通知催办和人工核对。
          </p>
          <p class="service-examples">
            <strong>需求示例</strong>
            数据同步、审批流转、自动通知、跨系统任务回写。
          </p>
        </article>

        <article class="service-card">
          <div class="card-meta">
            <span>04</span>
            <span>DATA & INSIGHTS</span>
          </div>
          <h3>数据查询与分析工具</h3>
          <p>
            把分散的数据整理成可追溯、可查询的业务信息，让团队及时掌握经营情况。
          </p>
          <p class="service-examples">
            <strong>需求示例</strong>
            业务数据查询、自动报表、指标看板、自然语言数据助手。
          </p>
        </article>
      </div>
    </section>

    <section class="listing-section" aria-labelledby="listing-title">
      <div class="listing-intro">
        <p class="eyebrow">
          SCENARIO EXAMPLE / LISTING
        </p>
        <h2 id="listing-title">
          例如：开发一套 Listing 文案生成工具
        </h2>
        <p>
          跨境电商团队需要为大量 SKU 编写商品文案。运营要从产品资料中提取参数和卖点，再根据销售站点、语言和品牌要求撰写标题、五点描述与产品描述。工作重复，内容质量也容易因人而异。
        </p>
        <p>
          这类需求适合做成一套内部工作台，而不是只生成几段文案。
        </p>
      </div>

      <div class="listing-workflow" aria-label="Listing 文案生成流程">
        <div class="workflow-step">
          <span class="step-number">01</span>
          <h3>整理商品资料</h3>
          <p>导入 SKU、产品参数、核心卖点、关键词和品牌规范。</p>
        </div>
        <div class="workflow-step">
          <span class="step-number">02</span>
          <h3>生成 Listing</h3>
          <p>按站点、语言和品牌风格生成标题、五点描述、产品描述及搜索词。</p>
        </div>
        <div class="workflow-step">
          <span class="step-number">03</span>
          <h3>检查内容质量</h3>
          <p>检查字符限制、参数一致性、关键词覆盖和不合规表达。</p>
        </div>
        <div class="workflow-step">
          <span class="step-number">04</span>
          <h3>审核与交付</h3>
          <p>运营在线修改、确认，再批量导出或对接现有系统。</p>
        </div>
      </div>

      <div class="listing-preview">
        <div class="product-brief">
          <p class="paper-label">
            输入资料示例
          </p>
          <dl>
            <div>
              <dt>产品</dt>
              <dd>竹制桌面收纳架</dd>
            </div>
            <div>
              <dt>材质</dt>
              <dd>竹木</dd>
            </div>
            <div>
              <dt>结构</dt>
              <dd>三个独立分区</dd>
            </div>
            <div>
              <dt>尺寸</dt>
              <dd>30 × 12 × 10 cm</dd>
            </div>
            <div>
              <dt>目标站点</dt>
              <dd>Amazon US</dd>
            </div>
          </dl>
        </div>

        <div class="generated-copy">
          <div class="generated-topline">
            <p class="paper-label">
              生成文案示例
            </p>
            <span>AMAZON US</span>
          </div>
          <p class="output-label">
            PRODUCT TITLE
          </p>
          <p class="output-text">
            Bamboo Desk Organizer with 3 Compartments, Compact Desktop Storage for Pens and Office Supplies
          </p>
          <p class="output-label">
            BULLET POINT
          </p>
          <p class="output-text">
            Three Compartments for Easy Sorting — Keep pens, markers, sticky notes and other everyday essentials neatly arranged and within reach.
          </p>
          <p class="output-note">
            以上为文案片段示意。正式内容会根据实际商品资料、关键词和平台要求生成，并保留运营审核环节。
          </p>
        </div>
      </div>
    </section>

    <section class="contact" aria-labelledby="contact-title">
      <div class="contact-copy">
        <p class="eyebrow">
          LET'S TALK
        </p>
        <h2 id="contact-title">
          有想解决的业务问题？
        </h2>
        <p>
          可以把当前流程、遇到的困难，以及希望改善的结果告诉我。需求还不完整也没关系，我们可以先把问题说清楚，再判断适合的实现方式。
        </p>
      </div>
      <div class="wechat">
        <p class="paper-label">
          <span class="i-ri-wechat-line" aria-hidden="true" /> 微信联系
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
  --soft: #8793a3;
  --line: #cdd7e1;
  --accent: #185f9f;
  --wash: #eef4f8;
  --paper: #fff;
  max-width: 1010px;
  margin: 0 auto;
  color: var(--ink);
}

:global(html.dark) .services {
  --ink: #f4f6fa;
  --muted: #c8d3df;
  --soft: #9aa9ba;
  --line: #59697d;
  --accent: #a8d3ff;
  --wash: #2b3849;
  --paper: #354456;
}

.services p {
  margin: 0;
}

.intro {
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(0, .92fr);
  align-items: center;
  gap: clamp(32px, 6vw, 76px);
  padding: clamp(22px, 4vw, 46px) 0 clamp(48px, 7vw, 76px);
}

.eyebrow,
.paper-label,
.generated-topline > span {
  display: flex;
  align-items: center;
  gap: .65rem;
  color: var(--accent);
  font-size: .76rem;
  font-weight: 700;
  letter-spacing: .08em;
}

.eyebrow > span {
  width: 2rem;
  border-top: 2px solid;
}

h1,
h2,
h3 {
  font-weight: 700;
}

h1 {
  margin: 20px 0;
  font-size: clamp(2.55rem, 5vw, 4.35rem);
  line-height: 1.17;
  letter-spacing: -.045em;
}

h1 em {
  color: var(--accent);
  font-style: normal;
}

.intro-text,
.intro-note,
.section-heading > p:last-child,
.service-card > p,
.listing-intro > p,
.workflow-step > p,
.contact-copy > p:last-child {
  color: var(--muted);
  line-height: 1.85;
}

.intro-text {
  max-width: 34em;
  font-size: 1.06rem;
}

.intro-note {
  margin-top: 12px !important;
  font-size: .92rem;
}

.contact-link,
.case-link {
  display: inline-flex;
  align-items: center;
  gap: .55rem;
  font-weight: 700;
}

.contact-link {
  margin-top: 24px;
  padding: .75rem 1.15rem;
  border-radius: 5px;
  background: var(--ink);
  color: var(--paper);
  text-decoration: none;
  transition: background 160ms ease, transform 160ms ease;
}

.contact-link:hover {
  background: var(--accent);
  transform: translateY(-2px);
}

.specimen {
  margin: 0;
  padding: clamp(18px, 2.5vw, 30px);
  border: 1px solid var(--line);
  border-radius: 3px 18px 3px 3px;
  background:
    radial-gradient(var(--line) .8px, transparent .8px) 0 0 / 10px 10px,
    var(--wash);
}

.specimen figcaption {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
  color: var(--ink);
  font-size: .82rem;
  font-weight: 700;
}

.specimen figcaption span:last-child {
  color: var(--muted);
  font-weight: 500;
}

.paper {
  padding: clamp(18px, 2.4vw, 28px);
  border: 1px solid var(--line);
  border-top: 3px solid var(--accent);
  background: var(--paper);
  box-shadow: 3px 4px 0 var(--wash), 4px 5px 0 var(--line);
  transform: rotate(-.7deg);
}

blockquote {
  margin: .7rem 0 1.2rem;
  color: var(--ink);
  font-size: 1.12rem;
  line-height: 1.65;
}

.paper-divider {
  padding-top: 1rem;
  border-top: 1px dashed var(--line);
}

.tool-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
}

.tool-tags span {
  padding: 6px 10px;
  border: 1px solid var(--line);
  border-radius: 4px;
  color: var(--muted);
  font-size: .78rem;
}

.specimen-note {
  margin-top: 18px !important;
  color: var(--muted);
  font-size: .82rem;
  line-height: 1.7;
}

.service-section,
.listing-section,
.contact {
  border-top: 1px solid var(--line);
}

.service-section,
.listing-section {
  padding: clamp(42px, 6vw, 68px) 0;
}

.section-heading {
  max-width: 650px;
  margin-bottom: 28px;
}

.section-heading h2,
.listing-intro h2,
.contact h2 {
  margin: 12px 0;
  font-size: clamp(1.8rem, 3.3vw, 2.55rem);
  line-height: 1.3;
  letter-spacing: -.035em;
}

.section-heading > p:last-child {
  font-size: .98rem;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.service-card {
  min-width: 0;
  padding: clamp(20px, 2.5vw, 28px);
  border: 1px solid var(--line);
  border-radius: 10px;
  background: var(--paper);
}

.card-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  color: var(--soft);
  font-size: .68rem;
  font-weight: 700;
  letter-spacing: .12em;
}

.card-meta span:first-child {
  color: var(--accent);
  font-size: .82rem;
}

.service-card h3 {
  margin: 18px 0 10px;
  font-size: 1.2rem;
  line-height: 1.45;
}

.service-card > p {
  font-size: .92rem;
}

.service-card .service-examples {
  margin-top: 16px;
  padding-top: 14px;
  border-top: 1px solid var(--line);
  font-size: .84rem;
}

.service-examples strong {
  display: block;
  margin-bottom: 5px;
  color: var(--accent);
  font-size: .76rem;
}

.listing-intro {
  max-width: 790px;
  margin-bottom: 30px;
}

.listing-intro h2 {
  max-width: 700px;
}

.listing-intro > p {
  font-size: .98rem;
}

.listing-intro > p + p {
  margin-top: 10px;
  color: var(--ink);
  font-weight: 600;
}

.listing-workflow {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
  margin-bottom: 28px;
}

.workflow-step {
  padding-top: 14px;
  border-top: 2px solid var(--line);
}

.step-number {
  color: var(--accent);
  font-size: .76rem;
  font-weight: 700;
  letter-spacing: .1em;
}

.workflow-step h3 {
  margin: 10px 0 7px;
  font-size: 1rem;
}

.workflow-step > p {
  font-size: .84rem;
}

.listing-preview {
  display: grid;
  grid-template-columns: minmax(190px, .72fr) minmax(0, 1.28fr);
  gap: 18px;
  padding: clamp(16px, 2.5vw, 24px);
  border-radius: 12px;
  background: var(--wash);
}

.product-brief,
.generated-copy {
  min-width: 0;
  padding: clamp(18px, 2.5vw, 26px);
  border: 1px solid var(--line);
  border-radius: 7px;
  background: var(--paper);
}

.product-brief dl {
  margin: 16px 0 0;
}

.product-brief dl > div {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px solid var(--line);
  font-size: .84rem;
}

.product-brief dt {
  color: var(--muted);
}

.product-brief dd {
  margin: 0;
  color: var(--ink);
  font-weight: 600;
  text-align: right;
}

.generated-topline {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 18px;
}

.generated-topline > span {
  font-size: .66rem;
}

.output-label {
  margin: 14px 0 6px !important;
  color: var(--soft);
  font-size: .66rem;
  font-weight: 700;
  letter-spacing: .12em;
}

.output-text {
  color: var(--ink);
  font-size: .88rem;
  line-height: 1.7;
}

.output-note {
  margin-top: 16px !important;
  padding-top: 12px;
  border-top: 1px solid var(--line);
  color: var(--muted);
  font-size: .76rem;
  line-height: 1.7;
}

.contact {
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(230px, .7fr);
  align-items: center;
  gap: clamp(24px, 5vw, 60px);
  padding: clamp(24px, 4vw, 44px);
  background: var(--wash);
}

.contact-copy {
  max-width: 600px;
}

.contact-copy > p:last-child {
  font-size: .98rem;
}

.wechat {
  padding-left: clamp(20px, 3vw, 36px);
  border-left: 1px solid var(--line);
}

.wechat-id {
  display: block;
  margin-top: .65rem;
  color: var(--ink);
  font-size: clamp(1.45rem, 2.6vw, 2rem);
  user-select: all;
}

.case-link {
  margin-top: .7rem;
  padding: .35rem 0;
  border: 0;
  background: transparent;
  color: var(--accent);
  font-size: .9rem;
  text-decoration: underline;
  text-underline-offset: .3em;
  text-decoration-color: var(--line);
  cursor: pointer;
}

.case-link:hover {
  text-decoration-color: currentColor;
}

.copy-feedback {
  min-height: 1.5em;
  color: var(--muted);
  font-size: .8rem;
}

.services :is(a, button):focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 4px;
}

@media (max-width: 760px) {
  .intro,
  .service-grid,
  .listing-preview,
  .contact {
    grid-template-columns: 1fr;
  }

  .intro {
    gap: 30px;
  }

  .specimen {
    max-width: 520px;
    width: 100%;
  }

  .listing-workflow {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    row-gap: 24px;
  }

  .wechat {
    padding: 20px 0 0;
    border-top: 1px solid var(--line);
    border-left: 0;
  }
}

@media (max-width: 480px) {
  .listing-workflow {
    grid-template-columns: 1fr;
  }

  .service-card {
    padding: 20px;
  }

  .listing-preview {
    padding: 12px;
  }

  .generated-topline {
    align-items: flex-start;
  }
}
</style>
