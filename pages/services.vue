<script setup lang="ts">
const wechatId = 'Li-Yuan_Cheng'
const copyFeedback = ref('')

useHead({
  title: '项目合作 · Neilyo',
  meta: [{
    name: 'description',
    content: 'AI 应用、软件开发与企业数字化项目合作。关注跨境电商等业务场景，提供企业工具、智能体、流程自动化和数据应用开发。',
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
          <span aria-hidden="true" /> AI 应用 · 软件开发 · 企业数字化
        </p>
        <h1 id="services-title">
          AI+数字化，<br><em>改变未来</em>
        </h1>
        <p class="intro-text">
          我一直在关注 AI 和软件技术怎样融入日常工作。面对具体需求，我会先和使用者聊聊现有流程、遇到的麻烦，再一起梳理解决思路，最后通过软件开发、AI 应用或系统集成，把想法变成团队真正用得上的工具。平时关注跨境电商，也愿意和不同领域的团队交流。
        </p>
        <p class="intro-note">
          如果你有一件反复处理的工作，或一个想做却还没理清的工具，可以先和我聊聊。不用提前准备技术方案。
        </p>
        <a class="contact-link" href="#contact">
          聊聊你的想法 <span class="i-ri-arrow-right-down-line" aria-hidden="true" />
        </a>
      </div>

      <figure class="specimen">
        <figcaption>
          <span>一个日常工作场景</span>
          <span>跨境电商 · Listing 创作</span>
        </figcaption>
        <div class="paper">
          <p class="paper-label">
            运营每天要处理的事
          </p>
          <blockquote>
            SKU 多、资料散。每次写 Listing，都要重新找参数、整理卖点，还得检查不同站点的规则。
          </blockquote>
          <div class="paper-divider">
            <p class="paper-label">
              可以做成什么
            </p>
            <div class="tool-tags">
              <span>商品资料整理</span>
              <span>AI 文案生成</span>
              <span>平台规则检查</span>
              <span>人工审核</span>
            </div>
          </div>
        </div>
        <p class="specimen-note">
          让重复工作少一点，把时间留给更需要经验和判断的事情。
        </p>
      </figure>
    </header>

    <section class="service-section" aria-labelledby="service-title">
      <div class="section-heading">
        <p class="eyebrow">
          HOW I CAN HELP
        </p>
        <h2 id="service-title">
          我可以帮你做些什么
        </h2>
        <p>
          下面是一些常见的合作方向，不局限于某一种行业或技术。只要有具体的问题，我们就可以一起看看怎样解决。
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
            如果团队还在依靠多个 Excel、聊天记录和人工交接推进工作，可以把这些环节梳理清楚，做成一套更顺手的内部工具。
          </p>
          <p class="service-examples">
            <strong>常见需求</strong>
            运营工作台、商品资料管理、任务协作工具、内部管理系统。
          </p>
        </article>

        <article class="service-card">
          <div class="card-meta">
            <span>02</span>
            <span>AI APPLICATIONS</span>
          </div>
          <h3>AI 应用与智能体</h3>
          <p>
            让 AI 结合企业自己的资料、数据和系统，帮团队查询信息、整理内容、生成文案、跟进任务，而不只是停留在问答。
          </p>
          <p class="service-examples">
            <strong>常见需求</strong>
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
            把飞书、ERP、表格和企业内部系统连接起来，让信息和任务自动流转，少一些重复录入、复制粘贴和人工催办。
          </p>
          <p class="service-examples">
            <strong>常见需求</strong>
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
            把分散的数据整理成清晰、可追溯的查询和看板，帮助团队更快找到需要的信息，少花时间反复对表和整理报表。
          </p>
          <p class="service-examples">
            <strong>常见需求</strong>
            业务数据查询、自动报表、指标看板、自然语言数据助手。
          </p>
        </article>
      </div>
    </section>

    <section class="listing-section" aria-labelledby="listing-title">
      <div class="listing-intro">
        <p class="eyebrow">
          A CLOSER LOOK · LISTING
        </p>
        <h2 id="listing-title">
          比如，做一套 Listing 文案生成工具
        </h2>
        <p>
          运营每天要面对大量 SKU，商品资料可能散落在不同表格和系统里。写一条 Listing，往往要查参数、提炼卖点、整理关键词，再根据不同站点的语言和规则调整标题、五点描述和产品介绍。工作量不小，内容也容易因人而异。
        </p>
        <p>
          可以把这些步骤放进一个工作台，让资料整理、文案生成、质量检查和人工审核连成一套顺手的流程。
        </p>
      </div>

      <div class="listing-workflow" aria-label="Listing 文案生成流程">
        <div class="workflow-step">
          <span class="step-number">01</span>
          <h3>准备商品资料</h3>
          <p>导入 SKU、产品参数、核心卖点、关键词和品牌要求。</p>
        </div>
        <div class="workflow-step">
          <span class="step-number">02</span>
          <h3>按站点生成文案</h3>
          <p>选择目标站点和语言，生成标题、五点描述、产品描述及搜索词。</p>
        </div>
        <div class="workflow-step">
          <span class="step-number">03</span>
          <h3>检查内容质量</h3>
          <p>核对字符限制、参数一致性、关键词覆盖和不合规表达。</p>
        </div>
        <div class="workflow-step">
          <span class="step-number">04</span>
          <h3>审核与导出</h3>
          <p>运营可以直接修改和确认，再批量导出或同步到现有系统。</p>
        </div>
      </div>

      <div class="listing-preview">
        <div class="product-brief">
          <p class="paper-label">
            商品资料示例
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
              Listing 文案片段
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
            这里只展示文案片段。实际生成时，会结合商品资料、关键词、品牌风格和平台要求，并由运营审核确认。
          </p>
        </div>
      </div>
    </section>

    <section class="values-section" aria-labelledby="values-title">
      <div class="values-heading">
        <p class="eyebrow">
          WHAT MATTERS TO ME
        </p>
        <h2 id="values-title">
          我们的价值观
        </h2>
        <p>
          做项目不只是把功能开发出来。我更在意问题有没有解决、交付是否可靠，以及每一次合作能不能带来真正的价值。
        </p>
      </div>

      <div class="values-grid">
        <article class="value-item">
          <span class="value-number">01 / CUSTOMER FIRST</span>
          <h3>客户第一，技术第二</h3>
          <p>
            先把客户真正想解决的问题弄清楚，再决定用什么技术。技术不是目的，能不能帮客户节省时间、减少差错、改善业务，才是衡量方案的标准。持续创造价值，合作才能走得长远。
          </p>
        </article>

        <article class="value-item">
          <span class="value-number">02 / QUALITY</span>
          <h3>注重过程，注重结果，追求品质</h3>
          <p>
            从需求沟通、方案设计到开发交付，每个环节都认真对待。既关注最终结果，也在意过程是否清晰、产品是否好用、后续是否方便维护。希望交付的不只是能运行的功能，而是经得起日常使用的产品。
          </p>
        </article>

        <article class="value-item">
          <span class="value-number">03 / KEEP EVOLVING</span>
          <h3>拥抱变化，创新发展</h3>
          <p>
            行业在变，技术在变，客户的需求也在变。保持敬畏和谦逊，愿意学习，也给尝试留出耐心和调整的空间。发现更好的方法，就及时改变，在实践中不断改进。
          </p>
        </article>
      </div>
    </section>

    <section class="contact" aria-labelledby="contact-title">
      <div class="contact-copy">
        <p class="eyebrow">
          LET'S TALK
        </p>
        <h2 id="contact-title">
          有想法，欢迎来聊聊
        </h2>
        <p>
          如果你正准备开发一套内部工具，想把 AI 接进现有流程，或只是发现某项工作总在重复处理，都可以先和我聊聊。把现在的做法、遇到的困难和期待的结果告诉我，我们可以一起看看从哪里开始更合适。
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
  letter-spacing: .04em;
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
.contact-copy > p:last-child,
.values-heading > p:last-child,
.value-item > p {
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
.values-section,
.contact {
  border-top: 1px solid var(--line);
}

.service-section,
.listing-section,
.values-section {
  padding: clamp(42px, 6vw, 68px) 0;
}

.section-heading,
.values-heading {
  max-width: 680px;
  margin-bottom: 28px;
}

.section-heading h2,
.listing-intro h2,
.values-heading h2,
.contact h2 {
  margin: 12px 0;
  font-size: clamp(1.8rem, 3.3vw, 2.55rem);
  line-height: 1.3;
  letter-spacing: -.035em;
}

.section-heading > p:last-child,
.values-heading > p:last-child {
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

.values-heading {
  margin-bottom: 30px;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.value-item {
  min-width: 0;
  padding: 22px 24px 26px 0;
}

.value-item + .value-item {
  padding-left: 24px;
  border-left: 1px solid var(--line);
}

.value-number {
  color: var(--accent);
  font-size: .68rem;
  font-weight: 700;
  letter-spacing: .1em;
}

.value-item h3 {
  margin: 16px 0 10px;
  font-size: 1.08rem;
  line-height: 1.5;
}

.value-item > p {
  font-size: .88rem;
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
  .values-grid,
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

  .value-item {
    padding: 22px 0;
  }

  .value-item + .value-item {
    padding-left: 0;
    border-top: 1px solid var(--line);
    border-left: 0;
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
