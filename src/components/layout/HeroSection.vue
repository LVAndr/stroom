<script setup>

import SetButton from "@/components/setButton.vue";
</script>

<template>
  <section class="section hero">
    <video autoplay loop muted playsinline class="background-video">
      <source src="@/assets/hero-background.mp4" type="video/mp4">
      <source src="@/assets/hero-background.webm" type="video/webm">
    </video>
    <div class="container hero__container">
      <div class="hero__content">
        <h1 class="hero__content-title heading-1-light">Заряджай своє майбутнє</h1>
        <p class="hero__content-description">Дізнавайся, які професії пасують тобі найбільше. Досліджуй, вчись, відкривай нові
          горизонти.</p>
        <set-button
            label="Почати досліджувати"
            url="/professions"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@/styles/main.scss";
.hero{
  position: relative;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.12);
  background-size: cover;
  background-position: center;
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  .background-video {
    max-width: 1920px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
  &__content{
    position: absolute;
    bottom: 60px;
    color: $white-smoke;
    max-width: 880px;
    z-index: 1;
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