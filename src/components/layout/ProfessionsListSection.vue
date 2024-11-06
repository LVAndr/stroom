<script setup>

import ProfessionCard from "@/components/layout/ProfessionCard.vue";
</script>

<template>
<section class="section professions-list">
  <div class="professions-list__container container">
    <h2 class="heading-2 professions-list__title">Усі професії</h2>
    <ul class="professions-list__list">
      <profession-card/>
    </ul>
  </div>
</section>
</template>

<style scoped lang="scss">

</style>