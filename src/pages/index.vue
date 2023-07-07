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
  span.std Save The Date!
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
    width: rem(400)

  .details
    +fx
    +m-b(rem(52))
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

  .std
    +breathing(32)
    color: $purple
    display: block
    margin: 0 auto
    text-align: center
    width: fit-content
</style>

<!-- 3:30pm -->
