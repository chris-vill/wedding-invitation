<template lang="pug">
div.HomePage
  p.quote IN GOD'S PERFECT TIME AND WITH THE BLESSING OF OUR PARENTS
  span.main-delimeter WE,
  div.couple
    span.groom Christopher
    span.couple-delimiter and
    span.bride Mary Joy
  span.request REQUEST THE HONOR OF YOUR PRESENCE AS WE EXCHANGE OUR WEDDING VOWS ON
  div.details
    span.month SEPTEMBER
    span.day SATURDAY
    span.date 09
    span.time 2:30 PM
    span.year 2023
  div.location
    span Ceremony will be held at
    span Our Lady Of Lourdes Parish
    span Tagaytay City
  div.location
    span Reception to follow at
    span Aquila Crystal Palace
    span Brgy. Maitim 2nd East, Emilio Aguinaldo Highway, Tagaytay City
  p.verse "When the time is right, I, the Lord will make it happen." ISAIAH 60:22
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "main",
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
    width: rem(200)

  .main-delimeter
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
    max-width: rem(400)

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
    span:last-child
      +lora(16)

  .verse
    +porcelain(18)
    text-align: center
</style>
