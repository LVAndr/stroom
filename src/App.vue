<script setup>
import LayoutHeader from '@/components/layout/Header.vue'
import LayoutFooter from '@/components/layout/Footer.vue'
</script>

<template>
  <div class="wrapper">
    <layout-header/>
    <main class="main">
      <router-view/>
    </main>
    <layout-footer/>
  </div>
</template>

<style scoped lang="scss">
</style>
