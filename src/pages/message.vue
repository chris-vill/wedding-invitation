<template lang="pug">
div.Message
  h2 A Message For You
  p
    | We're getting married on 9th of September 2023 and we'd be most grateful for your presence in joining us in our matrimonial celebration!
  p
    | We've created this website as a helpful resource for all the need-to-know details in the lead up to your big day.
  p
    | Have a look around to learn more about our wedding day plans and most importantly, don't forget to RSVP!
  p
    | And finally, we would like to thank you in advance for your love and support for us. We are very much looking forward to celebrate this special day with you.
</template>

<script setup lang="ts">
definePageMeta({
  layout: "main",
});
</script>

<style scoped lang="sass">
@use "@/styles/abstracts" as *

.Message
  +m-t(rem(24))
  +m-x(rem(26))

  h2
    +m-b(rem(24))
    +sensa-wild-fill(32)
    color: $purple-dark-20
    text-align: center

  p
    +m-b(rem(20))
    +dancing-script-bold(24)
    color: $purple-dark-20
    text-indent: rem(16)
    text-align: center
</style>
