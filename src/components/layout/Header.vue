<script setup>
import {useRoute} from "vue-router";
import {computed} from "vue";
const route = useRoute();
const ifHomePageH = computed(() => {
  return route.path === '/' || route.path === '/stroom/' ? 'header__homepage' : '';
});
</script>

<template>
<header :class="['header', ifHomePageH]">
  <div class="header__container container">
    <router-link class="logo" to="/stroom/">
      <img src="@/assets/logo.svg" alt="логотип Струм">
    </router-link>
    <nav class="header__navigation">
      <router-link class="header__navigation-link" to="/stroom/professions">Професії</router-link>
      <router-link class="header__navigation-link" to="/stroom/user">
        <div class="user-icon">
          <svg width="43" height="39" viewBox="0 0 43 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="21.6464" cy="12.5778" r="9.90856" stroke="#B9F833" stroke-width="5.33894"/>
            <path d="M2.66797 38.804C2.74508 34.2547 6.60046 25.156 21.4051 25.156C36.2098 25.156 40.0651 34.2547 40.1423 38.804" stroke="#B9F833" stroke-width="5.33844"/>
          </svg>
        </div>
      </router-link>
    </nav>
  </div>
</header>
</template>

<style scoped lang="scss">
@import "@/styles/main.scss";
.header{
  //position: fixed;
  //top: 0;
  //left: 0;
  //right: 0;
  background-color: $dark-jungle-green;
  padding-top: $header-offset;
  padding-bottom: $header-offset;
  z-index: 100;
  &__homepage{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: transparent;
  }
  &__container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    height: $header-height;
  }
  &__navigation{
    display: flex;
    align-items: center;
    &-link{
      font-size: inherit;
      color: $white-smoke;
      transition: opacity .3s ease;
      &:not(:last-child){
        margin-right: 110px;
      }
      &:hover{
        opacity: 0.8;
      }
      .user-icon{
        display: grid;
        align-items: center;
        justify-content: center;
        .svg{
          width: 50px;
          height: 50px;
        }
      }
    }
  }
}
@media (max-width: 992.98px) {
  .header{
    padding-top: $header-offset-992px;
    padding-bottom: $header-offset-992px;
    .logo>img{
      height: 45px;
      width: auto;
    }
    &__navigation{
      &-link{
        &:not(:last-child){
          margin-right: 80px;
        }
        .user-icon>svg{
          width: 40px;
          height: 40px;
        }
      }

    }
  }
}
@media (max-width: 767.98px) {
  .header{
    padding-top: $header-offset-768px;
    padding-bottom: $header-offset-768px;
    .logo>img{
      height: 35px;
    }
    &__navigation{
      &-link{
        &:not(:last-child){
          margin-right: 50px;
        }
        .user-icon>svg{
          width: 30px;
          height: 30px;
        }
      }
    }
  }
}
@media (max-width: 479.98px) {
  .header{
    padding-top: $header-offset-480px;
    padding-bottom: $header-offset-480px;
    .logo>img{
      height: 30px;
      width: auto;
    }
    &__navigation{
      &-link{
        &:not(:last-child){
          margin-right: 20px;
        }
        .user-icon>svg{
          width: 25px;
          height: 25px;
        }
      }
    }
  }
}
@media (max-width: 374.98px) {
  .header{
    &__navigation{
      &-link{
        &:not(:last-child){
          margin-right: 15px;
        }
        .user-icon>svg{
          width: 20px;
          height: 20px;
        }
      }
    }
  }
}
</style>