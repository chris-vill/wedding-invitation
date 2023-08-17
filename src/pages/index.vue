<template lang="pug">
div.HomePage
  p.intro.animated.animation
    | We're Getting
    br
    | Married!
  p.message.animated.animation
    | Dearest family and friends, we'll be more than delighted
    br
    | to have you celebrate with us on our wedding day!
  div.couple.animated.animation
    span Christopher
    span and
    span Mary Joy
  img.divider.animated.animation(src="/images/divider.png")
  div.details.animated.animation
    span.month SEPTEMBER
    span.day SATURDAY
    span.date 09
    span.time 2:30 PM
    span.year 2023
  div.location.animated.animation
    span Ceremony will be held at
    span Our Lady Of Lourdes Parish
    span Silang Junction North, Tagaytay City
  div.location.animated.animation
    span Reception to follow at
    span Aquila Crystal Palace
    span Brgy. Maitim 2nd East, Emilio Aguinaldo Highway, Tagaytay City
  p.verse.animated.animation
    | "When the time is right,
    br
    | I, the Lord will make it happen."
    br
    | ISAIAH 60:22
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

<script lang="ts">
export default {
  head() {
    return {
      title: "journeyTOPHEReverwithMJ",
      meta: [
        { name: "og:title", content: "MJdrivesmeCHRISy" },
        { name: "og:image", content: "/images/logo.png" },
        { name: "og:image:height", content: "200" },
        { name: "og:image:width", content: "200" },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
@use "@/styles/abstracts" as *

.HomePage
  .intro
    +brittany(48)
    text-align: center
    margin-bottom: 48px

  .message
    +dancing-script(16)
    text-align: center
    margin-bottom: 24px

  .message-2
    +dancing-script(16)
    text-align: center
    margin-bottom: 24px

  .couple
    +fx-col
    +breathing(32)
    +m-b(rem(28))
    align-items: center
    color: $purple

    span:nth-child(2)
      +breathing(18)
      line-height: 100%

  .divider
    height: 48px
    margin: 0 auto 1.5rem

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
    margin-bottom: 2.5rem
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
    +dancing-script(24)
    text-align: center

  .animation
    transform: translateY(50%)
    opacity: 0

  .animated
    transition: all 450ms
</style>
