<template lang="pug">
div.MainLayout(ref="mainRef")
  img.corner-image(src="/images/flowers-2.png")
  img.corner-image(src="/images/flowers-3.png")
  NavBar
  div.content-wrapper
    slot
    img.logo(src="/images/logo.png")
//- audio(ref="audioRef" autoplay loop src="/audio/wedding-themed-music.mp3" controls)
</template>

<script setup lang="ts">
const mainRef = ref(null);

onMounted(() => {
  const mainEl = mainRef.value;
  const audio = document?.createElement("audio");
  audio.src = "/audio/wedding-themed-music.mp3";
  audio.autoplay = true;
  audio.loop = true;
  audio.controls = false;

  if (!mainEl) {
    return;
  }

  (mainEl as HTMLDivElement).appendChild(audio);
  audio.play();
});
</script>

<style lang="sass" scoped>
@use "@/styles/abstracts" as *

.MainLayout
  display: flex
  flex-direction: column
  height: 100%
  padding: rem(18) rem(18) rem(40)
  position: relative
  width: 100%

  .content-wrapper
    +fx-col
    +p-y(rem(32), rem(40))
    overflow-y: scroll
    height: 100%
    width: 100%

  .corner-image
    +pos-abs
    opacity: 0.6

    &:first-of-type
      +w(rem(186))
      bottom: -72px
      left: 24px
      transform: rotateY(180deg) rotate(270deg)

    &:nth-of-type(2)
      +w(rem(229))
      transform: rotate(270deg)
      bottom: -62px
      right: -14px

  .NavBar
    justify-content: center
    margin: 0 auto
    width: 100%
    z-index: 2

  .logo
    +m-t(auto)
    +m-x(auto)
    +p-t(rem(40))
    width: rem(160)

+media((tablet, desktop))
  .MainLayout
    +p-x(2rem)
</style>
