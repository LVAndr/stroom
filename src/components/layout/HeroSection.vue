<script setup>

</script>

<template>
  <section class="section hero">
    <div class="container hero__container">
      <div class="hero__content">
        <h1 class="hero__content-title heading-1">Заряджай своє майбутнє</h1>
        <p class="hero__content-description">Дізнавайся, які професії пасують тобі найбільше. Досліджуй, вчись, відкривай нові
          горизонти.</p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@/styles/main.scss";
.hero{
  &__content{
    max-width: 880px;
    &-title{
      margin-bottom: 10px;
    }
    &-description{
      margin-bottom: 20px;
      font-size: $font-size-big;
    }
  }
}
</style>