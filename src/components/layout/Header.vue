<script setup>

</script>

<template>
<header class="header">
<router-link class="logo" to="/">
  <img src="@/assets/logo.svg" alt="логотип Струм">
</router-link>
  <nav class="header__navigation">
    <router-link class="header__navigation-link" to="/proffession">Професії</router-link>
    <router-link class="header__navigation-link" to="/user">Профіль</router-link>
  </nav>
</header>
</template>

<style scoped lang="scss">
.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 184px;
  &__navigation{
    &_link{
      &:not(:last-child){
        margin-left: 110px;
      }
    }
  }
}
</style>