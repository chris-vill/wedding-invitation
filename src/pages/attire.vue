<template lang="pug">
div.AttirePage
  div.dress-code
    img.illustration(src="/images/dress_code.png")
    div
      span Casual, Semi-formal
      span Strictly: No slippers or flip-flops, tank tops
      span Please do not wear white, cream, or ivory colors

  div.color-palette
    span We request our guests to be in any of these colors on our special day (refer to the palette on the right)
    img.illustration(src="/images/color_palette.png")

  img.logo(src="/images/logo.png")
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "main",
});
</script>

<style lang="sass" scoped>
@use "@/styles/abstracts" as *

.AttirePage
  align-items: center
  display: flex
  flex-direction: column
  gap: 2.5rem
  position: relative
  z-index: 2

  & > div
    +fx
    align-items: center
    gap: 1.5rem

  .illustration
    +w(8.5rem)

  .dress-code div
    +fx-col
    gap: rem(8)

  span
    +sensa-wild-fill-bold(20)
    line-height: 140%
    color: $purple
    text-align: center

  .logo
    width: rem(100)
    margin: 0 auto
</style>
