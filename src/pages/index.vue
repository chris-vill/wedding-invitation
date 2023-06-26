<template lang="pug">
div.HomePage
  div.couple
    span Christopher
    span &
    span Mary Joy
  div.when
    span Sat
    span Sep 9, 2023
    span 2:30pm
  div.where
    span Our Lady of Lourdes Parish, Tagaytay City
  div.deadline
    span.inline-bold RSVP
    span on or before
    span.inline-bold August 9, 2023
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "main",
});
</script>

<style lang="sass" scoped>
@use "~/styles/abstracts" as *

.HomePage
  .couple
    +playlist-script(56)
    align-items: center
    color: $purple-dark-20
    display: flex
    flex-direction: column
    margin-bottom: rem(64)

  .when
    +sensa-wild-fill(28)
    color: $purple
    display: flex
    gap: rem(30)
    justify-content: center
    margin-bottom: rem(24)

  .where
    +sensa-wild-fill(18)
    display: flex
    color: $purple
    justify-content: center
    margin-bottom: rem(64)

  .deadline
    align-items: center
    color: $purple
    display: flex
    gap: rem(12)
    justify-content: center

    span:not(.inline-bold)
      +sensa-wild-fill(16)

    .inline-bold
      +sensa-wild-fill(24)
</style>

<!-- 3:30pm -->
