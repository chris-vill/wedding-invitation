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
  +fx-col
  gap: 42px
  justify-content: center

  +media(mobile)
    img
      object-fit: contain
      width: 320px
</style>
