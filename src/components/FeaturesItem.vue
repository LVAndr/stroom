<script setup>
const props = defineProps({
  title:{
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
})
</script>

<template>
  <li
      v-if="title || text"
      class="item"
  >
    <div class="item__icon">
      <svg width="39" height="40" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.08887 3.64087L35.4991 35.0511" stroke="#77D202" stroke-width="7.17949"/>
        <path d="M0.5 35.5H34.6026V0.5" stroke="#77D202" stroke-width="7.17949"/>
      </svg>
    </div>
    <h3 class="item__title heading-3-light">{{title}}</h3>
    <p class="item__text">{{text}}</p>
  </li>
</template>

<style scoped lang="scss">
.item{
  padding-top: 5px;
  padding-bottom: 5px;
  &__icon{
    display: inline-block;
  }
  &__title{
    margin-top: 20px;
  }
  &__text{
    margin-top: 10px;
  }
}
@media (max-width: 767.98px) {
  .item{
    &__icon>svg{
      width: 30px;
      height: auto;
    }
  }
}
@media (max-width: 479.98px) {
  .item{
    &__title{
      margin-top: 15px;
    }
  }
}
@media (max-width: 374.98px) {
  .item{
    &__title{
      margin-top: 10px;
    }
    &__text{
      margin-top: 5px;
    }
    &__icon>svg{
      width: 25px;
      height: auto;
    }
  }
}
</style>