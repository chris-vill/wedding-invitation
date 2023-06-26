<template lang="pug">
//- 1 2 3 2
div.MainLayout
  NavBar
  img(src="@/assets/images/background.png")
  img(src="@/assets/images/dress_code.png")
  div.content-wrapper
    slot
</template>

<script setup></script>

<style lang="sass" scoped>
@use "@/styles/abstracts" as *

.MainLayout
  display: flex
  flex-direction: column
  height: 100%
  padding: 4rem 1rem 1rem
  position: relative
  width: 100%

  .NavBar
    justify-content: center
    margin: 0 auto
    width: 100%

  .content-wrapper
    margin: auto

+media((tablet, desktop))
  .MainLayout
    +p-x(2rem)
</style>
