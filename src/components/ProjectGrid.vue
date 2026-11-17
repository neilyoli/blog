<script setup lang="ts">
import { selectedProjects } from '../../shared'
import Project from './Project.vue'
</script>

<template>
  <div class="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 my-5">
    <Project
      v-for="item in selectedProjects"
      :key="item.name"
      :item="item"
    />
  </div>
</template>
