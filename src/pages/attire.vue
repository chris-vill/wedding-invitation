<template lang="pug">
div.AttirePage
  div.dress-code
    img(src="/images/dress_code.png")
    div
      span Casual, Semi-formal
      span Strictly: No slippers or flip-flops, tank tops
      span Please do not wear white, cream, or ivory colors

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
  +m-t(rem(24))
  +m-x(rem(8))
  align-items: center
  display: flex
  flex-direction: column
  gap: 3rem
  position: relative
  z-index: 2

  & > div
    +fx
    align-items: center
    gap: 1.5rem

    &:first-child img
      +w(14rem)

    &:last-child img
      +w(10rem)

  .dress-code div
    +fx-col

  span
    +sensa-wild-fill(20)
    line-height: 140%
    color: $purple
</style>
