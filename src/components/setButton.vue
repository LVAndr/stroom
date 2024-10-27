<script setup>
const props = defineProps({
  url: {
    type: String,
    default: '',
  },
  label: {
        type: String,
        default: 'Кнопка',
  },
  color:{
    type: String,
    default: 'yellowy-green',
  },
  disabled: {
    type: Boolean,
    default: false,
  }

})
</script>

<template>
  <router-link
      :class="['btn', `btn__${color}`, {'btn__disabled': disabled}]"
      :to="url">
    {{label}}
  </router-link>
</template>

<style scoped lang="scss">
@import "@/styles/main.scss";

.btn{
  font-size: inherit;
  font-weight: 500;
  line-height: 1;
  user-select: none;
  display: inline-block;
  color: $dark-jungle-green;
  padding: 16px 28px;
  border-radius: 30px;
  cursor: pointer;
  transition: color .3s ease, color .3s ease;
  &:hover{
    color: $alien-green;
  }
  &__yellowy-green{
    background-color: $yellowy-green;
    transition: background-color .3s ease, color .3s ease;
    &:hover{
      background-color: $white-smoke;
    }
    &:active{
      color: $dark-jungle-green-opacity;
      background-color: #afec2f;
    }
  }
  &__disabled{
    opacity: 0.6;
    cursor: not-allowed;
    &:hover{
      color: rgba(34, 34, 34, 1);
      background-color: $yellowy-green;
    }
    &:active{
      background-color: $yellowy-green;
    }
  }
}

</style>