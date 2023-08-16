<!--
  main: 6016 x 4016
  pieces: 859.42 x 573.71
-->

<template lang="pug">
div.GalleryPage
  img.mosaic(src="/images/mosaic/main.png")
  //- div.mosaic-sprite
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "main",
});
</script>

<style lang="sass" scoped>
@use "@/styles/abstracts" as *

.GalleryPage
  align-items: center
  display: flex
  flex-direction: column
  gap: rem(32)
  height: 100%
  width: 100%
  justify-content: center
  text-align: center

  .mosaic-sprite
    width: 200px
    height: 120px
    background: url(/images/mosaic/main.png) 20px 20px

  & > span
    +sensa-wild-fill(28)

  +media(mobile)
    // 376 x 251
    .mosaic
      height: 15.688rem
      width: 23.5rem
</style>
