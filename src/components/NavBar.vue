<template lang="pug">
div.NavBar
  div.pip-container
    div.pips(v-for="(_, index) in navItems" :class="{ active: index === activeItemIndex }")
  div.bar
    Icon(name="caret-left" @click="onNavigate('prev')")
    nav
      NavItem(
        v-for="navItem in navItems"
        :label="navItem.label"
        :route="navItem.route"
      )
    Icon(name="caret-right" @click="onNavigate('next')")
</template>

<script setup lang="ts">
const activeItemIndex = ref(0);
const route = useRoute();
const router = useRouter();
const navItems = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Message",
    route: "/message",
  },
  {
    label: "Attire",
    route: "/attire",
  },
  {
    label: "Travel",
    route: "/travel",
  },
  {
    label: "Entourage",
    route: "/entourage",
  },
  {
    label: "Gallery",
    route: "/gallery",
  },
  {
    label: "FAQs",
    route: "/faq",
  },
  {
    label: "RSVP",
    route: "/rsvp",
  },
];

setPips();
watch(route, setPips);

function setPips() {
  activeItemIndex.value = navItems.findIndex(
    (item) => item.route === route.path
  );
}

function onNavigate(direction: "prev" | "next") {
  let newIndex;

  if (direction === "next" && activeItemIndex.value < navItems.length - 1) {
    newIndex = activeItemIndex.value + 1;
  }

  if (direction === "prev" && activeItemIndex.value > 0) {
    newIndex = activeItemIndex.value - 1;
  }

  if ([undefined, activeItemIndex.value].includes(newIndex)) {
    return;
  }

  router.push(navItems[newIndex as number].route);
}
</script>

<style lang="sass" scoped>
@use "@/styles/abstracts" as *

.NavBar
  .pip-container
    +fx
    +m-b(rem(4))
    justify-content: center
    gap: rem(8)

    .pips
      height: rem(10)
      width: rem(10)
      background-color: $purple-light-40
      border-radius: 50%

      &.active
        background-color: $purple

  .bar
    align-items: center
    display: flex
    gap: 0.5rem
    width: 100%
    justify-content: center

    nav
      display: flex
      overflow-x: scroll

    :deep(.Icon)
      height: rem(24)
      width: rem(24)

      path
        fill: $purple

    +media((desktop))
      :deep(.Icon)
        display: none

  +media(desktop)
    .pip-container
      display: none
</style>
