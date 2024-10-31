<script setup>

import SetButton from "@/components/setButton.vue";
import SearchForm from "@/components/SearchForm.vue";
</script>

<template>
<section class="section search-panel">
  <div class="container search-panel__container">
    <h1 class="search-panel__title heading-1">
      Професії
    </h1>
    <div class="search-panel__wrapper">
      <search-form placeholder="Пошук професії"/>
      <div class="search-panel__filter-btns filter-btns">
        <set-button tag="button" class="filter-btn" label="Обери свої інтереси"/>
        <set-button tag="button" color="dark" animation="light-dark" class="filter-btn" label="Фільтр з хештегами"/>
      </div>
    </div>
  </div>
</section>
</template>

<style scoped lang="scss">
@import "@/styles/main.scss";
.search-panel {
  &__wrapper {
    margin-top: 30px;
    display: flex;
    align-items: center;
    gap: 24px;
  }
  &__filter-btns{
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .filter-btns{
    & .filter-btn{
      padding: 16px 30px;
    }
  }
}
@media (max-width: 991.98px) {
  .search-panel {
    &__wrapper {
      flex-direction: column;
      align-items: start;
    }
    .filter-btns{
      & .filter-btn{
        padding: 14px 19px;
        width: auto;
      }
    }
  }
}
@media (max-width: 767.98px) {
  .search-panel {
    &__wrapper {
      gap: 20px;
    }
  }
}
@media (max-width: 424.98px) {
  .search-panel {
    .filter-btns{
      flex-direction: column;
    }
  }
}
</style>