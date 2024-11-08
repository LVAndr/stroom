<script setup>

import SetButton from "@/components/setButton.vue";
import ProfessionCard from "@/components/layout/ProfessionCard.vue";
</script>

<template>
<section class="section similar-professions">
  <div class="similar-professions__container container">
    <h2 class="similar-professions__title heading-2-light">
      Схожі професії
    </h2>
    <ul class="similar-professions__list">
      <profession-card title="Кравець 3-го розряду 222 ава пап" class="similar-professions__item" text-color="over-dark" tags-color="light"/>
      <profession-card class="similar-professions__item" text-color="over-dark" tags-color="light"/>
      <profession-card class="similar-professions__item" text-color="over-dark" tags-color="light"/>
    </ul>
    <div class="similar-professions__btn">
      <set-button tag="router-link" :url="{name: 'professions'}" label="Більше професій"/>
    </div>
  </div>
</section>
</template>

<style scoped lang="scss">
@import "@/styles/main.scss";
.similar-professions {
  background-color: $dark-jungle-green;
  &__container{
    color: $white-smoke;
  }
  &__list{
    margin-top: 20px;
    display: grid;
    grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));
    column-gap: 20px;
    row-gap: 30px;
  }
  &__btn{
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
@media (max-width: 767.98px) {
  .similar-professions{
    &__list{
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));;
    }
  }
}
</style>