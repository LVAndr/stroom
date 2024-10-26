<script setup>

</script>

<template>
  <footer class="footer">
    <div class="footer__container container">
      <div class="footer__content-logo">
        <router-link class="logo" to="/">
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
      .copyright{
        text-align: center;
        font-size: 16px;
      }
    }
  }
}
</style>