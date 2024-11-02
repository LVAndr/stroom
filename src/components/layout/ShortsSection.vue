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
          <img :src="short" width="320" height="auto" alt="Відео шортс">
        </div>
      </div>
      <div class="shorts__item">
        <button class="shorts__item-play-button">
          <svg width="33" height="49" viewBox="0 0 33 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.5 21L2 4V44.5L29 28" stroke="#B9F833" stroke-width="4"/>
            <path d="M21 24.5L30 27L28 37" stroke="#B9F833" stroke-width="4"/>
          </svg>
        </button>
        <div class="shorts__item-video">
          <img :src="short" width="320" height="auto" alt="Відео шортс">
        </div>
      </div>
      <div class="shorts__item">
        <button class="shorts__item-play-button">
          <svg width="33" height="49" viewBox="0 0 33 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.5 21L2 4V44.5L29 28" stroke="#B9F833" stroke-width="4"/>
            <path d="M21 24.5L30 27L28 37" stroke="#B9F833" stroke-width="4"/>
          </svg>
        </button>
        <div class="shorts__item-video">
          <img :src="short" width="320" height="auto" alt="Відео шортс">
        </div>
      </div>
      <div class="shorts__item">
        <button class="shorts__item-play-button">
          <svg width="33" height="49" viewBox="0 0 33 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.5 21L2 4V44.5L29 28" stroke="#B9F833" stroke-width="4"/>
            <path d="M21 24.5L30 27L28 37" stroke="#B9F833" stroke-width="4"/>
          </svg>
        </button>
        <div class="shorts__item-video">
          <img :src="short" width="320" height="auto" alt="Відео шортс">
        </div>
      </div>
      <div class="shorts__item">
        <button class="shorts__item-play-button">
          <svg width="33" height="49" viewBox="0 0 33 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.5 21L2 4V44.5L29 28" stroke="#B9F833" stroke-width="4"/>
            <path d="M21 24.5L30 27L28 37" stroke="#B9F833" stroke-width="4"/>
          </svg>
        </button>
        <div class="shorts__item-video">
          <img :src="short" width="320" height="auto" alt="Відео шортс">
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
  &__list{
    margin-top: 30px;
    display: flex;
    gap: 30px;
    height: 469px;
  }
  &__item{
    width: 320px;
    height: 469px;
    position: relative;
    background-color: $white-smoke;
    border-radius: $border-radius-smallest;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
    &:active &-play-button>svg{
      scale: 1.08;
    }
    &-video{
      width: 100%;
      height: 100%;
      & img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
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
@media (max-width: 374.98px) {
  .shorts{
    &__item{
      width: 280px;
      height: 410px;
    }
  }
}
</style>