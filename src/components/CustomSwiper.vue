<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import {computed} from "vue";

const props = defineProps({
  slides: {
    type: Array,
    required: true,
  },
  loop: {
    type: Boolean,
    default: false,
  },
  autoplay: {
    type: Boolean,
    default: false,
  },
  autoplayDelay: {
    type: Number,
    default: 2500,
  },
  pagination: {
    type: Boolean,
    default: false
  },
  navigation: {
    type: Boolean,
    default: false
  }
})
const swiperModules = computed(() => {
  const modules = [];
  if (props.autoplay) modules.push(Autoplay);
  if (props.pagination) modules.push(Pagination);
  if (props.navigation) modules.push(Navigation);
  return modules;
});
</script>

<template>
<swiper
    :modules="swiperModules"
    :autoplay="autoplay ? { delay: autoplayDelay, disableOnInteraction: false } : false"
    :speed="500"
    :loop="true"
    :pagination="pagination ? { clickable: true } : false"
    :navigation="navigation"
    :slides-per-view="4"
    :space-between="20"
    class="swiper-container">
  <swiper-slide>

  </swiper-slide>
  <div v-if="pagination" class="swiper-pagination"></div>
  <div v-if="navigation" class="swiper-button-next"></div>
  <div v-if="navigation" class="swiper-button-prev"></div>
</swiper>
</template>

<style scoped lang="scss">

</style>