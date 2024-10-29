<script setup>
import HeroSection from "@/components/layout/HeroSection.vue";
import AboutProjectSection from "@/components/layout/AboutProjectSection.vue";
import FeaturesSection from "@/components/layout/FeaturesSection.vue";
import MentionsSection from "@/components/layout/MentionsSection.vue";
import ExploreProfessionsSection from "@/components/layout/ExploreProfessionsSection.vue";

</script>

<template>
  <hero-section/>
  <about-project-section/>
  <features-section/>
  <mentions-section/>
  <hr class="home__line">
  <explore-professions-section/>
</template>

<style scoped lang="scss">
@import "@/styles/main.scss";
.home__line{
  //background-color: $alien-green;
  border: 3px solid $alien-green;
}
</style>