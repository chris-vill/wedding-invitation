<template lang="pug">
div.SearchBar
  div
    input(placeholder="Search your full name" @input="onSearch" @click="onSearchBarClick" :value="query" autocomplete="no")
    ul(v-if="!isResultItemSelected && filteredList.length").search-result
      li(v-for="guest in filteredList" @click="onResultItemClick") {{ guest.fullname }}
</template>

<script setup lang="ts">
import * as T from "@/core/types";

const query = ref("");
const filteredList = ref<T.Guest[]>([]);
const isResultItemSelected = ref(false);

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

const emit = defineEmits(["input-update"]);

function onSearch(event: Event) {
  const _query = (event.target as HTMLInputElement).value;
  query.value = _query;

  if (!_query.length) {
    filteredList.value = [];
  }

  if (_query.length < 3) {
    return;
  }

  filteredList.value = (props.searchList as T.Guest[]).filter((guest) => {
    const lowerCaseFullname = guest.fullname.toLocaleLowerCase();
    const lowerCaseQuery = query.value.toLocaleLowerCase();

    return lowerCaseFullname.includes(lowerCaseQuery);
  });
}

function onSearchBarClick() {
  isResultItemSelected.value = false;
  filteredList.value = [];
}

function onResultItemClick(event: Event) {
  const resultItemEl = event.target as HTMLLIElement;

  isResultItemSelected.value = true;
  query.value = resultItemEl.textContent as string;
  emit("input-update", {
    [props.name]: query.value,
  });
}

// console.log(filteredList.value);
// console.log(query);
// console.log(isResultItemSelected);
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
