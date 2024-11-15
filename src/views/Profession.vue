<script setup>
import EntityOverviewSection from "@/components/layout/EntityOverviewSection.vue";
import ShortsSection from "@/components/layout/ShortsSection.vue";
import ProfessionStatisticsSection from "@/components/layout/ProfessionStatisticsSection.vue";
import ProfessionSkillsSection from "@/components/layout/professionSkills/ProfessionSkillsSection.vue";
import ProfessionProsConsSection from "@/components/layout/profession-pros-cons/ProfessionProsConsSection.vue";
import CareerEducationSection from "@/components/layout/career-education/CareerEducationSection.vue";
import ProfessionTestSection from "@/components/layout/ProfessionTestSection.vue";
import SimilarProfessionsSection from "@/components/layout/SimilarProfessionsSection.vue";

const professionTags = ['Мода', 'Креативність', 'Ручна праця'];
const professionDesc = 'Кравець виготовляє, ремонтує та змінює одяг, підганяючи його під мірки та смаки клієнтів. Працює з різними тканинами, викрійками та інструментами для шиття, щоб створити одяг, який ідеально підходить'
</script>

<template>
  <entity-overview-section :description="professionDesc" :title="'Зварювальник'" :tags="professionTags"/>
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