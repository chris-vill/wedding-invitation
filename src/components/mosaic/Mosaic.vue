<template lang="pug">
div.Mosaic
  MosaicPiece(piece-number="1")
  MosaicPiece(piece-number="2")
  MosaicPiece(piece-number="3")
  MosaicPiece(piece-number="4")
  MosaicPiece(piece-number="5")
  MosaicPiece(piece-number="6")
  MosaicPiece(piece-number="7")
  MosaicPiece(piece-number="8")
  MosaicPiece(piece-number="9")
  MosaicPiece(piece-number="10")
  MosaicPiece(piece-number="11")
  MosaicPiece(piece-number="12")

  MosaicPiece(piece-number="14")
  MosaicPiece(piece-number="15")
  MosaicPiece(piece-number="16")
  MosaicPiece(piece-number="17")

  MosaicPiece(piece-number="19")
  MosaicPiece(piece-number="20")

  MosaicPiece(piece-number="22")
  MosaicPiece(piece-number="23")
  MosaicPiece(piece-number="24")
  MosaicPiece(piece-number="25")
  MosaicPiece(piece-number="26")
  MosaicPiece(piece-number="27")
  MosaicPiece(piece-number="28")
  MosaicPiece(piece-number="29")
  MosaicPiece(piece-number="30")

  MosaicPiece(piece-number="32")
  MosaicPiece(piece-number="33")
  MosaicPiece(piece-number="34")

  MosaicPiece(piece-number="36")
  MosaicPiece(piece-number="37")

  MosaicPiece(piece-number="39")
  MosaicPiece(piece-number="40")

  MosaicPiece(piece-number="43")
  MosaicPiece(piece-number="44")

  MosaicPiece(piece-number="46")
  MosaicPiece(piece-number="47")
  MosaicPiece(piece-number="48")
  MosaicPiece(piece-number="49")
  MosaicPiece(piece-number="50")
  MosaicPiece(piece-number="51")
  MosaicPiece(piece-number="52")

  MosaicPiece(piece-number="54")
  MosaicPiece(piece-number="55")
</template>

<script setup lang="ts"></script>

<style scoped lang="sass">
// 376 x 251
@use "@/styles/abstracts" as *

$base-top: 100px
$base-left: 100px

.Mosaic
  height: 15.688rem
  position: relative
  width: 23.5rem

  .Mosaic-Piece
    left: 0
    top: 0
    transition: all 500ms ease-in-out

  .piece-1
    left: $base-left + 68px
    top: $base-top

  .piece-2
    left: $base-left + 103.9px
    top: $base-top

  .piece-3
    left: $base-left + 68px
    top: $base-top + 54px

  .piece-4
    left: $base-left + 15px
    top: $base-top + 54px

  .piece-5
    left: $base-left + 121.5px
    top: $base-top + 54px

  .piece-6
    left: $base-left
    top: $base-top + 32.4px

  .piece-7
    left: $base-left + 18.3px
    top: $base-top + 79px

  // .piece-8
  // .piece-9
  // .piece-10
  // .piece-11
  // .piece-12
  // .piece-13
  // .piece-14
  // .piece-15
  // .piece-16
  // .piece-17
  // .piece-18
  // .piece-19
  // .piece-20
  // .piece-21
  // .piece-22
  // .piece-23
  // .piece-24
  // .piece-25
  // .piece-26
  // .piece-27
  // .piece-28
  // .piece-29
  // .piece-30
  // .piece-31
  // .piece-32
  // .piece-33
  // .piece-34
  // .piece-35
  // .piece-36
  // .piece-37
  // .piece-38
  // .piece-39
  // .piece-40
  // .piece-41
  // .piece-42
  // .piece-43
  // .piece-44
  // .piece-45
  // .piece-46
  // .piece-47
  // .piece-48
  // .piece-49
  // .piece-50
  // .piece-50
  // .piece-51
  // .piece-52
  // .piece-53
  // .piece-54
  // .piece-55
</style>
