<script setup>
import SearchPanelSection from "@/components/layout/SearchPanelSection.vue";
import ProfessionsListSection from "@/components/layout/ProfessionsListSection.vue";
</script>

<template>
  <search-panel-section/>
  <professions-list-section/>
</template>

<style scoped lang="scss">
.search-panel{
  padding-bottom: 15px;
}
.professions-list{
  padding-top: 15px;
}
</style>