<script setup>
import designer from '@/assets/professions-img/designer.jpg'
</script>

<template>
  <li class="explore-item">
    <router-link class="explore-item__link" :to="{name: 'profession',params:{id: 1}}">
      <div class="explore-item__img">
        <img :src="designer" width="450" height="450" alt="зображення професії">
      </div>
      <div class="explore-item__description">
        <h3 class="explore-item__title heading-3-light">Кравець</h3>
      </div>
    </router-link>
  </li>
</template>

<style scoped lang="scss">
@import "@/styles/main.scss";
.explore-item{
  max-width: 450px;
  height: auto;
  user-select: none;
  position: relative;
  overflow: hidden;
  border-radius: $border-radius-large;
  background-color: #8B8B8B;
  transition: .4s ease;
  &__link{
    width: 100%;
    height: 400px;
    display: grid;
    align-items: center;
    justify-content: center;
    background-color: red;
    padding: 20px 15px;
  }
  &__img{
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    border-radius: inherit;
    &:before{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 4;
      background-color: $dark-jungle-green-opacity50;
    }
    & img{
      max-width: 450px;
      transition: transform .5s ease;
    }
  }
  &:hover &__img>img{
    transform: scale(1.05);
  }
  &__description{
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 50;
  }
  &__title{
    display: flex;
    justify-content: center;
    text-align: start;
    z-index: 50;
  }
}
@media (max-width: 424.98px) {
  .explore-item{
    &__link{
      height: 300px;
    }
  }
}
</style>