<template lang="pug">
div.Gallery
  img(v-for="imageCount in images" :src="'/images/mosaic/prenup_' + imageCount + '.jpg'")
</template>

<script setup lang="ts">
const images = [...Array(55)].map((x, i) => i + 1);
</script>

<style scoped lang="sass">
@use "@/styles/abstracts" as *

.Gallery
  +fx
  flex-wrap: wrap
  gap: 16px
  height: 100%

  +media(mobile)
    img
      height: 188px
      object-fit: contain
      width: 178px
</style>
