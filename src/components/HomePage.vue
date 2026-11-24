<script setup lang="ts">
import HomeProjects from './HomeProjects.vue'

interface SocialLink {
  icon: string
  name: string
  link: string
}

defineProps<{
  socials: SocialLink[]
}>()

const interests = [
  {
    number: '01',
    title: '骑行',
    description: '天气合适的时候，出去骑一段，看看沿途的风景。',
    icon: 'i-carbon-map',
  },
  {
    number: '02',
    title: '羽毛球',
    description: '偶尔约场球，活动一下，也给自己换换状态。',
    icon: 'i-carbon-activity',
  },
  {
    number: '03',
    title: '音乐',
    description: '喜欢听音乐，工作和生活里都少不了它。',
    icon: 'i-carbon-music',
  },
]

const currentTopics = [
  'Agent Runtime',
  'MCP & Tools',
  'AI Coding',
  'Java Ecosystem',
]
</script>

<template>
  <main class="not-prose home-page">
    <section class="home-hero" aria-labelledby="home-title">
      <div class="home-hero-copy">
        <div class="home-eyebrow">
          <span class="home-eyebrow-dot" />
          <span>AI FDE</span>
          <span class="home-eyebrow-divider">/</span>
          <span>FULL-STACK ENGINEER</span>
        </div>

        <h1 id="home-title" class="home-title">
          Hi, I'm<br>
          <span>Neilyo</span><i>.</i>
        </h1>

        <p class="home-intro">
          平时写 Java，也做前端和 AI 应用。最近主要在研究 Agent 工程，也在持续做一些和 AI 有关的产品。
        </p>
        <p class="home-intro home-intro-secondary">
          这里记录我正在做的项目、技术实践，以及生活里一些有意思的片段。
        </p>

        <div class="home-tech-line" aria-label="Technology interests">
          <span>JAVA</span>
          <b />
          <span>REACT · VUE</span>
          <b />
          <span>AI AGENT</span>
          <b />
          <span>MCP</span>
        </div>

        <div class="home-actions">
          <a href="#projects" class="home-action-primary">
            Explore Projects
            <span class="i-ri-arrow-down-line" />
          </a>
          <a
            href="https://github.com/neilyoli"
            target="_blank"
            rel="noopener noreferrer"
            class="home-action-secondary"
          >
            GitHub
            <span class="i-ri-arrow-right-up-line" />
          </a>
        </div>
      </div>

      <div class="home-hero-visual" aria-label="Neilyo profile">
        <div class="home-hero-orbit home-hero-orbit-outer" />
        <div class="home-hero-orbit home-hero-orbit-inner" />
        <div class="home-hero-backdrop" />
        <span class="home-hero-index">PERSONAL SPACE <span>—</span> 2026</span>
        <span class="home-hero-watermark">N.</span>
        <img
          src="/avatar.webp"
          alt="Neilyo"
          class="home-avatar"
        >
        <div class="home-now-note">
          <span class="home-now-kicker"><i /> CURRENTLY BUILDING</span>
          <strong>AgentKit</strong>
          <span>Agent Engineering</span>
        </div>
        <span class="home-hero-caption">BUILD / LEARN / REPEAT</span>
      </div>
    </section>

    <section id="about" class="home-about home-section" aria-labelledby="about-title">
      <div class="home-section-rail">
        <span class="home-section-number">01</span>
        <span class="home-section-kicker">A LITTLE ABOUT ME</span>
        <h2 id="about-title">About<br>Me<span>.</span></h2>
      </div>

      <div class="home-about-copy">
        <p>我叫 Neilyo，是一名软件工程师。</p>
        <p>Java 是日常开发中的主要技术栈，前端也会自己动手。从后端服务到 Web 应用，从业务系统到 AI 产品，平时接触的东西还挺杂。</p>
        <p>最近投入比较多的是 AI 应用和 Agent 工程。大模型、Agent Runtime、MCP、工具调用，以及 AI Coding，都是我正在持续研究的方向。</p>

        <blockquote class="home-belief">
          <span class="home-belief-mark">“</span>
          <p>AI 写代码越来越快，但好的规范会让项目走得更远。</p>
        </blockquote>

        <p>这也是我最近在自己的项目中反复实践的一件事。架构设计、代码规范、能力复用和文档沉淀，看起来不像直接交付功能，却会影响一个项目能不能持续迭代。我希望在利用 AI 提高开发效率的同时，也把这些基础工作做好。</p>
        <p>工作之外，喜欢骑行、打羽毛球和听音乐。生活里还有不少值得花时间的事情。</p>
        <p>这里是我的个人空间，项目、想法和生活记录都会慢慢放进来。</p>
      </div>

      <aside class="home-about-aside">
        <div class="home-aside-heading">
          <span class="home-section-kicker">CURRENTLY INTO</span>
          <span class="i-carbon-compass home-aside-icon" />
        </div>
        <h3>最近关注</h3>
        <div class="home-topic-list">
          <span v-for="(topic, index) in currentTopics" :key="topic">
            <small>0{{ index + 1 }}</small>
            {{ topic }}
          </span>
        </div>
        <div class="home-aside-footnote">
          <span class="home-section-kicker">A SMALL REMINDER</span>
          <p>先看看项目里已经有什么，再决定要不要重新造轮子。</p>
        </div>
      </aside>
    </section>

    <HomeProjects />

    <section class="home-beyond home-section" aria-labelledby="beyond-title">
      <div class="home-section-rail">
        <span class="home-section-number">03</span>
        <span class="home-section-kicker">OFF THE SCREEN</span>
        <h2 id="beyond-title">Beyond<br>Code<span>.</span></h2>
      </div>

      <div class="home-beyond-content">
        <p class="home-beyond-lead">电脑之外，也有自己的生活。</p>
        <div class="home-interest-list">
          <article v-for="interest in interests" :key="interest.number" class="home-interest">
            <span class="home-interest-number">{{ interest.number }}</span>
            <span :class="interest.icon" class="home-interest-icon" />
            <div>
              <h3>{{ interest.title }}</h3>
              <p>{{ interest.description }}</p>
            </div>
            <span class="i-ri-arrow-right-up-line home-interest-arrow" />
          </article>
        </div>
      </div>
    </section>

    <section class="home-connect" aria-labelledby="connect-title">
      <div class="home-connect-copy">
        <span class="home-section-kicker">04 / KEEP IN TOUCH</span>
        <h2 id="connect-title">Find Me<br>Elsewhere<span>.</span></h2>
        <p>如果你也对 AI、Agent 工程、开源项目或者软件开发感兴趣，欢迎交流。</p>
        <RouterLink to="/services" class="home-action-secondary mt-4">
          项目合作
          <span class="i-ri-arrow-right-line" aria-hidden="true" />
        </RouterLink>
      </div>
      <nav class="home-socials" aria-label="Social links">
        <a
          v-for="social in socials"
          :key="social.name"
          :href="social.link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span :class="social.icon" />
          <span>{{ social.name }}</span>
          <span class="i-ri-arrow-right-up-line home-social-arrow" />
        </a>
      </nav>
    </section>
  </main>
