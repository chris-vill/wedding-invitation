<template lang="pug">
div.GalleryPage
  span this section is Under Construction
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

  & > span
    +sensa-wild-fill(28)
</style>
