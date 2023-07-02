<template lang="pug">
button.Button(@click="emit('click')") {{ props.label }}
</template>

<script setup lang="ts">
const props = defineProps({
  label: String,
});

const emit = defineEmits(["click"]);
</script>

<style scoped lang="sass">
@use "@/styles/abstracts" as *

.Button
  +sensa-wild-fill(16)
  border-radius: rem(8)
  background-color: $purple
  padding: rem(8)
  color: $light

  &:hover
    background-color: $purple-light-20
</style>
