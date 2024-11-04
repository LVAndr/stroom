<script setup>
import SetButton from "@/components/setButton.vue";
import InstitutionsItem from "@/components/career-education/InstitutionsItem.vue";

import educationImg from '@/assets/images/education-img.jpg'
</script>

<template>
<section class="section career-education">
  <div class="career-education__container container">
    <div class="career-education__top">
      <h2 class="career-education__title heading-2">
        Де навчатись
      </h2>
      <div class="career-education__filters">
        <span>Фільтри</span>
        <set-button rounded label="Пошукати поблизу мене"/>
      </div>
    </div>
    <ul class="career-education__institutions-list">
      <institutions-item :img="educationImg"/>
    </ul>
  </div>
</section>
</template>

<style scoped lang="scss">
@import "@/styles/main";
.career-education {
  &__top{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
  }
  &__filters{
    display: flex;
    gap: 12px;
    align-items: center;
  }
  &__institutions-list{
    margin-top: 30px;
  }
}
</style>