<template lang="pug">
//- 1 2 3 2
div.MainLayout
  NavBar
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
  padding: 2.5rem 1rem
  position: relative
  width: 100%

  .NavBar
    justify-content: center
    margin: 0 auto
    width: 100%

  .content-wrapper
    margin: auto
    overflow-y: scroll

+media((tablet, desktop))
  .MainLayout
    +p-x(2rem)
</style>
