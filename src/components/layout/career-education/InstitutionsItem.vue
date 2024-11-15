<script setup>

const props = defineProps({
  img: {
    type: String,
    default: '',
  }
})
</script>

<template>
<li class="institutions-item">
  <router-link class="institutions-item__link" :to="{name: 'institution', params: {id: '1'}}">
    <div class="institutions-item__img">
      <img :src="img" width="140" height="140" alt="Зображення навчального закладу">
    </div>
    <div class="institutions-item__info">
      <div class="institutions-item__info-description">
        <h3 class="institutions-item__info-title heading-3">
          Державне підприємство "Інститут підготовки кадрів промисловості" у подільскому районі
        </h3>
        <address>
          м.Київ, вул. Лук`янівська, 65/67
        </address>
      </div>
      <div class="institutions-item__info-characteristics">
        <div class="institutions-item__info-education-type">
          Державне
        </div>
        <div class="institutions-item__info-education-duration">
          2 роки навчання
        </div>
      </div>
    </div>
  </router-link>
</li>
</template>

<style scoped lang="scss">
@import "@/styles/main.scss";
.institutions-item{
  &__link{
    display: flex;
    align-items: center;
    gap: 20px;
  }
  &__img{
    max-width: 140px;
    width: 100%;
    height: 140px;
    overflow: hidden;
  }
  &__info{
    display: flex;
    gap: 20px;
    align-items: center;
    &-description{
      max-width: 850px;
    }
    &-title{
      margin-bottom: 20px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &-characteristics{
      display: flex;
      align-items: center;
      gap: 20px;
    }
  }
  &__education-duration{
    text-align: end;
  }
}
@media (max-width: 991.98px) {
  .institutions-item{
    border: 1px solid $dark-jungle-green-opacity50;
    border-radius: $border-radius-small;
    &__link{
      padding: 10px;
    }
    &__img{
      border-radius: $border-radius-smaller;
    }
    &__info{
      flex-direction: column;
      align-items: start;
    }
  }
}
@media (max-width: 767.98px) {
  .institutions-item{
    &__img{
      max-width: 100px;
      height: 100px;
      & img{
        width: 100px;
        height: 100px;
      }
    }
    &__info{
      &-title{
        -webkit-line-clamp: 3;
      }
    }
  }
}
@media (max-width: 424.98px) {
  .institutions-item{
    padding-top: 20px;
    padding-bottom: 20px;
    &__link{
      flex-direction: column;
    }
    &__img {
      max-width: 200px;
      height: 200px;
      & img {
        width: 200px;
        height: 200px;
      }
    }
  }
}
@media (hover: hover){
  .institutions-item:hover{
    transform: scale(1.01);
    transition: transform 0.4s ease;
  }
}
@media (hover: none){
  .institutions-item:active{
    transform: scale(1.01);
  }
}
</style>