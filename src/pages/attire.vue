<template lang="pug">
div.AttirePage
  div.dress-code
    img(src="/images/dress_code.png")
    span Casual, Semi-formal

  div.color-palette
    span We request our guests to be in any of these colors on our special day (refer to the palette on the right)
    img(src="/images/color_palette.png")
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "main",
});
</script>

<style lang="sass" scoped>
@use "@/styles/abstracts" as *

.AttirePage
  +m-x(rem(8))
  align-items: center
  display: flex
  flex-direction: column
  gap: 4.5rem

  & > div
    +fx
    align-items: center
    gap: 1.5rem

  img
    width: 14rem

  span
    +sensa-wild-fill(20)
    line-height: 120%
    color: $purple
</style>