</template>

<style scoped>
.home-page {
  --home-ink: #202a39;
  --home-muted: #697586;
  --home-soft: #98a2b3;
  --home-line: rgba(75, 91, 112, 0.18);
  --home-blue: #1772d0;
  --home-blue-soft: #edf4fc;
  width: 100%;
  max-width: 1060px;
  margin: 0 auto;
  padding: 12px 0 42px;
  color: var(--home-ink);
}

:global(html.dark) .home-page {
  --home-ink: #f0f3f8;
  --home-muted: #c0c8d4;
  --home-soft: #8d9aaa;
  --home-line: rgba(197, 205, 217, 0.2);
  --home-blue: #78b7f4;
  --home-blue-soft: rgba(39, 91, 145, 0.2);
}

.home-page p {
  margin: 0;
  font-size: 15px;
  line-height: 1.9;
  color: var(--home-muted);
}

.home-hero {
  display: grid;
  grid-template-columns: minmax(0, 1.12fr) minmax(280px, 0.88fr);
  align-items: center;
  gap: clamp(36px, 7vw, 88px);
  padding: 64px 0 76px;
  border-bottom: 1px solid var(--home-line);
}

.home-eyebrow,
.home-section-kicker {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  color: var(--home-soft);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.17em;
}

.home-eyebrow {
  color: var(--home-muted);
}

