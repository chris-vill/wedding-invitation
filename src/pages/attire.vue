<template lang="pug">
div.AttirePage
  header
    h1.animated.animation Attire Guide
    img.animated.animation(src="/images/prenup_5.png")
    span.animated.animation We hope our wedding will be a fun excuse for you to dress up and be fab! 😉

  div.instruction.dress-code.animated.animation
    img.illustration(src="/images/dress_code.png")
    div
      span Casual, Semi-formal
      span Strictly: No slippers / flip-flops and tank tops
      span Please do not wear white, cream, or ivory colors

  div.instruction.color-palette.animated.animation
    span We request our guests to be in any of these colors on our special day <br> (refer to the palette on the right)
    img.illustration(src="/images/color_palette.png")
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "main",
});

onMounted(() => {
  // Animate Intro
  const animatedEls = document.querySelectorAll(".animated");
  animatedEls.forEach((animatedEl, i) => {
    setTimeout(() => {
      animatedEl.classList.remove("animation");
    }, 150 * (1 + i));
  });
});

onBeforeUnmount(() => {
  // Animate Outro
  const animatedEls = document.querySelectorAll(".animated");
  animatedEls.forEach((animatedEl, i) => {
    setTimeout(() => {
      animatedEl.classList.add("animation");
    }, 150 * (1 + i));
  });
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

  header
    +fx-col
    text-align: center
    gap: rem(18)

    h1
      +playlist-script(38)
      color: $purple

    span
      +dancing-script-bold(22)
      color: $purple-dark-20

  .instruction
    +fx
    align-items: center
    gap: 1.5rem

    span
      +sensa-wild-fill-bold(20)
      line-height: 140%
      color: $purple-dark-40
      text-align: center

  .illustration
    +w(8.5rem)

  .dress-code div
    +fx-col
    gap: rem(8)

  .animation
    transform: translateY(50%)
    opacity: 0

  .animated
    transition: all 450ms

  +media((tablet, desktop))
    header
      align-items: center

    img
      max-width: 48rem
</style>
