<template lang="pug">
div.NavBar
  Icon(name="caret-left")
  nav
    NavItem(
      v-for="navItem in navItems"
      :label="navItem.label"
      :route="navItem.route"
    )
  Icon(name="caret-right")
</template>

<script setup lang="ts">
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
</script>

<style lang="sass" scoped>
@use "@/styles/abstracts" as *

.NavBar
  align-items: center
  display: flex
  gap: 0.5rem

  nav
    display: flex
    overflow: scroll

  :deep(.Icon path)
    fill: $purple

  +media((desktop))
    :deep(.Icon)
      display: none
</style>
