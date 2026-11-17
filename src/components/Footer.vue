<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer text="16px center" mt-20 w-52vw mx-auto slide-enter animate-delay-800 flex flex-col items-center gap-2>
    <div w-full flex items-center justify-between lt-md:justify-center>
      <div text-c-lighter>
        © {{ year }} Neilyo
        <span lt-md:hidden>· Building software from backend to frontend.</span>
      </div>
      <div flex items-center gap-3 lt-md:hidden>
        <a text-c op-50 hover:op-100 flex items-center cursor-pointer href="https://github.com/neilyoli/blog" title="Source" target="_blank" rel="noopener noreferrer">
          <div i-carbon-code mr-1 />
          Source
        </a>
        <a text-c op-50 hover:op-100 flex items-center cursor-pointer href="/feed.xml" title="RSS" target="_blank" rel="noopener noreferrer">
          <div i-jam:rss-feed mr-1 />
          RSS
        </a>
      </div>
    </div>
    <a
      class="text-xs text-c-lighter hover:text-c transition-colors whitespace-nowrap"
      href="https://beian.miit.gov.cn/"
      target="_blank"
      rel="noopener noreferrer"
    >
      湘ICP备2023005999号
    </a>
  </footer>
</template>
