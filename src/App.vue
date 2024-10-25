<script setup>
import LayoutHeader from '@/components/layout/Header.vue'
</script>

<template>
  <div class="wrapper">
    <layout-header/>
    <main class="main">
      <router-view/>
    </main>
  </div>
</template>

<style scoped lang="scss">
</style>
