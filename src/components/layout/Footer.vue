<script setup>

</script>

<template>
  <footer class="footer">
    <div class="footer__container container">
      <div class="footer__content-logo">
        <router-link class="logo" :to="{name: 'home'}">
          <img src="@/assets/logo.svg" alt="логотип Струм">
        </router-link>
        <small class="copyright">
          &copy; Всі права захищено
        </small>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@import "@/styles/main.scss";
.footer{
  background-color: $dark-jungle-green;
  padding-bottom: 60px;
  padding-top: 60px;
  color: $porcelain;
  &__container{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__content{
    &-logo{
      display: flex;
      flex-direction: column;
      align-items: center;
      .copyright{
        text-align: center;
        font-size: clamp(0.75rem, 0.435vw + 0.663rem, 1rem);
      }
    }
  }
}
@media (max-width: 992.98px) {
  .footer{
    padding-top: 50px;
    &__content{
      &-logo>a>img{
        height: 45px;
        width: auto;
      }
    }
  }
}
@media (max-width: 767.98px) {
  .footer{
    padding-top: 35px;
    &__content{
      &-logo>a>img{
        height: 35px;
        width: auto;
      }
    }
  }
}
@media (max-width: 479.98px) {
  .footer{
    padding-top: 25px;
    &__content{
      &-logo>a>img{
        height: 30px;
        width: auto;
      }
    }
  }
}
</style>