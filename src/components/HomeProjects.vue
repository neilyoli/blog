<script setup lang="ts">
import { selectedProjects } from '../../shared'

const featuredProject = selectedProjects.find(item => item.featured)!
const otherProjects = selectedProjects.filter(item => !item.featured)
</script>

<template>
  <section id="projects" class="home-projects home-section" aria-labelledby="projects-title">
    <div class="home-section-rail">
      <span class="home-section-number">02</span>
      <span class="home-section-kicker">SELECTED WORK</span>
      <h2 id="projects-title">Things I'm<br>Building<span>.</span></h2>
    </div>

    <div class="home-project-content">
      <p class="home-project-intro">
        目前主要在做三个项目。MagicListing 和 Meeting Agent 提供真实的业务场景，AgentKit 则是我长期投入的技术探索主线。
      </p>
      <p class="home-project-intro home-project-intro-muted">
        在业务项目中遇到的问题，会成为新的研究起点；经过实践验证、具有通用价值的设计和能力，再逐步沉淀到 AgentKit。
      </p>

      <article class="home-featured-project">
        <div class="home-featured-copy">
          <div class="home-featured-meta">
            <span>FEATURED PROJECT <b>01 / 03</b></span>
            <span class="home-project-status"><i /> {{ featuredProject.status }}</span>
          </div>

          <div class="home-featured-title-row">
            <span class="home-featured-symbol">AK</span>
            <div>
              <h3>{{ featuredProject.name }}</h3>
              <p>{{ featuredProject.subtitle }}</p>
            </div>
          </div>

          <p class="home-featured-desc">{{ featuredProject.desc }}</p>

          <div v-if="featuredProject.details?.length" class="home-featured-details">
            <p
              v-for="(paragraph, index) in featuredProject.details"
              :key="index"
            >
              {{ paragraph }}
            </p>
          </div>

          <div class="home-featured-tech">
            <span>BUILT WITH</span>
            <div>
              <span
                v-for="icon in featuredProject.tech"
                :key="icon"
                :class="icon"
              />
            </div>
          </div>
        </div>

        <aside class="home-featured-aside">
          <div class="home-flow-heading">
            <span>FROM PRACTICE TO FOUNDATION</span>
            <span>FIELD NOTES / 01</span>
          </div>

          <div class="home-flow">
            <div class="home-flow-sources">
              <div class="home-flow-source">
                <span class="home-flow-index">A</span>
                <div>
                  <strong>MagicListing</strong>
                  <small>AI Product Practice</small>
                </div>
              </div>
              <div class="home-flow-source">
                <span class="home-flow-index">B</span>
                <div>
                  <strong>Meeting Agent</strong>
                  <small>Business Workflow Practice</small>
                </div>
              </div>
            </div>

            <div class="home-flow-connector">
              <span>经验 · 问题 · 可复用能力</span>
              <i />
            </div>

            <div class="home-flow-target">
              <span class="home-flow-target-mark">AK</span>
              <div>
                <strong>AgentKit</strong>
                <small>Agent Engineering</small>
              </div>
            </div>
          </div>

          <div class="home-focus">
            <div class="home-focus-heading">CURRENT EXPLORATION</div>
            <div
              v-for="(area, index) in featuredProject.focusAreas"
              :key="area.title"
              class="home-focus-row"
            >
              <span>0{{ index + 1 }}</span>
              <strong>{{ area.title }}</strong>
              <small>{{ area.description }}</small>
            </div>
          </div>
        </aside>
      </article>

      <div class="home-project-notes">
        <component
          :is="item.link ? 'a' : 'article'"
          v-for="(item, index) in otherProjects"
          :key="item.name"
          v-bind="item.link
            ? { href: item.link, target: '_blank', rel: 'noopener noreferrer' }
            : {}"
          class="home-project-note"
          :class="item.link && 'home-project-note-link'"
        >
          <div class="home-project-note-top">
            <span>0{{ index + 2 }}</span>
            <span :class="item.icon" />
            <span class="home-project-note-status">{{ item.status }}</span>
          </div>
          <div class="home-project-note-title">
            <h3>{{ item.name }}</h3>
            <span v-if="item.link" class="i-ri-arrow-up-right-line" />
          </div>
          <p class="home-project-note-subtitle">{{ item.subtitle }}</p>
          <p class="home-project-note-desc">{{ item.desc }}</p>
          <div class="home-project-note-tech">
            <span
              v-for="icon in item.tech"
              :key="icon"
              :class="icon"
            />
          </div>
        </component>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-projects {
  grid-template-columns: 150px minmax(0, 1fr);
  padding-top: 82px;
}