.home-eyebrow-dot,
.home-now-kicker i {
  width: 7px;
  height: 7px;
  display: inline-block;
  border-radius: 50%;
  background: #45a879;
  box-shadow: 0 0 0 4px rgba(69, 168, 121, 0.12);
}

.home-eyebrow-divider {
  color: var(--home-soft);
}

.home-title {
  margin: 22px 0 24px;
  color: var(--home-ink);
  font-size: clamp(3.6rem, 7vw, 5.6rem);
  font-weight: 750;
  line-height: 0.98;
  letter-spacing: -0.075em;
}

.home-title span {
  color: var(--home-blue);
}

.home-title i {
  color: var(--home-ink);
  font-style: normal;
}

.home-intro {
  max-width: 610px;
  font-size: 17px !important;
  line-height: 1.85 !important;
}

.home-intro-secondary {
  margin-top: 12px !important;
  font-size: 15px !important;
}

.home-tech-line {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 11px;
  margin-top: 27px;
  color: var(--home-soft);
  font-size: 10px;
  font-weight: 650;
  letter-spacing: 0.12em;
}

.home-tech-line b {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: var(--home-blue);
  opacity: 0.7;
}

.home-actions {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 32px;
}

.home-action-primary,
.home-action-secondary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none !important;
  transition: transform 180ms ease, color 180ms ease;
}

.home-action-primary {
  padding: 12px 17px;
  border-radius: 4px;
  background: var(--home-ink);
  color: #fff !important;
}

.home-action-primary:hover {
  transform: translateY(-2px);
  background: var(--home-blue);
}

.home-action-secondary {
  color: var(--home-ink) !important;
}

.home-action-secondary:hover {
  color: var(--home-blue) !important;
  transform: translateX(2px);
}

.home-hero-visual {
  position: relative;
  min-height: 350px;
  isolation: isolate;
}

.home-hero-backdrop {
  position: absolute;
  top: 50%;
  left: 50%;
  width: min(74%, 270px);
  aspect-ratio: 1;
  border-radius: 47% 53% 58% 42% / 48% 43% 57% 52%;
  background: var(--home-blue-soft);
  transform: translate(-45%, -52%) rotate(-11deg);
  z-index: -2;
}

.home-hero-orbit {
  position: absolute;
  top: 50%;
  left: 50%;
  border: 1px solid var(--home-line);
  border-radius: 50%;
  transform: translate(-45%, -52%) rotate(-20deg);
  pointer-events: none;
}

.home-hero-orbit-outer {
  width: min(92%, 340px);
  aspect-ratio: 1;
}

.home-hero-orbit-inner {
  width: min(82%, 300px);
  aspect-ratio: 1;
  border-style: dashed;
  opacity: 0.55;
}

.home-avatar {
  position: absolute;
  top: 49%;
  left: 51%;
  width: clamp(172px, 20vw, 218px);
  aspect-ratio: 1;
  border: 8px solid #fff;
  border-radius: 50%;
  object-fit: cover;
  background: #fff;
  box-shadow: 0 22px 55px rgba(31, 48, 70, 0.14);
  transform: translate(-50%, -50%) rotate(4deg);
}

.home-hero-index,
.home-hero-caption {
  position: absolute;
  color: var(--home-soft);
  font-size: 9px;
  font-weight: 650;
  letter-spacing: 0.16em;
}

.home-hero-index {
  top: 9px;
  right: 0;
}

.home-hero-index span {
  color: var(--home-blue);
}

