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

  span
    +sensa-wild-fill(28)
</style>
