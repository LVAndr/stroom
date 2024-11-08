<script setup>
import professionImg from '@/assets/images/professions-img/designer.jpg'
import BookmarkBtn from "@/components/BookmarkBtn.vue";
import TagsList from "@/components/TagsList.vue";

const props = defineProps({
  textColor: {
    type: String,
    default: 'over-light'
  },
  title: {
    type: String,
    default: 'Зварювальник'
  },
  text: {
    type: String,
    default: 'Зварювальник здійснює зварювання металевих частин та конструкцій, використовуючи різні технології зварювання для створення, ремонту або реконструкції металевих виробів',
  },
  tagsColor: {
    type: String,
    default: 'dark',
  }
})
</script>

<template>
<li :class="['profession-card', `profession-card__${textColor}`]">
  <router-link class="profession-card__link" :to="{name: 'profession', params: {id: '1'}}">
    <div class="profession-card__img">
      <img :src="professionImg" alt="картинка професії">
      <bookmark-btn class="profession-card__bookmark"/>
    </div>
    <div class="profession-card__description">
      <h3 class="profession-card__description-title">
        {{title}}
      </h3>
     <tags-list class="profession-card__description-tags" :color="tagsColor" rounded/>
      <div class="profession-card__description-text">
        Зварювальник здійснює зварювання металевих частин та конструкцій, використовуючи різні технології зварювання для створення, ремонту або реконструкції металевих виробів
      </div>
    </div>
    <div class="profession-card__icon">
      <span>Детальніше</span>
      <svg width="39" height="40" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.08887 3.64087L35.4991 35.0511" stroke="#77D202" stroke-width="7.17949"/>
        <path d="M0.5 35.5H34.6026V0.5" stroke="#77D202" stroke-width="7.17949"/>
      </svg>
    </div>
  </router-link>
</li>
</template>

<style scoped lang="scss">
@import "@/styles/main.scss";
.profession-card{
  max-width: 450px;
  min-width: 200px;
  background-color: transparent;
  border: 1px solid;
  border-radius: $border-radius-small;
  overflow: hidden;
  &__over-light{
    color: $dark-jungle-green;
    border-color: #e0e0e0;
  }
  &__over-dark{
    border-color: #373737;
    color: $white-smoke;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    .profession-card__description-text{
      color: $white-smoke-opacity60;
    }
  }
  &__link{
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    padding-bottom: 46px;
  }
  &__img{
    position: relative;
    z-index: 1;
    img{
      width: 100%;
      height: auto;
    }
  }
  &__bookmark{
    position: absolute;
    top: 17px;
    right: 17px;
    z-index: 50;
    -webkit-transform: translateZ(0);
  }
  &__description{
    display: flex;
    flex-direction: column;
    padding: 10px 20px 5px;
    &-title{
      white-space: pre-line;
      font-size: clamp(1.375rem, 1.957vw + 0.984rem, 2.5rem);
      margin-bottom: 10px;
    }
    &-tags{
      margin-top: auto;
      margin-bottom: 10px;
    }
    &-text{
      color: $dark-jungle-green-opacity;
      margin-top: auto;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  &__icon{
    position: absolute;
    bottom: 14px;
    left: 20px;
    display: flex;
    align-items: center;
    gap: 6px;
    font-family: 'Ermilov Pro', 'Arial', 'Helvetica', sans-serif;
    font-size: clamp(1.125rem, 0.435vw + 1.038rem, 1.375rem);
    font-weight: 500;
    color: $apple-green;
    transition: all .4s ease;
    & svg{
      width: 16px;
      height: 20px;
      rotate: -45deg;
      transition: transform .4s ease;
      & path {
        transition: stroke .4s ease;
      }
    }
  }
  &:active &__icon{
    color: $apple-green-dark;
  }
  &:active &__icon svg path{
    stroke: $apple-green-dark;
  }
}
@media (max-width: 479.98px) {
  .profession-card{
    &__icon{
      & svg{
        width: 12px;
        height: 15px;
      }
    }
  }
}
@media (hover: hover) {
  .profession-card {
    &:hover .profession-card__icon > svg {
      transform: rotate(-45deg);
      transition: transform 0.4s ease;
    }

    &.profession-card__over-light:hover {
      transform: scale(1.02);
      -webkit-box-shadow: 0 1px 6px 2px $dark-jungle-green-opacity20;
      -moz-box-shadow: 0 1px 6px 2px $dark-jungle-green-opacity20;
      box-shadow: 0 1px 6px 2px $dark-jungle-green-opacity20;
      transition: transform 0.4s ease, box-shadow 0.4s ease;
    }
    &.profession-card__over-dark:hover {
      transform: scale(1.02);
      -webkit-box-shadow: 0 1px 6px 2px $white-smoke-opacity3;
      -moz-box-shadow: 0 1px 6px 2px $white-smoke-opacity3;
      box-shadow: 0 1px 6px 2px $white-smoke-opacity3;
      transition: transform 0.4s ease, box-shadow 0.4s ease;
    }
  }
}
@media (hover: none) {
  .profession-card {
    .profession-card__icon > svg {
      transform: rotate(-45deg);
      transition: transform 0.4s ease;
    }
  }
}
</style>