.home-hero-watermark {
  position: absolute;
  top: 5%;
  left: 0;
  color: var(--home-line);
  font-size: 70px;
  font-weight: 800;
  letter-spacing: -0.1em;
}

.home-now-note {
  position: absolute;
  bottom: 23px;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-width: 190px;
  padding: 12px 16px;
  border-left: 2px solid var(--home-blue);
  background: var(--c-bg, #fff);
  box-shadow: 0 12px 32px rgba(31, 48, 70, 0.09);
}

.home-now-kicker {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--home-soft);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.13em;
}

.home-now-kicker i {
  width: 6px;
  height: 6px;
}

.home-now-note strong {
  color: var(--home-ink);
  font-size: 15px;
}

.home-now-note > span:last-child {
  color: var(--home-muted);
  font-size: 11px;
}

.home-hero-caption {
  right: 0;
  bottom: 17px;
  writing-mode: vertical-rl;
}

.home-section {
  display: grid;
  grid-template-columns: 150px minmax(0, 1fr) 220px;
  gap: clamp(22px, 3.6vw, 48px);
  padding: 76px 0;
  border-bottom: 1px solid var(--home-line);
}

.home-section-rail {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.home-section-number {
  color: var(--home-blue);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.home-section-rail .home-section-kicker {
  margin-top: 10px;
  white-space: nowrap;
}

.home-section-rail h2,
.home-connect h2 {
  margin: 20px 0 0;
  color: var(--home-ink);
  font-size: clamp(2rem, 3.4vw, 2.8rem);
  font-weight: 700;
  line-height: 1.06;
  letter-spacing: -0.06em;
}

.home-section-rail h2 span,
.home-connect h2 span {
  color: var(--home-blue);
}

.home-about-copy {
  min-width: 0;
  padding-top: 2px;
}

.home-about-copy > p + p {
  margin-top: 15px;
}

.home-belief {
  position: relative;
  margin: 24px 0;
  padding: 8px 0 8px 20px;
  border-left: 2px solid var(--home-blue);
}

.home-belief-mark {
  position: absolute;
  top: -18px;
  left: 16px;
  color: var(--home-blue);
  font-family: Georgia, serif;
  font-size: 46px;
  line-height: 1;
  opacity: 0.28;
}

.home-belief p {
  position: relative;
  color: var(--home-ink);
  font-size: 19px !important;
  font-weight: 650;
  line-height: 1.65 !important;
}

.home-about-aside {
  align-self: start;
  padding-top: 3px;
}

.home-aside-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 13px;
  border-bottom: 1px solid var(--home-line);
}

.home-aside-icon {
  color: var(--home-blue);
  font-size: 19px;
}

.home-about-aside h3 {
  margin: 17px 0 14px;
  color: var(--home-ink);
  font-size: 16px;
  font-weight: 650;
}

.home-topic-list {
  display: flex;
  flex-direction: column;
}

.home-topic-list > span {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px solid var(--home-line);
  color: var(--home-muted);
  font-size: 12px;
}

.home-topic-list small {
  color: var(--home-blue);
  font-size: 9px;
  letter-spacing: 0.08em;
}

.home-aside-footnote {
  margin-top: 30px;
  padding-top: 14px;
  border-top: 1px solid var(--home-line);
}

.home-aside-footnote p {
  margin-top: 10px;
  color: var(--home-ink);
  font-size: 13px !important;
  line-height: 1.75 !important;
}

.home-beyond {
  grid-template-columns: 150px minmax(0, 1fr);
}

.home-beyond-content {
  min-width: 0;
}

.home-beyond-lead {
  margin-bottom: 23px !important;
  color: var(--home-ink) !important;
  font-size: 18px !important;
  font-weight: 600;
}

.home-interest-list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  border-top: 1px solid var(--home-line);
}

.home-interest {
  position: relative;
  display: grid;
  grid-template-columns: 25px 28px minmax(0, 1fr);
  align-items: start;
  gap: 10px;
  padding: 20px 15px 8px 0;
}

.home-interest + .home-interest {
  padding-left: 18px;
  border-left: 1px solid var(--home-line);
}

