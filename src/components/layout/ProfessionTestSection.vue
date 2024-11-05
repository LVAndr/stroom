<script setup>
import SetButton from "@/components/setButton.vue";
import ModalWindow from "@/components/ModalWindow.vue";
import {ref} from "vue";
import {openModal} from "@/utils/index.js";

const showTestModal = ref(false);
</script>

<template>
<section class="section profession-test">
  <div class="profession-test__container container">
    <h2 class="profession-test__title heading-2-light">Тест “Чи підійде тобі ця професія - Зварювальник”</h2>
    <div class="profession-test__content">
      <set-button @btn-click="showTestModal = openModal()" tag="button" label="Пройти тест"/>
    </div>
  </div>
  <modal-window
      @close="showTestModal = false"
      title="Обери те, що подобається"
      :is-visible="showTestModal"
  >
    <p>Тест для професії...</p>
  </modal-window >
</section>
</template>

<style scoped lang="scss">
@import "@/styles/main.scss";
.profession-test {
  background-color: $dark-jungle-green;
  &__container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }
  &__title{
    max-width: 800px;
  }
}
@media (max-width: 639.98px) {
  .profession-test {
    &__container{
      flex-direction: column;
    }
    &__content{
      width: 100%;
      &>.btn{
        width: 100%;
        display: flex;
        text-align: center;
        justify-content: center;
      }
    }
  }
}
</style>