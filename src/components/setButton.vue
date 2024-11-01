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
    default: 'apple-green',
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
  font-size: clamp(1.125rem, 0.435vw + 1.038rem, 1.375rem);
  font-family: 'Ermilov Pro', 'Arial', 'Helvetica', sans-serif;
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
  &__apple-green{
    background-color: $apple-green;
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
      background-color: inherit;
    }
    &:active{
      background-color: inherit;
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
        background-color: $apple-green-light;
      }
      &:active{
        background-color: $apple-green-dark;
      }
    }
    &__white{
      transition: background-color .3s ease, color .3s ease;
      &:hover{
        background-color: $white-smoke;
        color: $apple-green;
      }
      &:active{
        color: $dark-jungle-green-opacity;
        background-color: $apple-green-dark;
      }
    }
    &__light-dark{
      transition: background-color .3s ease, color .3s ease;
      &:hover{
        color: $apple-green;
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