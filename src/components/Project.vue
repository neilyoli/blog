<script setup lang="ts">
import type { ProjectItem } from '../../shared'

const { item } = defineProps<{ item: ProjectItem }>()

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
  <component
    :is="item.link ? 'a' : 'div'"
    v-bind="item.link
      ? { href: item.link, target: '_blank', rel: 'noopener noreferrer' }
      : {}"
    relative
    flex items-start
    gap-4 p-5
    rounded-xl
    border="1 c"
    bg-c
    class="!no-underline !text-c transition-colors"
    :class="item.link && 'hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer'"
    :title="item.name"
  >
    <div class="min-w-0 flex-1">
      <div class="flex flex-wrap items-center gap-2">
        <span class="font-semibold text-c-dark">{{ item.name }}</span>
        <span
          v-if="item.status"
          class="rounded-full bg-gray-100 dark:bg-gray-600 px-2 py-0.5 text-xs text-c-light"
        >
          {{ item.status }}
        </span>
      </div>

      <div class="mt-2 flex items-center gap-2 text-sm text-c-light">
        <span
          v-for="icon of item.tech"
          :key="`${item.name}-${icon}`"
          :class="icon"
          class="h-4 w-4"
        />
        <span v-if="star !== null" class="inline-flex items-center gap-1">
          <span class="i-noto-v1:star text-xs" />
          <span>{{ star }}</span>
        </span>
      </div>

      <p class="mt-3 text-sm leading-6 text-c-light">
        {{ item.desc }}
      </p>
    </div>

    <div class="shrink-0 pt-1 text-2xl text-c-lighter">
      <div :class="item.icon || 'i-carbon-unknown'" />
    </div>
  </component>
</template>
