<template lang="pug">
div.SearchBar
  div
    input(placeholder="Search your name" @input="onSearch" :value="query || ''" autocomplete="no")
    ul(v-if="areResultsVisible").search-result
      li(v-for="guest in filteredList" @click="onResultItemClick") {{ guest.fullname }}
      li(v-if="!filteredList.length") Sorry, you're not on the list 😔
</template>

<script setup lang="ts">
import * as T from "@/core/types";

const query = ref("");
const filteredList = ref<T.Guest[]>([]);
const areResultsVisible = ref(false);

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  searchList: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["input-change", "result-selected"]);

function onSearch(event: Event) {
  const _query = (event.target as HTMLInputElement).value;
  query.value = _query;
  areResultsVisible.value = false;

  emit("input-change", query.value);

  if (!_query.length) {
    filteredList.value = [];
  }

  if (_query.length < 3) {
    return;
  }

  areResultsVisible.value = true;

  filteredList.value = (props.searchList as T.Guest[]).filter((guest) => {
    const lowerCaseFullname = guest.fullname.toLocaleLowerCase();
    const lowerCaseQuery = query.value.toLocaleLowerCase();

    return lowerCaseFullname.includes(lowerCaseQuery);
  });
}

function onResultItemClick(event: Event) {
  const resultItemEl = event.target as HTMLLIElement;

  areResultsVisible.value = false;
  query.value = resultItemEl.textContent as string;
  emit("result-selected", {
    [props.name]: query.value,
  });
}
</script>

<style lang="sass" scoped>
@use "@/styles/abstracts" as *

.SearchBar
  input
    +sensa-wild-fill(16)
    background-color: $light
    border: 2px solid $dark
    border-radius: rem(8)
    padding: rem(16)
    width: 100%

    &:hover
      border-color: $purple

    &:focus
      border-color: $purple-light-20 !important
      outline: none

  ul
    +sensa-wild-fill(16)
    border: 2px solid $dark
    border-radius: rem(8)
    padding: rem(16)
    margin-top: rem(8)
    max-height: rem(186)
    overflow-y: scroll

  li:not(:last-child)
    padding-bottom: rem(16)
</style>
