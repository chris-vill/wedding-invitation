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
      h2 BEARERS
      span Zane Cullen Abella
      span Zachary Drake Vea
      span Zohan Damien Vea
      h2 MALE SPONSORS
      span Frederich Malabanan
      span Jose Dioquino
      span Jerson Andes
      span Joey Andes
      span Resty Reyes

    div
      h2 FLOWER GIRLS
      span Margaux Sambajon
      span Mavis Riley Villaran
      span Millie Kassidy Anglo
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
  +p-y(2rem, 1rem)
  display: flex
  flex-direction: column
  gap: 2rem

  section
    display: flex
    flex-wrap: wrap
    gap: 2rem
    justify-content: center

    & > div
      align-items: center
      display: flex
      flex-direction: column
      min-width: rem(300)

  h2
    +sensa-wild-fill(28)
    color: $purple
    margin-bottom: 1rem

    &:not(:first-of-type)
      margin-top: 2rem

  span
    +playlist-script(24)
    color: $purple
    display: block

    &:not(:last-of-type)
      margin-bottom: 0.5rem
</style>
