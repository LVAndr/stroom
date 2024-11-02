<script setup>

import ProfessionOverviewSection from "@/components/layout/ProfessionOverviewSection.vue";
import ShortsSection from "@/components/layout/ShortsSection.vue";
import ProfessionStatisticsSection from "@/components/layout/ProfessionStatisticsSection.vue";
import ProfessionSkillsSection from "@/components/layout/professionSkills/ProfessionSkillsSection.vue";
</script>

<template>
  <profession-overview-section/>
  <shorts-section/>
  <profession-statistics-section/>
  <profession-skills-section/>
</template>

<style scoped lang="scss">
@import "@/styles/main.scss";
</style>