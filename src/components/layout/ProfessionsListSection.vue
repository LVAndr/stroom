<script setup>

import ProfessionCard from "@/components/layout/ProfessionCard.vue";
import SetButton from "@/components/setButton.vue";
</script>

<template>
<section class="section professions-list">
  <div class="professions-list__container container">
    <h2 class="heading-2 professions-list__title">Усі професії</h2>
    <ul class="professions-list__list">
      <profession-card/>
      <profession-card/>
      <profession-card/>
      <profession-card/>
      <profession-card/>
      <profession-card/>
    </ul>
    <div class="professions-list__btn"><set-button tag="button" label="Більше професій"/></div>
  </div>
</section>
</template>

<style scoped lang="scss">
@import "@/styles/main.scss";

.professions-list{
  &__list{
    margin-top: 20px;
    display: grid;
    column-gap: 20px;
    row-gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  &__btn{
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
@media (max-width: 767.98px) {
  .professions-list{
    &__list{
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));;
    }
  }
}
</style>