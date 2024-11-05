<script setup>
const props = defineProps({
  tag: {
    type: String,
    default: 'li',
  },
  aspectValue: {
    type: String,
    default: 'pros'
  },
  title: {
    type: String,
    default: '',
  },
  text: {
    type: String,
    default: '',
  }
})
</script>

<template>
<component
    :class="['pros-cons-item', `pros-cons-item__${aspectValue}`]"
  is="tag"
>
  <div class="pros-cons-item__wrapper">
    <div class="pros-cons-item__icon">
      <template v-if="aspectValue === 'pros'">
        <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.4688 3.31152V29.249" stroke="#79C912" stroke-width="3"/>
          <path d="M2.5 16.2803L28.4375 16.2803" stroke="#79C912" stroke-width="3"/>
        </svg>
      </template>
      <template v-else>
        <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 15.8115L26.25 15.8115" stroke="#222222" stroke-width="3"/>
        </svg>
      </template>
    </div>
    <div class="pros-cons-item__content">
      <h3 class="pros-cons-item__title heading-3">
        {{title}}
      </h3>
      <div class="pros-cons-item__text">
        {{text}}
      </div>
    </div>
  </div>
  <div class="pros-cons-item__footer"></div>
</component>
</template>

<style scoped lang="scss">
@import "@/styles/main.scss";
.pros-cons-item{
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  border: 1px solid;
  border-radius: $border-radius-small;
  &__pros{
    border-color: $apple-green;
  }
  &__cons{
    border-color: $dark-jungle-green-opacity50;
  }
  &__wrapper{
    flex: 1;
    display: flex;
    align-items: center;
    gap: 15px;
    width: 100%;
  }
  &__icon {
    flex-shrink: 0;
  }

  &__content{
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
  &__title{
    flex-shrink: 0;
  }
  &__text{
    margin-top: 10px;
    margin-bottom: auto;
    text-wrap: wrap;
  }
  &__foter{
    margin-top: auto;
  }
}
@media (max-width: 424.98px) {
  .pros-cons-item{
    padding: 20px;
  }
}
@media (max-width: 424.98px) {
  .pros-cons-item{
    padding: 15px;
  }
}
@media (max-width: 374.98px) {
  .pros-cons-item{
    padding: 10px;
  }
}
</style>