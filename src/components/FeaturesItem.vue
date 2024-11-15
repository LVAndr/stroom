<script setup>
const props = defineProps({
  title:{
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
})
</script>

<template>
  <li
      v-if="title || text"
      class="item"
  >
    <div class="item__icon">
      <svg width="88" height="30" viewBox="0 0 88 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_248_708)">
          <path d="M80.5 22C84.6421 22 88 18.6421 88 14.5C88 10.3579 84.6421 7 80.5 7C76.3579 7 73 10.3579 73 14.5C73 18.6421 76.3579 22 80.5 22Z" fill="white"/>
          <path d="M50.5332 6.29197L40.3624 0.45228C38.1392 -0.825342 35.3648 0.771686 35.3648 3.3209V8.37112C35.3648 10.2032 33.8746 11.6857 32.033 11.6857H3.33173C1.49019 11.6857 0 13.1682 0 15.0003C0 16.8324 1.49019 18.3149 3.33173 18.3149H32.033C33.8746 18.3149 35.3648 19.7974 35.3648 21.6295V26.6797C35.3648 29.2289 38.1392 30.8259 40.3624 29.5483L50.5272 23.7086L60.6919 17.8689C62.9151 16.5913 62.9151 13.4033 60.6919 12.1256L50.5272 6.28595L50.5332 6.29197Z" fill="#E2FC52"/>
        </g>
        <defs>
          <clipPath id="clip0_248_708">
            <rect width="88" height="30" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </div>
    <h3 class="item__title heading-3-light">{{title}}</h3>
    <p class="item__text">{{text}}</p>
  </li>
</template>

<style scoped lang="scss">
.item{
  padding-top: 5px;
  padding-bottom: 5px;
  &__icon{
    display: inline-block;
  }
  &__title{
    margin-top: 20px;
  }
  &__text{
    margin-top: 10px;
  }
}
@media (max-width: 767.98px) {
  .item{
    &__icon>svg{
      width: 60px;
      height: auto;
    }
  }
}
@media (max-width: 479.98px) {
  .item{
    &__title{
      margin-top: 15px;
    }
    &__icon>svg{
      width: 50px;
      height: auto;
    }
  }
}
@media (max-width: 374.98px) {
  .item{
    &__title{
      margin-top: 10px;
    }
    &__text{
      margin-top: 5px;
    }
    &__icon>svg{
      width: 35px;
      height: auto;
    }
  }
}
</style>