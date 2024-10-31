<script setup>
const props = defineProps({
  tag:{
    type: String,
    default: 'router-link'
  },
  url: {
    type: [String, Object],
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
  },
  full: {
    type: Boolean,
    default: false
  },
  animation: {
    type: String,
    default: 'light-green'
  }

})

const emits = defineEmits(['btn-click']);
const clickOnButton = ()=>{
  if (props.tag === 'button') {
    emits("btn-click")
  }
}
</script>

<template>
  <component
      :href="tag === 'a' ? url : null"
      :to="tag === 'router-link' ? url : null"
      @click="clickOnButton"
      :is="tag"
      :class="['btn', `btn__${color}`, {'btn__disabled': disabled},
      {'btn__full': full}, `btn-animation__${animation}`]"
      >
    {{label}}
  </component>
</template>

<style scoped lang="scss">
@import "@/styles/main.scss";

.btn{
  min-width: 100px;
  font-size: inherit;
  font-weight: 500;
  line-height: 1;
  white-space: nowrap;
  user-select: none;
  display: inline-block;
  color: $dark-jungle-green;
  padding: 16px 28px;
  border-radius: $border-radius-btn;
  cursor: pointer;
  transition: color .3s ease, color .3s ease;
  &__yellowy-green{
    background-color: $yellowy-green;
  }
  &__dark{
    background-color: $dark-jungle-green;
    color: $white-smoke;
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
  &__full{
    text-align: center;
    display: flex;
    justify-content: center;
  }
  &-animation{
    &__light-green{
      transition: background-color .3s ease, color .3s ease;
      &:hover{
        color: $dark-jungle-green-opacity;
        background-color: $yellowy-green-light;
      }
      &:active{
        background-color: $yellowy-green-dark;
      }
    }
    &__white{
      transition: background-color .3s ease, color .3s ease;
      &:hover{
        background-color: $white-smoke;
        color: $alien-green;
      }
      &:active{
        color: $dark-jungle-green-opacity;
        background-color: $yellowy-green-dark;
      }
    }
    &__light-dark{
      transition: background-color .3s ease, color .3s ease;
      &:hover{
        color: $alien-green;
        background-color: $dark-jungle-green-opacity;
      }
      &:active{
        color: $porcelain;
        background-color: $dark-jungle-green-dark;
      }
    }
  }
}

</style>