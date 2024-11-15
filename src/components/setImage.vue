<script setup>
import {requireImage} from "@/utils/index.js";

const props = defineProps({
  folderPath: {
    type: String,
    required: false,
    default: ''
  },
  imgName: {
    type: String,
    required: true
  },
  imgAlt: {
    type: String,
    required: false
  },
  imgWidth: {
    type: [Number, String],
    required: false
  },
  imgHeight: {
    type: [Number, String],
    required: false
  }
})
</script>

<template>
  <img :width="imgWidth" :height="imgHeight" :src="requireImage(folderPath, imgName)" :alt="imgAlt" loading="lazy">
</template>