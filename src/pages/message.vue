<template lang="pug">
div.Message
  h1 A Message For You
  img(src="/images/prenup_1.png")
  p
    | We're getting married on the 9th of September 2023 and we will be most grateful for your presence in joining us in our matrimonial celebration!
  p
    | We've created this website as a helpful resource for all the need-to-know details in the lead up to our big day.
  p
    | Have a look around to learn more about our wedding day plans and most importantly, don't forget to RSVP!
  p
    | And finally, we would like to thank you in advance for your love and support for us. We are very much looking forward to celebrate this special day with you.❤️
</template>

<script setup lang="ts">
definePageMeta({
  layout: "main",
});
</script>

<style scoped lang="sass">
@use "@/styles/abstracts" as *

.Message
  +m-x(auto)
  max-width: (rem(480))
  position: relative

  h1
    +m-t(rem(24))
    +playlist-script(38)
    color: $purple
    text-align: center
    position: absolute
    width: rem(180)
    left: 38px//rem(48)
    top: -14px//rem(-8)

  p
    +m-b(rem(24))
    +dancing-script-bold(24)
    color: $purple-dark-40
    text-indent: rem(16)
    text-align: center

  img
    +m-b(rem(16))
</style>
