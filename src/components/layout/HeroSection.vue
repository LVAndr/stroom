<script setup>

import SetButton from "@/components/setButton.vue";
</script>

<template>
  <section class="section hero">
    <video autoplay loop muted playsinline class="background-video">
      <source
          src="../../assets/images/hero-background/375.mp4"
          type="video/mp4"
          media="(max-width: 375px)"
      >
      <source
          src="../../assets/images/hero-background/480.mp4"
          type="video/mp4"
          media="(max-width: 480px)"
      >
      <source
          src="../../assets/images/hero-background/768.mp4"
          type="video/mp4"
          media="(max-width: 768px)"
      >
      <source
          src="../../assets/images/hero-background/992.mp4"
          type="video/mp4"
          media="(max-width: 992px)"
      >
      <source
          src="../../assets/images/hero-background/1250.mp4"
          type="video/mp4"
          media="(max-width: 1250px)"
      >
      <source
          src="../../assets/images/hero-background/1440.mp4"
          type="video/mp4"
          media="(max-width: 1440px)"
      >
      <source
          src="../../assets/images/hero-background/1600.mp4"
          type="video/mp4"
          media="(max-width: 1600px)"
      >
      <source
          src="../../assets/images/hero-background/hero-background-large.mp4"
          type="video/mp4"
          media="(min-width: 1601px)"
      >

      <!-- WEBM формат -->
      <source
          src="../../assets/images/hero-background/375.webm"
          type="video/webm"
          media="(max-width: 375px)"
      >
      <source
          src="../../assets/images/hero-background/480.webm"
          type="video/webm"
          media="(max-width: 480px)"
      >
      <source
          src="../../assets/images/hero-background/768.webm"
          type="video/webm"
          media="(max-width: 768px)"
      >
      <source
          src="../../assets/images/hero-background/992.webm"
          type="video/webm"
          media="(max-width: 992px)"
      >
      <source
          src="../../assets/images/hero-background/1250.webm"
          type="video/webm"
          media="(max-width: 1250px)"
      >
      <source
          src="../../assets/images/hero-background/1440.webm"
          type="video/webm"
          media="(max-width: 1440px)"
      >
      <source
          src="../../assets/images/hero-background/1600.webm"
          type="video/webm"
          media="(max-width: 1600px)"
      >
      <source
          src="../../assets/images/hero-background/hero-background-large.webm"
          type="video/webm"
          media="(min-width: 1601px)"
      >
    </video>
    <div class="container hero__container">
      <div class="hero__content">
        <h1 class="hero__content-title heading-1-light">Заряджай своє майбутнє</h1>
        <p class="hero__content-description">Дізнавайся, які професії пасують тобі найбільше. Досліджуй, вчись, відкривай нові
          горизонти.</p>
        <set-button
            tag="a"
            label="Почати досліджувати"
            url="#home-exp-profs"
            animation="white"
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
  overflow: hidden;
  &:before{
    max-width: 1600px;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    background-size: cover;
    background-position: center;
    z-index: 10;
    //backdrop-filter: blur(6px);
    //-webkit-backdrop-filter: blur(6px);
  }
  &__container{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: flex-end;
    height: 100%;
    padding-top: 60px;
    padding-bottom: $section-offset;
    box-sizing: border-box;
    @media (max-width: 991.98px) {
      padding-bottom: $section-offset-992px;
    }
    @media (max-width: 767.98px) {
      padding-top: 40px;
      padding-bottom: $section-offset-768px;
    }
  }
  .background-video {
    max-width: 1920px;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100vh;
    transform: translate(-50%, -50%);
    object-fit: cover;
    z-index: -1;
  }
  &__content{
    color: $white-smoke;
    max-width: 880px;
    z-index: 10;
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