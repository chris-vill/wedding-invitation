<template lang="pug">
div.GalleryPage
  Icon(name="screwdriver-wrench")
  span Underconstruction
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

  :deep(.Icon)
    height: rem(64)
    width: rem(64)

    path
      height: rem(64)
      width: rem(64)
      fill: $purple-dark-20

  span
    +sensa-wild-fill(28)
</style>
