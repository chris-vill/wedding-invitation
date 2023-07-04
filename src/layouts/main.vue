<template lang="pug">
div.MainLayout
  img.corner-image(src="/images/flowers-2.png")
  img.corner-image(src="/images/flowers-3.png")
  NavBar
  div.content-wrapper
    slot
    img.logo(src="/images/logo.png")
audio(autoplay loop src="/audio/wedding-themed-music.mp3")
</template>

<script setup lang="ts">
document?.querySelector("audio")?.play();
</script>

<style lang="sass" scoped>
@use "@/styles/abstracts" as *

.MainLayout
  +p-x(rem(40), rem(18))
  display: flex
  flex-direction: column
  height: 100%
  padding: 2.5rem 1.5rem
  position: relative
  width: 100%

  .content-wrapper
    +fx-col
    +p-y(rem(40))
    overflow: scroll
    height: 100%
    width: 100%

  .corner-image
    +pos-abs
    opacity: 0.6

    &:first-of-type
      +w(rem(186))
      bottom: -72px
      left: 24px
      transform: rotateY(180deg) rotate(270deg)

    &:nth-of-type(2)
      +w(rem(229))
      transform: rotate(270deg)
      bottom: -62px
      right: -14px

  .NavBar
    justify-content: center
    margin: 0 auto
    width: 100%
    z-index: 2

  .logo
    +m-t(auto)
    +m-x(auto)
    +p-t(rem(40))
    width: rem(160)

+media((tablet, desktop))
  .MainLayout
    +p-x(2rem)
</style>
