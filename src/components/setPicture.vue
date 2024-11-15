<script setup>
import {requireImage} from "@/utils/index.js";

const props = defineProps({
  imgObj: {
    type: Object,
    required: true
  },
  folderPath: {
    type: String,
    required: true
  }
})
</script>

<template>
  <picture>
    <template v-if="imgObj.sourceImgs" v-for="(item, idx) in imgObj.sourceImgs" :key="idx">
      <source
          :srcset="requireImage(folderPath, item.nameImg)"
          :media="`(${item.mediaValue})`"
      >
    </template>
    <img :width="imgObj.defaultImg.width"
         :height="imgObj.defaultImg.height"
         loading="lazy"
         :src="requireImage(folderPath, imgObj.defaultImg.nameImg)"
         :alt="imgObj.defaultImg.alt">
  </picture>
</template>