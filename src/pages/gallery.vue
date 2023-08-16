<!--
  main: 6016 x 4016
  pieces: 859.42 x 573.71
-->

<template lang="pug">
div.GalleryPage
  Gallery
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
  width: 100%
  justify-content: center
  text-align: center

  & > span
    +sensa-wild-fill(28)
</style>
