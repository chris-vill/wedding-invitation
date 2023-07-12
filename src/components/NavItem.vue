<template lang="pug">
NuxtLink(ref="nuxtLinkRef" :to="props.route") {{ props.label }}
</template>

<script lang="ts" setup>
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  route: {
    type: String,
    required: true,
  },
});
</script>

<style lang="sass" scoped>
@use "@/styles/abstracts" as *

a
  +montserrat-bold(14)
  color: $purple-light-40
  display: block
  padding: 0.5rem 1rem

  &:hover
    color: $purple-dark-40

  &.router-link-exact-active
    color: $purple-dark-20
</style>
