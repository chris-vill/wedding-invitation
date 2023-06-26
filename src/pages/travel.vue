<template lang="pug">
div.TravelPage
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
  +p-y(rem(48), rem(48))

  h3
    +sensa-wild-fill(22)
    color: $purple-dark-20
    text-align: center
    margin-bottom: rem(38)

  .qr-container
    align-items: center
    display: flex
    flex-wrap: wrap
    gap: rem(38)
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
</style>
