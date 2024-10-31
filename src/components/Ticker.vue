<script setup>
import ainImg from '@/assets/home-ticker-img/ain.svg'
import spekaImg from '@/assets/home-ticker-img/speka.svg'
import vectorImg from '@/assets/home-ticker-img/vector.svg'
import hiTechExpImg from '@/assets/home-ticker-img/hiTechExpert.svg'
import seniorImg from '@/assets/home-ticker-img/senior-ua.svg'
</script>

<template>
  <div class="ticker">
    <div class="ticker__wrapper">
      <div class="ticker__item">
        <div class="ticker__img">
          <img :src="ainImg" height="40" width="auto" alt="Іконка ресурсів що згадує Струм">
        </div>
      </div>

      <div class="ticker__item">
        <div class="ticker__img">
          <img :src="spekaImg" height="40" width="auto" alt="Іконка ресурсів що згадує Струм">
        </div>
      </div>

      <div class="ticker__item">
        <div class="ticker__img">
          <img :src="vectorImg" height="40" width="auto" alt="Іконка ресурсів що згадує Струм">
        </div>
      </div>

      <div class="ticker__item">
        <div class="ticker__img">
          <img :src="hiTechExpImg" height="40" width="auto" alt="Іконка ресурсів що згадує Струм">
        </div>
      </div>

      <div class="ticker__item">
        <div class="ticker__img">
          <img :src="seniorImg" height="40" width="auto" alt="Іконка ресурсів що згадує Струм">
        </div>
      </div>

      <div class="ticker__item">
        <div class="ticker__img">
          <img :src="ainImg" height="40" width="auto" alt="Іконка ресурсів що згадує Струм">
        </div>
      </div>

      <div class="ticker__item">
        <div class="ticker__img">
          <img :src="spekaImg" height="40" width="auto" alt="Іконка ресурсів що згадує Струм">
        </div>
      </div>

      <div class="ticker__item">
        <div class="ticker__img">
          <img :src="vectorImg" height="40" width="auto" alt="Іконка ресурсів що згадує Струм">
        </div>
      </div>

      <div class="ticker__item">
        <div class="ticker__img">
          <img :src="hiTechExpImg" height="40" width="auto" alt="Іконка ресурсів що згадує Струм">
        </div>
      </div>

      <div class="ticker__item">
        <div class="ticker__img">
          <img :src="seniorImg" height="40" width="auto" alt="Іконка ресурсів що згадує Струм">
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped lang="scss">
.ticker{
  margin-top: 30px;
  position: relative;
  overflow: hidden;
  cursor: grab;
  display: flex;
  &__wrapper{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    min-width: 100%;
    animation: ticker 12s linear infinite;
  }
  &__item{
    display: inline-block;
    padding: 0 97px;
  }
  &__img{
    display: inline-block;
  }
}
@keyframes ticker {
  0%{
    transform: translateZ(0);
  }
  100%{
    transform: translate3d(-50%, 0, 0);
  }
}
@media (max-width: 991.98px) {
  .ticker{
    &__item{
      padding: 0 55px;
    }
  }
}
@media (max-width: 767.98px) {
  .ticker{
    &__item{
      padding: 0 45px;
    }
  }
}
@media (max-width: 479.98px) {
  .ticker{
    &__item{
      padding: 0 30px;
    }
    &__img>img{
      height: 30px;
    }
  }
}
</style>