.home-project-content {
  min-width: 0;
}

.home-project-intro {
  max-width: 680px;
  font-size: 15px !important;
  line-height: 1.85 !important;
}

.home-project-intro-muted {
  margin-top: 8px !important;
  color: var(--home-soft) !important;
  font-size: 13px !important;
}

.home-featured-project {
  display: grid;
  grid-template-columns: minmax(0, 1.12fr) minmax(250px, 0.88fr);
  margin-top: 34px;
  overflow: hidden;
  border-radius: 3px 22px 3px 22px;
  background: #f3f6fa;
}

:global(html.dark) .home-featured-project {
  background: #303e50;
}

.home-featured-copy {
  min-width: 0;
  padding: clamp(22px, 3.5vw, 38px);
}

.home-featured-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  color: #7d8a9a;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.15em;
}

.home-featured-meta b {
  margin-left: 9px;
  color: #a5afbb;
  font-weight: 500;
}

.home-project-status {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  letter-spacing: 0;
}

.home-project-status i {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #45a879;
}

.home-featured-title-row {
  display: flex;
  align-items: center;
  gap: 17px;
  margin-top: 34px;
}

.home-featured-symbol {
  display: flex;
  width: 54px;
  height: 54px;
  flex: 0 0 54px;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(23, 114, 208, 0.3);
  border-radius: 50%;
  color: #1772d0;
  font-size: 15px;
  font-weight: 750;
  letter-spacing: -0.08em;
}

.home-featured-title-row h3 {
  margin: 0;
  color: #202a39;
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 750;
  letter-spacing: -0.07em;
  line-height: 1;
}

.home-featured-title-row p {
  margin-top: 7px;
  color: #748195;
  font-size: 11px !important;
  line-height: 1.5 !important;
}

.home-featured-desc {
  margin-top: 25px !important;
  color: #536174 !important;
  font-size: 14px !important;
  font-weight: 550;
  line-height: 1.85 !important;
}

.home-featured-details {
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid rgba(82, 103, 129, 0.16);
}

.home-featured-details p {
  color: #697789 !important;
  font-size: 12px !important;
  line-height: 1.8 !important;
}

.home-featured-details p + p {
  margin-top: 10px !important;
}

.home-featured-tech {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 25px;
  padding-top: 15px;
  border-top: 1px solid rgba(82, 103, 129, 0.16);
}

.home-featured-tech > span,
.home-flow-heading,
.home-focus-heading {
  color: #8a97a8;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.14em;
}

.home-featured-tech > div {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #657386;
  font-size: 17px;
}

.home-featured-aside {
  position: relative;
  padding: clamp(22px, 3vw, 32px);
  background: #eaf0f7;
}

:global(html.dark) .home-featured-aside {
  background: #273548;
}

.home-flow-heading {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  font-size: 8px;
}

.home-flow {
  position: relative;
  margin-top: 25px;
  padding-left: 2px;
}

.home-flow-sources {
  display: grid;
  gap: 13px;
}

.home-flow-source {
  display: flex;
  align-items: center;
  gap: 12px;
}

.home-flow-index {
  display: flex;
  width: 29px;
  height: 29px;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(80, 103, 132, 0.28);
  border-radius: 50%;
  color: #718096;
  font-size: 10px;
  font-weight: 650;
}

.home-flow-source strong,
.home-flow-target strong {
  display: block;
  color: #344257;
  font-size: 12px;
  font-weight: 700;
}

.home-flow-source small,
.home-flow-target small {
  display: block;
  margin-top: 3px;
  color: #8794a6;
  font-size: 10px;
}

