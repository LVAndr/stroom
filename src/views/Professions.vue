<script setup>

import SetButton from "@/components/setButton.vue";
import SearchPanelSection from "@/components/layout/SearchPanelSection.vue";
import ProfessionsListSection from "@/components/layout/ProfessionsListSection.vue";
</script>

<template>
  <search-panel-section/>
  <section class="section">
    <div class="container">
      <div  style="margin-bottom: 20px">
        <set-button color="dark" animation="light-dark" :url="{name: 'profession', params: {id: '1'}}" label="Сторінка професії"/>
      </div>
    </div>
  </section>
  <professions-list-section/>
</template>

<style scoped lang="scss">

</style>