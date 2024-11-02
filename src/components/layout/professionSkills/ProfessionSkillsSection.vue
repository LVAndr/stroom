<script setup>

import Skill from "@/components/layout/professionSkills/Skill.vue";

const skills = [
  "Знання тканин",
  "Технічні навички",
  "Дизайнерські навички та творчість",
  "Увага до деталей",
  "Спілкування з клієнтами"
];
</script>

<template>
<section class="section profession-skills">
  <div class="profession-skills__container container">
    <h2 class="profession-skills__title heading-2-light">Основні навички</h2>
    <ul class="profession-skills__list">
      <skill v-for="skill in skills" :label="skill"/>
    </ul>
  </div>
</section>
</template>

<style scoped lang="scss">
@import "@/styles/main";
.profession-skills{
  background-color: $dark-jungle-green;
  &__list{
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
  }
}
</style>