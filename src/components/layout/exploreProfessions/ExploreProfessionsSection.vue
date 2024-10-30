<script setup>

import SetButton from "@/components/setButton.vue";
import ExploreProfessionsCard from "@/components/layout/exploreProfessions/ExploreProfessionsCard.vue";
</script>

<template>
<section class="section explore-professions" id="home-exp-profs">
  <div class="explore-professions__container container">
    <div class="explore-professions__text-content">
      <h2 class="explore-professions__title heading-2">Досліджуй професії</h2>
      <p class="explore-professions__text">Дізнайся про ту роботу, яка тобі найбільше подобається та відповідає твоїм інтересам</p>
    </div>
    <ul class="explore-professions__list">
      <explore-professions-card class="explore-professions__item"/>
      <explore-professions-card class="explore-professions__item"/>
      <explore-professions-card class="explore-professions__item"/>
      <explore-professions-card class="explore-professions__item"/>
      <explore-professions-card class="explore-professions__item"/>
      <explore-professions-card class="explore-professions__item"/>
    </ul>
    <div class="explore-professions__btn">
      <set-button
          :to="{name: 'professions'}"
          label="Дослідити всі професії"
          full
      />
    </div>
  </div>
</section>
</template>

<style scoped lang="scss">
.explore-professions{
  &__text-content{
    max-width: 1136px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
  }
  &__text{
    max-width: 400px;
  }
  &__list{
    margin: 30px auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(298px, 1fr));
    justify-content: center;
    gap: 20px;
  }
  &__btn{

  }
}
@media (max-width: 1250px) {
  .explore-professions{
    &__text{
      max-width: 260px;
    }
  }
}
@media (max-width: 1050px) {
  .explore-professions{
    &__text{
      max-width: 200px;
    }
  }
}
@media (max-width: 879.98px) {
  .explore-professions{
    &__text-content{
      display: block;
    }
    &__text{
      margin-top: 10px;
      max-width: 400px;
      width: auto;
    }
  }
}
@media (max-width: 767.98px) {
  .explore-professions{
    &__list{
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));;
    }
  }
}
@media (max-width: 629.98px) {
  .explore-professions{
    &__list{
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));;
    }
  }
}
@media (max-width: 424.98px) {
  .explore-professions{
    &__list{
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));;
    }
  }
}
</style>