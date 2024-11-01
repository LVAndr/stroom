<script setup>
import short from '@/assets/images/shorts-item-img.jpg'
</script>

<template>
<section class="section shorts">
  <div class="shorts__container container">
    <h2 class="shorts__title heading-2-light">“За 1 хвилину” про професію</h2>
    <div class="shorts__list">
      <div class="shorts__item">
        <button class="shorts__item-play-button">
          <svg width="33" height="49" viewBox="0 0 33 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.5 21L2 4V44.5L29 28" stroke="#B9F833" stroke-width="4"/>
            <path d="M21 24.5L30 27L28 37" stroke="#B9F833" stroke-width="4"/>
          </svg>
        </button>
        <div class="shorts__item-video">
          <img :src="short" alt="">
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<style scoped lang="scss">
@import "@/styles/main.scss";
.shorts{
  background-color: $dark-jungle-green;
  &--list{
    margin-top: 30px;
    display: flex;
    gap: 30px;
    overflow: hidden;
  }
  &__item{
    max-width: 320px;
    height: 470px;
    overflow: hidden;
    position: relative;
    &-video{

    }
    &-play-button{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 10;
      background: none;
      cursor: pointer;
    }
  }
}
</style>