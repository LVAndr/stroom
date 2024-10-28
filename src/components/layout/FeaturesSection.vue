<script setup>

import FeaturesItem from "@/components/FeaturesItem.vue";
const featuresList = [
  {
    title: "Інформація про професії",
    text: "Отримайте інформацію про професії: вимоги до навчання, зарплату та перспективи працевлаштування"
  },
  {
    title: "Навчальні заклади",
    text: "Оберіть найкращий навчальний заклад для обраної професії із десятків варіантів"
  },
  {
    title: "Можливості",
    text: "Спробуйте професію на практиці завдяки можливостям стажування та волонтерства"
  },
  {
    title: "Зв'язок з менторами",
    text: "Задай питання професіоналам із досвідом роботи в кожній професії або отримай персональну консультацію"
  },
  {
    title: "Корисні поради",
    text: "Дізнайся, як скласти резюме, написати супровідний лист та підготуватися до співбесіди"
  },
  {
    title: "Тестування",
    text: "Проходьте тести та опитування, щоб краще зрозуміти свої сильні та слабкі сторони, інтереси та цінності"
  }
];
</script>

<template>
<section class="section features">
  <div class="features__container container">
    <h2 class="heading-2-light features__title">
      Що корисного пропонує <span>Струм?</span>
    </h2>
    <ul class="features__list">
      <features-item
          class="feature__item"
          v-for="(item, i) in featuresList" :key="i"
          :title="item.title"
          :text="item.text"
      />
    </ul>
  </div>
</section>
</template>

<style scoped lang="scss">
@import "@/styles/main.scss";
.features{
  background-color: $dark-jungle-green;
  &__list{
    margin-top: 30px;
    max-width: 1048px;
    color: $white-smoke;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 112px;
    row-gap: 30px;
  }
}
@media (max-width: 991.98px) {
  .features{
    &__list{
      column-gap: 72px;
    }
  }
}
@media (max-width: 767.98px) {
  .features{
    &__list{
      margin-top: 25px;
    }
  }
}
@media (max-width: 639.98px) {
  .features{
    &__list{
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>