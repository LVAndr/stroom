<script setup>
import professionImg from '@/assets/images/professions-img/designer.jpg'
import SetButton from "@/components/setButton.vue";
import BookmarkBtn from "@/components/BookmarkBtn.vue";
import TagsList from "@/components/TagsList.vue";

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  tags: {
    type: Array,
    default: null
  }
})
</script>
<template>
<section class="section profession-overview">
  <div class="profession-overview__container container">
    <div class="profession-overview__info">
    <div class="profession-overview__img">
      <img :src="professionImg" width="400" height="400" alt="Фото професії" loading="lazy">
    </div>
    <div class="profession-overview__content">
      <h1
          v-if="title"
          class="profession-overview__title heading-2"
      >
        {{title}}
      </h1>
      <tags-list
          v-if="tags"
          class="profession-overview__tags"
          add-hashtag :tags-list="tags"
      />
      <div class="profession-overview__description">
        <p v-if="description" class="profession-overview__description-text">
          {{description}}
        </p>
      </div>
      <div class="profession-overview__btns">
<!--        <set-button rounded label="Додати в обране" animation=""/>-->
        <set-button class="subscribe-btn" label="Підписатись на професію"/>
          <bookmark-btn class="bookmark-prof-btn"/>
      </div>
    </div>
    </div>
  </div>
</section>
</template>

<style scoped lang="scss">
@import "@/styles/main.scss";
.profession-overview{
  &__info{
    display: flex;
    align-items: center;
    gap: 30px;
  }
  &__content{
    width: 100%;
    position: relative;
  }
  &__title{
    width: calc(100% - 40px);
    padding-top: 10px;
  }
  &__img{
    max-width: 400px;
    width: 100%;
    max-height: 400px;
    height: 100%;
    overflow: hidden;
    border-radius: $border-radius-large;
  }
  &__tags{
    margin-top: 20px;
  }
  &__description{
    margin-top: 20px;
    &-text:not(:first-child){
      margin-top: 10px;
    }
  }
  &__btns{
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 20px;
  }
}
@media (max-width: 991.98px) {
  .profession-overview{
    &__img{
      max-width: 300px;
      max-height: 300px;
    }
  }
}
@media (max-width: 879.98px) {
  .profession-overview{
    &__info{
      flex-direction: column;
    }
    &__img{
      align-self: start;
      max-width: 400px;
      max-height: 350px;
      order: 1;
      & img {
        height: 350px;
      }
    }
  }
}
@media (max-width: 639.98px) {
  .profession-overview{
    &__img{
      align-self: center;
    }
  }
}
@media (max-width: 479.98px) {
  .profession-overview{
    &__img{
      order: 0;
    }
  }
}
@media (max-width: 374.98px) {
  .profession-overview{
    &__info{
      gap: 15px;
    }
    &__img{
      max-width: 350px;
      max-height: 300px;
    }
    &__btns{
      gap: 8px;
      .subscribe-btn{
        padding-left: 10px;
        padding-right: 10px;
      }
    }
  }
}
</style>