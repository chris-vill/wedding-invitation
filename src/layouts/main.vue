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
  height: 100%
  width: 100%
  padding: 4rem 1rem 1rem

+media((tablet, desktop))
  .main-layout
    +p-x(2rem)

.NavBar
  margin: 0 auto 2rem
</style>
