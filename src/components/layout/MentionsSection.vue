<script setup>

import Ticker from "@/components/Ticker.vue";
</script>

<template>
<section class="section mentions">
  <div class="container mentions__container">
    <div class="mentions__text-content">
      <h2 class="mentions__title heading-2">Про <span>Струм</span> говорять</h2>
      <p class="mentions__text">Про нас пишуть не тільки у пресі, а навіть на сайті Верховної Ради України!</p>
    </div>
    <ticker/>
  </div>
</section>
</template>

<style scoped lang="scss">
.mentions{
  &__text-content{
    max-width: 1136px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
  }
  &__text{
    max-width: 400px;
  }
}
@media (max-width: 1250px) {
  .mentions{
    &__text{
      max-width: 260px;
    }
  }
}
@media (max-width: 1050px) {
  .mentions{
    &__text{
      max-width: 200px;
    }
  }
}
@media (max-width: 879.98px) {
  .mentions{
    &__text-content{
      display: block;
    }
    &__text{
      margin-top: 10px;
      max-width: 400px;
      width: auto;
    }
  }
}
</style>