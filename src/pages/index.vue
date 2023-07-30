<template lang="pug">
div.HomePage
  p.quote.animated.animation IN GOD'S PERFECT TIME AND WITH THE BLESSING OF OUR PARENTS
  span.main-delimeter.animated.animation WE,
  div.couple.animated.animation
    span.groom Christopher
    span.couple-delimiter and
    span.bride Mary Joy
  span.request.animated.animation REQUEST THE HONOR OF YOUR PRESENCE AS WE EXCHANGE OUR WEDDING VOWS ON
  div.details.animated.animation
    span.month SEPTEMBER
    span.day SATURDAY
    span.date 09
    span.time 2:30 PM
    span.year 2023
  div.location.animated.animation
    span Ceremony will be held at
    span Our Lady Of Lourdes Parish
    span Tagaytay City
  div.location.animated.animation
    span Reception to follow at
    span Aquila Crystal Palace
    span Brgy. Maitim 2nd East, Emilio Aguinaldo Highway, Tagaytay City
  p.verse.animated.animation "When the time is right, I, the Lord will make it happen." ISAIAH 60:22
</template>

<script lang="ts" setup>
const route = useRoute();

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

.HomePage
  .quote
    +lora(16)
    display: block
    margin: 0 auto
    text-align: center
    width: rem(190)

  .main-delimeter
    +lora(16)
    display: block
    margin: rem(32) auto
    text-align: center
    width: rem(30)

  .couple
    +fx-col
    +breathing(32)
    +m-b(rem(32))
    align-items: center
    color: $purple

  .request
    +lora(16)
    +m-b(rem(24))
    +m-x(auto)
    display: block
    text-align: center
    width: rem(320)

  .details
    +fx
    +m-b(rem(32))
    align-items: center
    flex-wrap: wrap
    justify-content: center
    text-align: center

    *
      height: fit-content

  .date
    +montserrat-semibold(24)
    +m-y(rem(28))
    color: $purple
    flex-basis: rem(110)

  .month, .year
    +montserrat-bold(18)
    color: $purple
    flex-basis: 100%

  .day, .time
    +montserrat-medium(16)
    +border-y(rem(1) solid $purple)
    +p-y(rem(8))
    flex-basis: rem(120)

  .location
    +fx-col
    align-items: center
    margin-bottom: rem(48)
    text-align: center

    span:first-child
      +breathing(14)

    span:nth-child(2)
      +lovelo-black(24)
      +m-y(rem(8))
      color: $purple

    span:last-child
      +lora(16)

  .verse
    +porcelain(18)
    text-align: center

  .animation
    transform: translateY(50%)
    opacity: 0

  .animated
    transition: all 450ms
</style>
