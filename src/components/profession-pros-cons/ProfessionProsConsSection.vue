<script setup>

import ProsConsItem from "@/components/profession-pros-cons/ProsConsItem.vue";
import {ref} from "vue";

const professionCharacteristics = ref([
  {
    title: "Креативність",
    text: "Можливість створювати унікальні дизайни та працювати з різними стилями одягу",
    aspectValue: "pros"
  },
  {
    title: "Ручна робота",
    text: "Насолода від ручної праці та можливість бачити результати своєї роботи",
    aspectValue: "pros"
  },
  {
    title: "Попит",
    text: "Стабільний попит на послуги з пошиття та ремонту одягу, особливо для індивідуальних замовлень",
    aspectValue: "pros"
  },
  {
    title: "Фізична праця",
    text: "Робота може бути фізично виснажливою, особливо при тривалому сидінні та ручній праці",
    aspectValue: "cons"
  },
  {
    title: "Непостійний дохід",
    text: "Дохід може бути нестабільним, особливо на початку кар'єри або при роботі на себе",
    aspectValue: "cons"
  },
  {
    title: "Монотонність",
    text: "Іноді робота може бути монотонною, особливо при виконанні повторюваних завдань або великих замовлень",
    aspectValue: "cons"
  }
]);
</script>

<template>
<section class="section pros-cons">
  <div class="pros-cons__container container">
    <h2 class="heading-2 pros-cons__title">Плюси та мінуси професії</h2>
    <ul class="pros-cons__list">
      <pros-cons-item
          v-for="(item, idx) in professionCharacteristics"
          :aspectValue="item.aspectValue"
          :title="item.title"
          :text="item.text"
          :key="idx"
      />
    </ul>
  </div>
</section>
</template>

<style scoped lang="scss">
@import "@/styles/main";
.pros-cons{
  &__list{
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 20px
  }
}
@media (max-width: 767.98px) {
  .pros-cons{
    &__list{
      grid-template-columns: 1fr;
    }
  }
}
</style>