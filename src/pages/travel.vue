<template lang="pug">
div.TravelPage
  header
    h1 Travel
  
  div.mobile
    a(href="https://www.waze.com/live-map/directions?to=place.w.79298701.792724867.1431116") Go To Church
  
  h3 Own a car? scan the QR codes below
  div.qr-container
    div.qr-code
      img(src="/images/our-lady-of-lourdes-qr.png")
      span Our Lady of Lourdes, Tagaytay
    div.qr-code
      img(src="/images/aquila-crystal-palace-qr.png")
      span Aquila Crystal Palace, Tagaytay
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "main",
});
</script>

<style lang="sass" scoped>
@use "@/styles/abstracts" as *

.TravelPage
  header
    text-align: center
    +m-b(rem(32))

    h1
      +playlist-script(38)
      color: $purple

  h3
    +sensa-wild-fill(22)
    display: none
    color: $purple-dark-20
    text-align: center
    margin-bottom: rem(38)

  // .mobile
  //   a
  //     height: 32px
  //     width: 82px

  .qr-container
    align-items: center
    display: none
    flex-wrap: wrap
    gap: rem(48)
    justify-content: center

  .qr-code
    +playlist-script(26)
    align-items: center
    color: $purple
    display: flex
    flex-direction: column
    gap: rem(16)

    img
      height: rem(256)
      width: rem(256)

  +media((tablet, desktop))
    h3
      display: block

    .mobile
      display: none

    .qr-container
      +fx
</style>
