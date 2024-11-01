<script setup>

</script>

<template>
<section class="section about-project">
  <div class="container about-project__container">
    <h2 class="heading-2 about-project__title">
      <span>Струм</span> - це платформа вибору професії, яка допомагає молоді побудувати зрозумілий шлях до своєї роботи мрії
    </h2>
    <div class="about-project__description">
      <p class="about-project__description-text">Ми постійно оновлюємо інформацію про найновіші професії та тенденції на ринку праці, щоб показати кожному їх
        освітній та професійний шлях.</p>
      <p class="about-project__description-highlight">Приєднуйся, щоб розпочати свою подорож до улюбленої роботи.</p>
    </div>
  </div>
</section>
</template>
<style scoped lang="scss">
@import "@/styles/main.scss";
.about-project{
  &__title{
    max-width: 1000px;
    text-align: start;
  }
  &__description{
    max-width: 700px;
    &-text{
      margin-top: 20px;
    }
    &-highlight{
      margin-top: 20px;
      font-weight: 700;
      color: $apple-green;
    }
  }
}

</style>