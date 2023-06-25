<template lang="pug">
div.main-layout
  NavBar
  div.content-wrapper
    slot
</template>

<script setup></script>

<style lang="sass" scoped>
@use "~/styles/abstracts" as *

.main-layout
  display: flex
  flex-direction: column
  height: 100%
  padding: 4rem 1rem 1rem
  width: 100%

  .NavBar
    margin: 0 auto 2rem
    width: 100%

  .content-wrapper
    margin: auto

+media((tablet, desktop))
  .main-layout
    +p-x(2rem)
</style>
