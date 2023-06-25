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
    +montserrat-32
    +m-y(3.375rem)
    align-items: center
    color: $purple-dark-20
    display: flex
    flex-direction: column

  .when
    +montserrat-18
    color: $dark
    display: flex
    gap: 1.875rem
    justify-content: center
    margin-bottom: 0.75rem

  .where
    +montserrat-12
    display: flex
    color: $dark
    justify-content: center
    margin-bottom: 1rem

  .deadline
    align-items: center
    color: $dark
    display: flex
    flex-direction: column
    gap: 0.25rem

    span:first-child
      +montserrat-12

    span:last-child
      +montserrat-14-bold
</style>

<!-- 3:30pm -->
