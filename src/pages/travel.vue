<template lang="pug">
div.TravelPage
  header
    h1.animated.animation Travel
    img.animated.animation(src="/images/prenup_2.png")
  
  .location-container
    .location.lourdes.animated.animation
      img(src="/images/lourdes.jpg")
      span Our Lady of Lourdes, Tagaytay
      a(href="https://ul.waze.com/ul?preview_venue_id=79298701.792724867.1431116&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location") Go To Church
    
    .location.aquila.animated.animation
      img(src="/images/aquila.jpg")
      span Aquila Crystal Palace, Tagaytay
      a(href="https://ul.waze.com/ul?preview_venue_id=79298701.792724868.10452740&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location") Go To Reception
    
  //- h3 Own a car? scan the QR codes below
  .qr-container.animated.animation
    .qr-code
      img(src="/images/our-lady-of-lourdes-qr.png")
      span Our Lady of Lourdes, Tagaytay
    .qr-code
      img(src="/images/aquila-crystal-palace-qr.png")
      span Aquila Crystal Palace, Tagaytay
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

.TravelPage
  header
    text-align: center
    +m-b(rem(48))

    h1
      +playlist-script(38)
      +m-b(rem(24))
      color: $purple

    img
      margin: 0 auto
      filter: drop-shadow(0 0 10px rgba($dark, 0.5))

      +media(mobile)
        max-width: rem(320)

      +media((tablet, desktop))
        max-width: rem(480)

  h3
    +sensa-wild-fill(22)
    display: none
    color: $purple-dark-20
    text-align: center
    margin-bottom: rem(48)

  .location-container
    +fx
    justify-content: center
    flex-wrap: wrap
    gap: rem(68)

  .location
    +fx-col
    align-items: center
    gap: rem(16)

    *
      display: block

    img
      border-radius: rem(16)
      box-shadow: 0 0 10px rgba($dark, 0.5)

    span
      +playlist-script(24)
      color: $purple-dark-20

    a
      border-radius: rem(8)
      background-color: $purple-light-20
      padding: rem(8) rem(16)
      color: $light

      &:visited
        color: $light

  .lourdes img
    max-width: rem(320)

  .aquila img
    max-height: rem(295)

  .qr-container
    align-items: center
    display: none
    flex-wrap: wrap
    gap: rem(96)
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

  .animation
    transform: translateY(50%)
    opacity: 0

  .animated
    transition: all 450ms

  +media((mobile, tablet))
    .aquila img
      max-width: rem(320)

  +media(desktop)
    h3
      display: block

    .location-container
      display: none

    .qr-container
      +fx
</style>
