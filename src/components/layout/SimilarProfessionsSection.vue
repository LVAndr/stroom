<script setup>

import SetButton from "@/components/setButton.vue";
</script>

<template>
<section class="section similar-professions">
  <div class="similar-professions__container container">
    <h2 class="similar-professions__title heading-2-light">
      Схожі професії
    </h2>
    <ul class="similar-professions__list">
      <li class="similar-professions__item">Список схожих професій</li>
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
  }
  &__btn{
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>