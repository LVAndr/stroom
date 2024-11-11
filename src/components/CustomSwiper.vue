<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
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
</script>

<template>
<swiper>
  <swiper-slide>

  </swiper-slide>
  <div v-if="pagination" class="swiper-pagination"></div>
  <div v-if="navigation" class="swiper-button-next"></div>
  <div v-if="navigation" class="swiper-button-prev"></div>
</swiper>
</template>

<style scoped lang="scss">

</style>