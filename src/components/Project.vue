<script setup lang="ts">
import type { ProjectItem } from '../../shared'

const { item, variant } = withDefaults(defineProps<{
  item: ProjectItem
  variant?: 'default' | 'featured'
}>(), {
  variant: 'default',
})

const star = ref<number | null>(null)

async function getRepoStars() {
  if (!item.repo)
    return null

  try {
    const response = await fetch(`https://api.github.com/repos/${item.repo}`)
    if (!response.ok)
      return null

    const data = await response.json()
    return typeof data.stargazers_count === 'number'
      ? data.stargazers_count
      : null
  }
  catch {
    return null
  }
}

onMounted(async () => {
  star.value = await getRepoStars()
})
</script>

<template>
  <article
    v-if="variant === 'featured'"
    class="overflow-hidden rounded-2xl border border-c bg-c shadow-sm"
  >
    <div class="grid grid-cols-1 lg:grid-cols-[minmax(0,1.35fr)_minmax(250px,0.8fr)]">
      <div class="min-w-0 p-5 sm:p-7">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <span class="rounded-full bg-blue-50 dark:bg-blue-900/30 px-3 py-1 text-[10px] font-semibold tracking-[0.16em] text-brand dark:text-blue-300">
            FEATURED PROJECT
          </span>
          <span class="rounded-full bg-gray-100 dark:bg-gray-600 px-2.5 py-1 text-xs text-c-light">
            {{ item.status }}
          </span>
        </div>

        <div class="mt-5 flex items-center gap-3">
          <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-900/30 text-brand">
            <span :class="item.icon || 'i-carbon-unknown'" class="text-2xl" />
          </div>
          <div class="min-w-0">
            <h3 class="m-0 text-2xl font-bold tracking-tight text-c-dark">{{ item.name }}</h3>
            <p class="mt-1 text-sm text-c-light">{{ item.subtitle }}</p>
          </div>
        </div>

        <p class="mt-5 text-sm leading-7 text-c-light">
          {{ item.desc }}
        </p>

        <div v-if="item.details?.length" class="mt-4 space-y-3">
          <p
            v-for="(paragraph, index) in item.details"
            :key="`${item.name}-detail-${index}`"
            class="text-sm leading-7 text-c-light"
          >
            {{ paragraph }}
          </p>
        </div>

        <div class="mt-5 flex flex-wrap items-center gap-3 border-t border-c pt-4">
          <span class="text-[10px] font-semibold tracking-[0.14em] text-c-lighter">TECH STACK</span>
          <div class="flex items-center gap-2 text-base text-c-light">
            <span
              v-for="icon of item.tech"
              :key="`${item.name}-${icon}`"
              :class="icon"
              class="h-4 w-4"
            />
          </div>
        </div>
      </div>

      <aside class="border-t border-c bg-gray-50 dark:bg-gray-800 p-5 sm:p-6 lg:border-l lg:border-t-0">
        <div class="flex items-center justify-between">
          <span class="text-[10px] font-semibold tracking-[0.16em] text-c-lighter">CURRENT EXPLORATION</span>
          <span class="text-xs text-c-lighter">01 / 03</span>
        </div>

        <div v-if="item.focusAreas?.length" class="mt-4 space-y-2">
          <div
            v-for="(area, index) in item.focusAreas"
            :key="area.title"
            class="flex items-start gap-3 rounded-xl border border-c bg-c p-3"
          >
            <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-900/30 text-brand">
              <span :class="area.icon" class="text-lg" />
            </div>
            <div class="min-w-0">
              <div class="flex items-center gap-2">
                <span class="text-[10px] text-c-lighter">0{{ index + 1 }}</span>
                <p class="text-sm font-semibold text-c-dark">{{ area.title }}</p>
              </div>
              <p class="mt-1 text-xs leading-5 text-c-light">{{ area.description }}</p>
            </div>
          </div>
        </div>

        <div class="mt-4 rounded-xl border border-dashed border-gray-300 dark:border-gray-600 p-3">
          <p class="text-[10px] font-semibold tracking-[0.14em] text-c-lighter">JAVA ECOSYSTEM</p>
          <p class="mt-2 text-sm font-medium text-c-dark">Agent Runtime · Tools · Skills</p>
          <p class="mt-1 text-xs leading-5 text-c-light">在真实项目中验证，再把通用能力沉淀下来。</p>
        </div>
      </aside>
    </div>

    <div class="border-t border-c bg-c px-5 py-4 sm:px-7">
      <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <span class="text-[10px] font-semibold tracking-[0.16em] text-c-lighter">PRACTICE → ABSTRACTION</span>
        <div class="flex flex-wrap items-center gap-2 text-xs">
          <span class="rounded-full bg-gray-100 dark:bg-gray-600 px-3 py-1.5 text-c-light">MagicListing</span>
          <span class="rounded-full bg-gray-100 dark:bg-gray-600 px-3 py-1.5 text-c-light">Meeting Agent</span>
          <span class="i-ri-arrow-right-line text-c-lighter" />
          <span class="rounded-full bg-blue-50 dark:bg-blue-900/30 px-3 py-1.5 font-semibold text-brand dark:text-blue-300">AgentKit</span>
        </div>
      </div>
    </div>
  </article>

  <component
    :is="item.link ? 'a' : 'article'"
    v-else
    v-bind="item.link
      ? { href: item.link, target: '_blank', rel: 'noopener noreferrer' }
      : {}"
    class="group relative flex h-full flex-col rounded-2xl border border-c bg-c p-5 !text-c transition-all duration-200"
    :class="item.link && 'hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-sm dark:hover:border-gray-500'"
    :title="item.name"
  >
    <div class="flex items-start justify-between gap-3">
      <div class="flex min-w-0 items-center gap-3">
        <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-600 text-c-dark">
          <span :class="item.icon || 'i-carbon-unknown'" class="text-xl" />
        </div>
        <div class="min-w-0">
          <h3 class="m-0 text-base font-semibold text-c-dark">{{ item.name }}</h3>
          <p class="mt-1 text-xs text-c-light">{{ item.subtitle }}</p>
        </div>
      </div>
      <span
        v-if="item.link"
        class="i-ri-arrow-up-right-line mt-1 shrink-0 text-c-lighter transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </div>

    <p class="mt-4 flex-1 text-sm leading-6 text-c-light">
      {{ item.desc }}
    </p>

    <div class="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-c pt-3">
      <div class="flex items-center gap-2 text-sm text-c-light">
        <span
          v-for="icon of item.tech"
          :key="`${item.name}-${icon}`"
          :class="icon"
          class="h-4 w-4"
        />
        <span v-if="star !== null" class="inline-flex items-center gap-1 text-xs">
          <span class="i-noto-v1:star" />
          <span>{{ star }}</span>
        </span>
      </div>
      <span class="text-[10px] text-c-lighter">{{ item.status }}</span>
    </div>
  </component>
</template>
