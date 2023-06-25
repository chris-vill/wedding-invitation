<template lang="pug">
div.AttirePage
  div.dress-code
    img(src="~/assets/images/dress_code.png")
    span Casual, Semi-formal

  div.color-palette
    img(src="~/assets/images/color_palette.png")
    span Shade of Purple/Violet or Gray
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "main",
});
</script>

<style lang="sass" scoped>
@use "~/styles/abstracts" as *

.AttirePage
  align-items: center
  display: flex
  flex-direction: column
  gap: 4.5rem

  & > div
    align-items: center
    display: flex
    flex-direction: column
    gap: 1rem

  img
    width: 17.5rem

  span
    +montserrat-semibold(18)
</style>
