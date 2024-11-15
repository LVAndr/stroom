<script setup>
import {ref} from "vue";

const bookmark = ref(true);

const emits = defineEmits(['click-bookmark']);
const clickOnButton = ()=>{
    emits('click-bookmark');
    bookmark.value = !bookmark.value;
}
</script>

<template>
  <button
      @click.prevent="clickOnButton"
      :class="['bookmark-btn', {'active': bookmark}]">
    <svg width="44" height="42" viewBox="0 0 44 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 5L26.0413 17.4377H39.119L28.5389 25.1246L32.5801 37.5623L22 29.8754L11.4199 37.5623L15.4611 25.1246L4.88098 17.4377H17.9587L22 5Z" fill="currentFill" stroke="#E2FC52" stroke-width="3"/>
    </svg>
  </button>
</template>

<style scoped lang="scss">
@import "@/styles/main.scss";
.bookmark-btn{
  outline: none;
  background: none;
  cursor: pointer;
  &.active{
    & svg{
      fill: $apple-green;
    }
  }
}
</style>