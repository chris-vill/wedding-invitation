<template lang="pug">
div.EntouragePage
  section
    div
      h2 BEST MAN
      span Mark Jeanbert Nabong
      h2 GROOMS MEN
      span Charles Klient Anglo
      span Kelvin Bersola
      span Gody Torres Jr.
      span Dave Argene Ragasa
      span Jerwin Almazan
      span Mavrick Ganaden
      span Gabriel Paolo Valledor

    div
      h2 MAID OF HONOR
      span Melanie Sambajon
      h2 BRIDESMAIDS
      span Mikee Ann Anglo
      span Ashley Gabrielle Villaran
      span Jonah Marie Torres
      span Hazel Joy Tabisola
      span Racel Almazan
      span Sarah Jane Paguirigan
      span Marjorie Andes

  section
    div
      div
        h2 BEARERS
        span Zane Cullen Abella
        span Zachary Drake Vea
        span Zohan Damien Vea
      div
        h2 FLOWER GIRLS
        span Margaux Sambajon
        span Mavis Riley Villaran
        span Millie Kassidy Anglo

    div
      div
        h2 MALE SPONSORS
        span Frederich Malabanan
        span Jose Dioquino
        span Jerson Andes
        span Joey Andes
        span Resty Reyes
      div
        h2 FEMALE SPONSORS
        span Maria Nonica Bersola
        span Arliza Villarosa
        span Gemma Ajero
        span Rachelle Malabanan
        span Lea Cagabhion
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "main",
});
</script>

<style lang="sass" scoped>
@use "@/styles/abstracts" as *

.EntouragePage
  +p-y(rem(32), rem(16))
  +fx-col
  gap: rem(32)

  section:first-child
    +fx
    flex-wrap: wrap
    gap: rem(32)
    justify-content: center

    & > div
      +fx-col
      align-items: center
      min-width: rem(300)

  section:last-child
    +fx-col
    gap: rem(32)

    & > div
      +fx
      justify-content: center
      gap: rem(32)
      flex-wrap: wrap

      & > div
        +fx-col
        align-items: center
        min-width: rem(300)

  h2
    +sensa-wild-fill(28)
    color: $purple-dark-20
    margin-bottom: rem(16)

    &:not(:first-of-type)
      margin-top: rem(32)

  span
    +playlist-script(24)
    color: $purple
    display: block

    &:not(:last-of-type)
      margin-bottom: rem(8)
</style>
