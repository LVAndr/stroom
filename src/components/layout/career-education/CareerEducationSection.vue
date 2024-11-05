<script setup>
import SetButton from "@/components/setButton.vue";
import InstitutionsItem from "@/components/layout/career-education/InstitutionsItem.vue";

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
        <div class="career-education__filters-select">
        <select name="institution-type" id="institution-type">
          <option value="public">Державне</option>
          <option value="private">Приватне</option>
          <option value="vocational">Професійно-технічне</option>
        </select>
        </div>

        <div class="career-education__filters-select">
          <select name="institution-type" id="institution-type">
            <option value="public">Оберіть регіон</option>
          </select>
        </div>

        <set-button rounded label="Пошукати поблизу мене"/>
      </div>
    </div>
    <ul class="career-education__institutions-list">
      <institutions-item class="career-education__institutions-item" :img="educationImg"/>
      <institutions-item class="career-education__institutions-item" :img="educationImg"/>
    </ul>
  </div>
</section>
</template>

<style scoped lang="scss">
@import "@/styles/main.scss";
.career-education {
  &__top{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
  }
  &__filters{
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    align-items: center;
    select{
      width: 180px;
      padding: 12px;
      font-size: 18px;
      color: inherit;
      border: 1px solid $dark-jungle-green-opacity50;
      border-radius: $border-radius-smaller;
      background-color: transparent;
    }
    &-select{
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
  }
  &__institutions-list{
    margin-top: 30px;
  }
  &__institutions-item{
    &:not(:last-child){
      margin-bottom: 20px;
    }
  }
}
@media (max-width: 1250px) {
  .career-education {
    &__top{
      flex-direction: column;
      gap: 20px;
      align-items: start;
    }
  }
}
</style>