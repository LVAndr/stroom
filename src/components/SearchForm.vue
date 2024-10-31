<script setup>
const props = defineProps({
  placeholder: {
    type: String,
    default: 'Пошук',
  }
})
</script>

<template>
  <div class="search-form">
    <input
        lang="uk"
        class="search-form__input"
        :placeholder="placeholder"
        type="text"
        name="searchProfession"
        id=""
    >
    <button
        class="search-form__input-btn"
        type="submit"
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.136 14.9972C12.8155 16.1214 11.1038 16.7998 9.23366 16.7998C5.0547 16.7998 1.66699 13.4121 1.66699 9.23317C1.66699 5.05422 5.0547 1.6665 9.23366 1.6665C13.4126 1.6665 16.8003 5.05422 16.8003 9.23317C16.8003 11.092 16.1301 12.7943 15.018 14.1115L18.65 17.7435L17.7662 18.6274L14.136 14.9972ZM15.5503 9.23317C15.5503 12.7218 12.7223 15.5498 9.23366 15.5498C5.74506 15.5498 2.91699 12.7218 2.91699 9.23317C2.91699 5.74457 5.74506 2.9165 9.23366 2.9165C12.7223 2.9165 15.5503 5.74457 15.5503 9.23317Z" fill="currentFill"/>
      </svg>
    </button>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/main.scss";
.search-form{
  padding: 4px 4px 4px 20px;
  display: inline-flex;
  align-items: center;
  position: relative;
  width: 100%;
  min-width: 200px;
  border: 1px solid $dark-jungle-green-opacity20;
  border-radius: $border-radius-small;
  background-color: transparent;
  overflow: hidden;
  &__input{
    width: 100%;
    border: none;
    font-family: inherit;
    letter-spacing: 0.05em;
    font-size: 14px;
    line-height: 1;
    font-weight: 400;
    background-color: transparent;
    color: $dark-jungle-green-opacity;
    outline: none;
    overflow: visible;
  }
  &__input-btn{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    background-color: transparent;
    margin-left: 4px;
    & svg{
      fill: $dark-jungle-green;
      transition: fill .3s ease;
    }
    &:hover svg{
      fill: $dark-jungle-green-opacity;
    }
  }
}
</style>