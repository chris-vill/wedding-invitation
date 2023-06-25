<template lang="pug">
div.HomePage
  div.couple
    span Christopher
    span &
    span Mary Joy
  div.when
    span Sat
    span Sep 9, 2023
    span 3pm
  div.where
    span Our Lady of Lourdes Parish, Tagaytay City
  div.deadline
    span RSVP on or before
    span July 9
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
    margin-bottom: rem(54)

  .when
    +sensa-wild-fill(28)
    color: $dark
    display: flex
    gap: rem(30)
    justify-content: center
    margin-bottom: rem(24)

  .where
    +sensa-wild-fill(20)
    display: flex
    color: $dark
    justify-content: center
    margin-bottom: rem(24)

  .deadline
    align-items: center
    color: $dark
    display: flex
    flex-direction: column
    gap: rem(12)

    span:first-child
      +sensa-wild-fill(18)

    span:last-child
      +sensa-wild-fill(20)
</style>

<!-- 3:30pm -->
