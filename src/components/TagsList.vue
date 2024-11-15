<script setup>
const props = defineProps({
  tagsList: {
    type: Array,
    default: ''
  },
  addHashtag: {
    type: Boolean,
    default: false
  },
  rounded: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: 'apple-green'
  }
})
</script>

<template>
<ul class="tags">
  <li
      :class="['tags__item', `tags__item-${color}`, {'tags__item-rounded': rounded}]"
      v-for="(tag, index) in tagsList"
      :key="index"
  >
    {{addHashtag ? `#${tag}` : tag}}
  </li>
</ul>
</template>

<style scoped lang="scss">
@import "@/styles/main.scss";
.tags{
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  &__item{
    font-weight: 500;
    &-apple-green{
      color: $apple-green;
    }
    &-dark{
      color: $dark-jungle-green;
    }
    &-light{
      color: $white-smoke;
    }
    &-rounded{
      padding: 8px 10px;
      border-radius: $border-radius-btn;
      border: 2px solid $apple-green;
    }
  }
}
@media (max-width: 479.98px){
  .tags{
    &__item{
      &-rounded{
        border: 1px solid $apple-green;
      }
    }
  }
}
</style>