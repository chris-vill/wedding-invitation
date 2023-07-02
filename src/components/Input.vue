<template lang="pug">
div.Input
  input(:placeholder="props.placeholder || ''" @input="onInputChange" autocomplete="no")
  
</template>

<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  placeholder: String,
});
const emit = defineEmits(["input-update"]);

function onInputChange(event: Event) {
  const inputEl = event.target as HTMLInputElement;

  emit("input-update", {
    [props.name]: inputEl.value,
  });
}
</script>

<style scoped lang="sass">
@use "@/styles/abstracts" as *

.Input
  input
    +sensa-wild-fill(16)
    background-color: $light
    border: 2px solid $dark
    border-radius: rem(8)
    padding: rem(16)
</style>
