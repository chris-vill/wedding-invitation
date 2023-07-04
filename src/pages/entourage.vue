<template lang="pug">
div.EntouragePage
  h1 Entourage

  section.guidance
    header
      h2 Bearer of Guidance
      h3 (Godparents)
    div.col-2
      div
        span Mr. Frederich Malabanan
        span Mr. Jose Dioquino
        span Mr. Ronnie Bersola
        span Mr. Jose Andes
        span Mr. Jerson Andes
        span Mr. Romulo Sison Jr.
      div
        span Mrs. Myra Ganaden
        span Mrs. Lea Cagabhion
        span Mrs. Maria Nonica Bersola
        span Mrs. Joana Pintac
        span Mrs. Eden Anglo
        span Mrs. Arliza Villarosa

  section.col-2
    div
      h2 BEST MAN
      span Mark Jeanbert Nabong

    div
      h2 MAID OF HONOR
      span Melanie Sambajon

  section.blessings
    header
      h2 Bearer of Blessings
    div.col-3
      div
        h3 To Light Our Path
        span Gody Torres Jr.
        span Jonah Marie Torres
      div
        h3 To Clothe Us As One
        span Jerwin Almazan
        span Racel Almazan
      div
        h3 To Bind Us Together
        span Charles Klient Anglo
        span Mikee Ann Anglo

  section.col-2
    div
      h2 GROOMS MEN
      span Kelvin Bersola
      span Dave Argene Ragasa
      span Mavrick Ganaden
      span Gabriel Paolo Valledor

    div
      h2 BRIDESMAIDS
      span Ashley Gabrielle Villaran
      span Hazel Joy Tabisola
      span Ma. Sarah Jane Paguirigan
      span Marjorie Andes

  section.kids
    div
      h2
        | To Carry Our Symbols Of Love
        br
        | & To Sweeten Our Journey

      div.col-3
        div
          h3 Bearer of Coins
          span Zachary Drake Vea
        div
          h3 Bearer of Rings
          span Zohan Damien Vea
        div
          h3 Bearer of the Bible
          span Zane Cullen Abella
      div
        h3 FLOWER GIRLS
        span Margaux Sambajon
        span Mavis Riley Villaran
        span Millie Kassidy Anglo
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "main",
});
</script>

<style lang="sass" scoped>
@use "@/styles/abstracts" as *

.EntouragePage
  +fx-col
  gap: rem(42)
  align-items: center

  h1
    +sensa-wild-fill(32)
    color: $purple

  h2
    +sensa-wild-fill(24)
    +m-b(rem(16))
    color: $purple-dark-20

  h3
    +sensa-wild-fill(18)
    +m-b(rem(12))
    color: $purple-dark-20

  header
    +m-b(rem(18))
    text-align: center

  .blessings h2
    text-align: center

  .kids
    h2
      text-align: center

    div:last-child
      text-align: center

    .col-3
      +m-b(rem(16))

  .col-2
    +fx
    gap: rem(32)

    div:first-child
      text-align: right

  .col-3
    +fx
    gap: rem(8)
    text-align: center

  span
    +playlist-script(18)
    color: $purple-dark-40
    display: block

    &:not(:last-child)
      +m-b(rem(8))

  +media((tablet, desktop))
    .col-3
      gap: rem(36)
</style>
