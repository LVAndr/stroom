<script setup>
import professionImg from '@/assets/images/professions-img/designer.jpg'
import BookmarkBtn from "@/components/BookmarkBtn.vue";

const props = defineProps({
  textColor: {
    type: String,
    default: 'under-light'
  },
  title: {
    type: String,
    default: 'Зварювальник'
  },
  text: {
    type: String,
    default: 'Зварювальник здійснює зварювання металевих частин та конструкцій, використовуючи різні технології зварювання для створення, ремонту або реконструкції металевих виробів',
  }
})
</script>

<template>
<li :class="['profession-card', `profession-card__${textColor}`]">
  <router-link class="profession-card__link" :to="{name: 'profession', params: {id: '1'}}">
    <bookmark-btn class="profession-card__bookmark"/>
    <div class="profession-card__img">
      <img :src="professionImg" alt="картинка професії">
    </div>
    <div class="profession-card__description">
      <h3 class="profession-card__description-title">
        {{title}}
      </h3>
      <div class="profession-card__description-tags">#Мода</div>
      <div class="profession-card__description-text">
        Зварювальник здійснює зварювання металевих частин та конструкцій, використовуючи різні технології зварювання для створення, ремонту або реконструкції металевих виробів
      </div>
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
  &__under-light{
    color: $dark-jungle-green;
    border-color: #e0e0e0;
    transition: scale .3s ease, box-shadow .4s ease;
    &:hover{
      scale: 1.02;
      -webkit-box-shadow: 0 1px 6px 2px $dark-jungle-green-opacity20;
      -moz-box-shadow: 0 1px 6px 2px $dark-jungle-green-opacity20;
      box-shadow: 0 1px 6px 2px $dark-jungle-green-opacity20;
    }
  }
  &__under-dark{
    border-color: #373737;
    color: $white-smoke;
    transition: scale .3s ease, box-shadow .4s ease;
    &:hover{
      scale: 1.02;
      -webkit-box-shadow: 0 1px 6px 2px $white-smoke-opacity3;
      -moz-box-shadow: 0 1px 6px 2px $white-smoke-opacity3;
      box-shadow: 0 1px 6px 2px $white-smoke-opacity3;
    }
    .profession-card__description-text{
      color: $white-smoke-opacity60;
    }
  }
  &__link{
    position: relative;
  }
  &__bookmark{
    position: absolute;
    top: 17px;
    right: 17px;
    z-index: 50;
  }
  &__img{
    z-index: 5;
    img{
      width: 100%;
      height: auto;
    }
  }
  &__description{
    padding: 10px 20px 20px;
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
}
</style>