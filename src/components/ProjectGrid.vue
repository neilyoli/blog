<script setup lang="ts">
import { selectedProjects } from '../../shared'
import Project from './Project.vue'

const props = withDefaults(defineProps<{
  featured?: boolean
}>(), {
  featured: false,
})

const featuredProject = selectedProjects.find(item => item.featured)
const regularProjects = selectedProjects.filter(item => !item.featured)
</script>

<template>
  <div class="not-prose my-5">
    <template v-if="props.featured && featuredProject">
      <Project :item="featuredProject" variant="featured" />
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
        <Project
          v-for="item in regularProjects"
          :key="item.name"
          :item="item"
        />
      </div>
    </template>
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <Project
        v-for="item in selectedProjects"
        :key="item.name"
        :item="item"
      />
    </div>
  </div>
</template>
