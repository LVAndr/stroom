<script setup>

import ProfessionOverviewSection from "@/components/layout/ProfessionOverviewSection.vue";
import ShortsSection from "@/components/layout/ShortsSection.vue";
import ProfessionStatisticsSection from "@/components/layout/ProfessionStatisticsSection.vue";
import ProfessionSkillsSection from "@/components/layout/professionSkills/ProfessionSkillsSection.vue";
import ProfessionProsConsSection from "@/components/layout/profession-pros-cons/ProfessionProsConsSection.vue";
import CareerEducationSection from "@/components/layout/career-education/CareerEducationSection.vue";
import ProfessionTestSection from "@/components/layout/ProfessionTestSection.vue";
import SimilarProfessionsSection from "@/components/layout/SimilarProfessionsSection.vue";
</script>

<template>
  <profession-overview-section/>
  <shorts-section/>
  <profession-statistics-section/>
  <profession-skills-section/>
  <profession-pros-cons-section/>
  <career-education-section/>
  <profession-test-section/>
  <similar-professions-section/>
</template>

<style scoped lang="scss">
@import "@/styles/main.scss";
</style>