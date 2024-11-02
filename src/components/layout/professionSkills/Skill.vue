<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true
  },
  tag: {
    type: String,
    default: 'li',
  }
})
</script>

<template>
  <component
      class="skill"
      :is="tag"
  >
    {{label}}
  </component>
</template>

<style scoped lang="scss">
@import "@/styles/main.scss";
.skill{
  padding: 20px;
  display: inline-block;
  font-size: clamp(1.125rem, 0.652vw + 0.995rem, 1.5rem);
  color: $white-smoke;
  background-color: #363637;
  border-radius: $border-radius-small;
  border: 2px solid $apple-green;
}
@media (max-width: 767.98px) {
  .skill {
    padding: 16px;
  }
}

@media (max-width: 374.98px) {
  .skill {
    padding: 12px;
  }
}
</style>