.home-flow-connector {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 15px 0 15px 14px;
  color: #8794a6;
  font-size: 9px;
}

.home-flow-connector i {
  position: relative;
  display: block;
  width: 1px;
  height: 26px;
  margin-left: 2px;
  background: #91a8c1;
}

.home-flow-connector i::after {
  position: absolute;
  bottom: 0;
  left: -3px;
  width: 6px;
  height: 6px;
  border-right: 1px solid #91a8c1;
  border-bottom: 1px solid #91a8c1;
  content: '';
  transform: rotate(45deg);
}

.home-flow-target {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: 1px;
  padding: 12px 14px;
  border-left: 2px solid #1772d0;
  background: rgba(255, 255, 255, 0.56);
}

:global(html.dark) .home-flow-target {
  background: rgba(255, 255, 255, 0.06);
}

.home-flow-target-mark {
  color: #1772d0;
  font-size: 22px;
  font-weight: 800;
  letter-spacing: -0.09em;
}

.home-focus {
  margin-top: 27px;
  padding-top: 17px;
  border-top: 1px solid rgba(82, 103, 129, 0.18);
}

.home-focus-row {
  display: grid;
  grid-template-columns: 22px 1fr;
  gap: 3px 9px;
  padding: 10px 0;
  border-bottom: 1px solid rgba(82, 103, 129, 0.13);
}

.home-focus-row > span {
  grid-row: span 2;
  color: #1772d0;
  font-size: 9px;
}

.home-focus-row strong {
  color: #344257;
  font-size: 11px;
}

.home-focus-row small {
  color: #8794a6;
  font-size: 10px;
}

.home-project-notes {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 28px;
  margin-top: 34px;
}

.home-project-note {
  display: block;
  min-width: 0;
  padding: 18px 0 4px;
  border-top: 1px solid var(--home-line);
  color: inherit !important;
  text-decoration: none !important;
  transition: border-color 180ms ease, transform 180ms ease;
}

.home-project-note-link:hover {
  border-color: var(--home-blue);
  transform: translateY(-2px);
}

.home-project-note-top {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--home-soft);
  font-size: 10px;
}

.home-project-note-top > span:nth-child(2) {
  color: var(--home-muted);
  font-size: 17px;
}

.home-project-note-status {
  margin-left: auto;
  font-size: 9px;
}

.home-project-note-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 17px;
}

.home-project-note-title h3 {
  margin: 0;
  color: var(--home-ink);
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.045em;
}

.home-project-note-title > span {
  color: var(--home-soft);
  font-size: 15px;
}

.home-project-note-subtitle {
  margin-top: 5px !important;
  color: var(--home-soft) !important;
  font-size: 11px !important;
}

.home-project-note-desc {
  margin-top: 14px !important;
  color: var(--home-muted) !important;
  font-size: 13px !important;
  line-height: 1.8 !important;
}

.home-project-note-tech {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 17px;
  color: var(--home-muted);
  font-size: 15px;
}

@media (max-width: 900px) {
  .home-projects {
    grid-template-columns: 120px minmax(0, 1fr);
  }

  .home-featured-project {
    grid-template-columns: 1fr;
  }

  .home-featured-aside {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 25px;
  }

  .home-flow-heading {
    grid-column: 1 / -1;
  }

  .home-flow {
    margin-top: 0;
  }

  .home-focus {
    margin-top: 0;
    padding-top: 0;
    border-top: 0;
  }
}

@media (max-width: 640px) {
  .home-projects {
    grid-template-columns: 1fr;
    padding-top: 54px;
  }

  .home-featured-project {
    margin-top: 25px;
    border-radius: 3px 16px 3px 16px;
  }

  .home-featured-aside {
    grid-template-columns: 1fr;
  }

  .home-flow-heading {
    grid-column: auto;
  }

  .home-flow {
    margin-top: 0;
  }

  .home-focus {
    padding-top: 17px;
    border-top: 1px solid rgba(82, 103, 129, 0.18);
  }

  .home-project-notes {
    grid-template-columns: 1fr;
    gap: 25px;
    margin-top: 30px;
  }
}
</style>
