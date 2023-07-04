<template lang="pug">
div.MainLayout
  img.corner-image(src="/images/flowers-2.png")
  img.corner-image(src="/images/flowers-3.png")
  NavBar
  div.content-wrapper
    slot
    img.logo(src="/images/logo.png")
</template>

<script setup lang="ts"></script>

<style lang="sass" scoped>
@use "@/styles/abstracts" as *

.MainLayout
  display: flex
  flex-direction: column
  height: 100%
  padding: 2.5rem 1.5rem
  position: relative
  width: 100%

  .content-wrapper
    +p-x(rem(18))
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
    +m-t(rem(40))
    +m-x(auto)
    width: rem(100)

+media((tablet, desktop))
  .MainLayout
    +p-x(2rem)
</style>
