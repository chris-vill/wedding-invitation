<template lang="pug">
div.MainLayout(ref="mainRef")
  NavBar
  div.content-wrapper
    slot
    img.logo(src="/images/logo.png")
  img.bottom-flowers(src="/images/flowers-5.png")
  img.bottom-flowers(src="/images/flowers-5.png")
  Icon(name="caret-down")
</template>

<script setup lang="ts">
const mainRef = ref(null);

onMounted(() => {
  const audio = new Audio("/audio/wedding-themed-music.mp3");
  audio.loop = true;
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
    +p-y(2rem, 3.5rem)
    overflow-y: scroll
    height: 100%
    width: 100%

  .NavBar
    justify-content: center
    margin: 0 auto
    width: 100%
    z-index: 2

  .logo
    +m-t(auto)
    +m-x(auto)
    +p-t(rem(62))
    width: rem(160)

  & > :deep(.Icon)
    +pos-abs
    bottom: 0

  .bottom-flowers
    +pos-abs
    bottom: -17px
    height: 101px
    left: -53px

    &:nth-of-type(2)
      left: 253px

+media((tablet, desktop))
  .MainLayout
    +p-x(2rem)
</style>
