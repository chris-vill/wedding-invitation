<template lang="pug">
div.EntouragePage
  h1.animated.animation Entourage

  section.priest.animated.animation
    h2 Officiating Priest
    span Fr. Allen De Guzman

  section.parents.animated.animation
    div
      h2 Parents of the Groom
      span Mr. Roberto Villaran
      span Mrs. Aida Villaran
    div
      h2 Parents of the Bride
      span Mr. Sammy Sambajon
      span Mrs. Myrna Sambajon

  section.guidance.animated.animation
    header
      h2 Bearer of Guidance
      h3 (Godparents)
    div.col-2
      div
        span Mr. Frederick Malabanan
        span Mrs. Myra Ganaden
      div
        span Mr. Jose Dioquino
        span Mrs. Eden Anglo
      div
        span Mr. Ronnie Bersola
        span Mrs. Maria Nonica Bersola
      div
        span Mr. Jose Andes
        span Mrs. Joana Pintac
      div
        span Mr. Jerson Andes
        span Mrs. Lea Cagabhion
      div
        span Mr. Romulo Sison Jr.
        span Mrs. Arliza Villarosa

  section.best-honor.animated.animation
    div
      h2 BEST MAN
      span Mark Jeanbert Nabong

    div
      h2 MAID OF HONOR
      span Melanie Sambajon

  section.blessings.animated.animation
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

  section.companion.animated.animation
    div
      h2 GROOMS MEN
      span Kelvin Matthew Bersola
      span Dave Argene Ragasa
      span Eiron Mavrick Ganaden
      span Gabriel Paolo Valledor

    div
      h2 BRIDESMAIDS
      span Ashley Gabrielle Villaran
      span Marjorie Andes
      span Ma. Sarah Jane Paguirigan
      span Hazel Joy Tabisola

  section.kids.animated.animation
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
    div.col-1
      h3 FLOWER GIRLS
      span Margaux Sambajon
      span Mavis Riley Villaran
      span Millie Kassidy Anglo
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "main",
});

onMounted(() => {
  // Animate Intro
  const animatedEls = document.querySelectorAll(".animated");
  animatedEls.forEach((animatedEl, i) => {
    setTimeout(() => {
      animatedEl.classList.remove("animation");
    }, 150 * (1 + i));
  });
});

onBeforeUnmount(() => {
  // Animate Outro
  const animatedEls = document.querySelectorAll(".animated");
  animatedEls.forEach((animatedEl, i) => {
    setTimeout(() => {
      animatedEl.classList.add("animation");
    }, 150 * (1 + i));
  });
});
</script>

<style lang="sass" scoped>
@use "@/styles/abstracts" as *

.EntouragePage
  +fx-col
  gap: rem(42)
  align-items: center

  h1
    +playlist-script(38)
    color: $purple

  h2
    +sensa-wild-fill(18)
    color: $purple-dark-20

  h3
    +sensa-wild-fill(16)
    color: $purple-dark-20

  span
    +playlist-script(16)
    color: $purple-dark-40
    display: block

    &:not(:last-child)
      +m-b(rem(8))

  header
    text-align: center

  section
    width: 100%

  .priest
    text-align: center

    h2
      +m-b(rem(8))

  .guidance
    header
      +m-b(rem(14))

    h2
      +m-b(rem(8))
      text-align: center

    .col-2
      +fx-col

      div
        +fx
        gap: rem(24)
        justify-content: center

        span
          flex-basis: 100%

          &:first-child
            text-align: right

          &:last-child
            text-align: left

  .best-honor, .companion, .parents
    +fx
    gap: rem(24)

    h2
      +m-b(rem(14))

    div
      flex-basis: 100%

    div:first-child
      text-align: right

  .blessings
    h2, h3, span
      text-align: center

    h2
      +m-b(rem(20))

    h3
      +m-b(rem(8))

    .col-3
      +fx-col
      gap: rem(20)

      div
        flex-basis: 100%

  .kids
    h2
      text-align: center
      +m-b(rem(20))

    h3
      +m-b(rem(8))

    div
      text-align: center

    .col-3
      +fx-col
      +m-b(rem(20))
      gap: rem(20)

      div
        flex-basis: 100%

  .animation
    transform: translateY(50%)
    opacity: 0

  .animated
    transition: all 450ms

  +media((tablet, desktop))
    .kids, .blessings
      .col-3
        +fx-dir-row
        gap: rem(36)
        justify-content: center

        div
          max-width: rem(180)
</style>