.home-interest-number {
  color: var(--home-blue);
  font-size: 10px;
  font-weight: 650;
}

.home-interest-icon {
  color: var(--home-muted);
  font-size: 20px;
}

.home-interest h3 {
  margin: 0;
  color: var(--home-ink);
  font-size: 14px;
  font-weight: 650;
}

.home-interest p {
  margin-top: 7px;
  font-size: 12px !important;
  line-height: 1.7 !important;
}

.home-interest-arrow {
  display: none;
}

.home-connect {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: end;
  gap: 40px;
  padding: 66px 0 26px;
}

.home-connect h2 {
  margin-top: 16px;
  font-size: clamp(2.2rem, 4vw, 3.3rem);
}

.home-connect-copy > p {
  max-width: 440px;
  margin-top: 16px;
}

.home-socials {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 9px 20px;
  max-width: 430px;
}

.home-socials a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 0;
  border-bottom: 1px solid var(--home-line);
  color: var(--home-muted) !important;
  font-size: 12px;
  text-decoration: none !important;
  transition: color 160ms ease, border-color 160ms ease;
}

.home-socials a:hover {
  color: var(--home-blue) !important;
  border-color: var(--home-blue);
}

.home-socials a > span:first-child {
  font-size: 15px;
}

.home-social-arrow {
  color: var(--home-soft);
  font-size: 11px;
}

@media (max-width: 900px) {
  .home-section {
    grid-template-columns: 120px minmax(0, 1fr);
  }

  .home-about-aside {
    grid-column: 2;
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 24px;
  }

  .home-aside-footnote {
    margin-top: 0;
    padding-top: 0;
    border-top: 0;
    border-left: 1px solid var(--home-line);
    padding-left: 20px;
  }

  .home-connect {
    grid-template-columns: 1fr;
    gap: 22px;
  }

  .home-socials {
    justify-content: flex-start;
  }
}

@media (max-width: 640px) {
  .home-page {
    padding-top: 0;
  }

  .home-hero {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 46px 0 52px;
  }

  .home-title {
    font-size: clamp(3.4rem, 15vw, 4.7rem);
  }

  .home-intro {
    font-size: 16px !important;
  }

  .home-hero-visual {
    min-height: 300px;
    margin: 8px 10px 0;
  }

  .home-hero-backdrop {
    width: 230px;
  }

  .home-hero-orbit-outer {
    width: 290px;
  }

  .home-hero-orbit-inner {
    width: 255px;
  }

  .home-avatar {
    width: 185px;
  }

  .home-hero-index {
    right: 3px;
  }

  .home-now-note {
    left: 2px;
    bottom: 5px;
  }

  .home-hero-caption {
    right: 2px;
    bottom: 0;
  }

  .home-section,
  .home-beyond {
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 54px 0;
  }

  .home-section-rail {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    column-gap: 12px;
  }

  .home-section-rail .home-section-kicker {
    margin-top: 0;
  }

  .home-section-rail h2 {
    grid-column: 1 / -1;
    margin-top: 12px;
    font-size: 2.25rem;
  }

  .home-about-aside {
    grid-column: auto;
    grid-template-columns: 1fr;
    gap: 22px;
    margin-top: 8px;
    padding-top: 22px;
    border-top: 1px solid var(--home-line);
  }

  .home-aside-footnote {
    border-top: 1px solid var(--home-line);
    border-left: 0;
    padding: 16px 0 0;
  }

  .home-interest-list {
    grid-template-columns: 1fr;
  }

  .home-interest,
  .home-interest + .home-interest {
    grid-template-columns: 25px 28px minmax(0, 1fr) 16px;
    padding: 16px 0;
    border-left: 0;
    border-bottom: 1px solid var(--home-line);
  }

  .home-interest-arrow {
    display: block;
    color: var(--home-soft);
    font-size: 13px;
  }

  .home-connect {
    padding-top: 52px;
  }

  .home-socials {
    justify-content: flex-start;
    gap: 8px 17px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .home-page * {
    transition: none !important;
  }
}
</style>
