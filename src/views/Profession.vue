<script setup>

import ProfessionOverviewSection from "@/components/layout/ProfessionOverviewSection.vue";
import ShortsSection from "@/components/layout/ShortsSection.vue";
import ProfessionStatisticsSection from "@/components/layout/ProfessionStatisticsSection.vue";
import ProfessionSkillsSection from "@/components/layout/professionSkills/ProfessionSkillsSection.vue";
import ProfessionProsConsSection from "@/components/profession-pros-cons/ProfessionProsConsSection.vue";
</script>

<template>
  <profession-overview-section/>
  <shorts-section/>
  <profession-statistics-section/>
  <profession-skills-section/>
  <profession-pros-cons-section/>
</template>

<style scoped lang="scss">
@import "@/styles/main.scss";
</style>