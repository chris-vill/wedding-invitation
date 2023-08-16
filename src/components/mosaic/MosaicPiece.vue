<template lang="pug">
div.Mosaic-Piece(:class="'piece-' + props.pieceNumber")
  //- img.mosaic(src="/images/mosaic/main.png")
  div(:class="'mosaic-sprite-' + props.pieceNumber")
</template>

<script setup lang="ts">
const props = defineProps({
  pieceNumber: {
    type: String,
    required: true,
  },
});
</script>

<style scoped lang="sass">
@use "@/styles/abstracts" as *

=base-piece($x, $y)
  background: url(/images/mosaic/main.png) $x $y
  background-size: 23.5rem 15.688rem

=horizontal-piece($x, $y)
  +base-piece($x, $y)
  height: 2.188rem
  width: 3.313rem

=vertical-piece($x, $y)
  +base-piece($x, $y)
  height: 3.344rem
  width: 2.225rem

.Mosaic-Piece
  max-width: max-content
  position: absolute

  +media(mobile)
    .mosaic-sprite-a
      +horizontal-piece(0, 0)

    .mosaic-sprite-b
      +horizontal-piece(-3.394rem, -15.694rem)

    .mosaic-sprite-1
      +vertical-piece(-8.975rem, -5.613rem)

    .mosaic-sprite-2
      +vertical-piece(-11.225rem, -5.613rem)

    .mosaic-sprite-3
      +horizontal-piece(-8.994rem, -8.969rem)

    .mosaic-sprite-4
      +horizontal-piece(-5.638rem, -8.969rem)

    .mosaic-sprite-5
      +vertical-piece(-12.344rem, -8.969rem)

    .mosaic-sprite-6
      +vertical-piece(-6.738rem, -5.613rem)

    .mosaic-sprite-7
      +horizontal-piece(-3.394rem, -22.419rem)

    .mosaic-sprite-8
      +horizontal-piece(-6.756rem, -3.375rem)

    .mosaic-sprite-9
      +vertical-piece(-12.344rem, -12.306rem)

    .mosaic-sprite-10
      +horizontal-piece(-13.456rem, -6.731rem)

    .mosaic-sprite-11
      +horizontal-piece(-14.588rem, -8.969rem)

    .mosaic-sprite-12
      +horizontal-piece(-3.394rem, 20.169rem)

    // 13

    .mosaic-sprite-14
      +vertical-piece(-3.394rem, -24.656rem)

    .mosaic-sprite-15
      +horizontal-piece(-5.638rem, -11.2rem)

    .mosaic-sprite-16
      +horizontal-piece(-10.106rem, -3.375rem)

    .mosaic-sprite-17
      +horizontal-piece(-13.463rem, -4.5rem)

    // 18

    .mosaic-sprite-19
      +horizontal-piece(-13.463rem, -2.256rem)

    .mosaic-sprite-20
      +horizontal-piece(-161.7rem, -1.138rem)

    // 21

    .mosaic-sprite-22
      +horizontal-piece(-6.756rem, -1.144rem)

    .mosaic-sprite-23
      +horizontal-piece(-3.394rem, -17.944rem)

    .mosaic-sprite-24
      +vertical-piece(-16.813rem, -5.619rem)

    .mosaic-sprite-25
      +horizontal-piece(-9rem, -11.2rem)

    .mosaic-sprite-26
      +horizontal-piece(-16.813rem, -3.375rem)

    .mosaic-sprite-27
      +horizontal-piece(-3.394rem, 0)

    .mosaic-sprite-28
      +vertical-piece(-19.063rem, -5.625rem)

    .mosaic-sprite-29
      +horizontal-piece(-14.581rem, -11.2rem)

    .mosaic-sprite-30
      +vertical-piece(-17.938rem, -8.963rem)

    // 31

    .mosaic-sprite-32
      +horizontal-piece(-13.463rem, 0)

    .mosaic-sprite-33
      +horizontal-piece(-6.75rem, 0)

    .mosaic-sprite-34
      +horizontal-piece(-10.106rem, 0)
      // croped

    // 35

    .mosaic-sprite-36
      +vertical-piece(-20.181rem, -2.263rem)

    .mosaic-sprite-37
      +vertical-piece(-21.281rem, -5.625rem)

    // 38

    .mosaic-sprite-39
      +horizontal-piece(-16.813rem, 0)

    .mosaic-sprite-40
      +horizontal-piece(-20.181rem, -8.969rem)
      // croped

    // 41, 42

    .mosaic-sprite-43
      +horizontal-piece(-20.181rem, -11.213rem)

    .mosaic-sprite-44
      +horizontal-piece(-14.588rem, -11.206rem)

    // 45
    .mosaic-sprite-46
      +horizontal-piece(-8.969rem, -13.431rem)

    .mosaic-sprite-47
      +horizontal-piece(-14.581rem, -13.45rem)

    .mosaic-sprite-48
      +horizontal-piece(-20.175rem, -13.444rem)

    .mosaic-sprite-49
      +vertical-piece(-17.931rem, -12.313rem)

    .mosaic-sprite-50
      +horizontal-piece(-5.638rem, -13.438rem)

    .mosaic-sprite-51
      +vertical-piece(-22.406rem, 0)
      // croped

    .mosaic-sprite-52
      +vertical-piece(-22.406rem, -2.256rem)
      // croped

    // 53
    .mosaic-sprite-54
      +vertical-piece(-3.394rem, -28rem)

    .mosaic-sprite-55
      +vertical-piece(-22.463rem, -8.969rem)
      // croped
</style>
