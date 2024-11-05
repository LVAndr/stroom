<script setup>
const props = defineProps({
  isVisible: {
    type: Boolean,
    required: true,
    default: false
  },
  title: {
    type: String,
    default: 'Модальне вікно'
  }
})

const emits = defineEmits(['close']);

function closeModal() {
  emits('close');
  document.body.classList.remove('no-scroll');
}
</script>

<template>
<div
    class="modal"
    :class="isVisible ? 'open' : ''"
    @click.self="closeModal()"
>
  <div class="modal__box">
    <button
        @click="closeModal()"
        class="modal__box-close-btn"
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.251077 0.251051C0.585812 -0.0836838 1.12852 -0.0836838 1.46326 0.251051L6.00001 4.7878L10.5367 0.251077C10.8715 -0.0836585 11.4142 -0.0836585 11.7489 0.251077C12.0837 0.585812 12.0837 1.12852 11.7489 1.46326L7.2122 5.99999L11.7489 10.5367C12.0837 10.8715 12.0837 11.4142 11.7489 11.7489C11.4142 12.0837 10.8715 12.0837 10.5368 11.7489L6.00001 7.21217L1.46323 11.7489C1.1285 12.0837 0.585786 12.0837 0.251051 11.7489C-0.0836838 11.4142 -0.0836838 10.8715 0.251051 10.5368L4.78783 5.99999L0.251077 1.46323C-0.0836585 1.1285 -0.0836585 0.585786 0.251077 0.251051Z" fill="#EDF1F3"/>
      </svg>
    </button>
    <h2 class="modal__box-title">
      {{title}}
    </h2>
    <div class="modal__content">
      <slot>

      </slot>
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">
@import "@/styles/main.scss";
.modal{
  position: fixed;
  left: 0;
  top: 0;
  display: grid;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  z-index: 99999;
  background-color: rgba(51, 51, 51, 0.5);
  overflow-y: auto;
  visibility: hidden;
  opacity: 0;
  transition: visibility .8s ease, opacity .8s ease;
  &.open{
    visibility: visible;
    opacity: 1;
  }
  &__box{
    color: $white-smoke;
    position: relative;
    max-width: 400px;
    min-width: 250px;
    min-height: 200px;
    padding: 32px 30px;
    z-index: 1;
    background-color: $dark-jungle-green;
    border-radius: $border-radius-small;
    margin: 30px 15px;
    &-title{
      margin-top: 5px;
      font-size: 24px;
    }
    &-close-btn{
      position: absolute;
      top: 5px;
      right: 6px;
      padding: 8px;
      background-color: transparent;
      border: none;
    }
  }
  &__content{
    margin-top: 12px;
  }
}

</style>