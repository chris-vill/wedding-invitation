<template lang="pug">
div.RSVP
  header
    h1 RSVP
    img.prenup-pic(src="/images/prenup_4.png")
    p.subtitle The favor of your reply is greatly
    p.subtitle appreciated on or before
    p.subtitle.due-date August 22, 2023

  main
    div.flow(v-if="!states?.isRsvpSent")
      SearchBar(v-if="!states?.isRsvpSent && states?.guestList" name="fullname" :search-list="states.guestList" @result-selected="onSearch" @input-change="handleInputChange")

      div.form(v-if="states?.selectedGuest && !states.isAlreadyGoing")
        Input(name="mobileNumber" placeholder="Mobile Number *" @input-update="handleFieldUpdate")
        span.error-mobile-number(v-if="states.mobileNumberError") {{ states.mobileNumberError }}
        Input(name="emailAddress" placeholder="Email Address (optional)" @input-update="handleFieldUpdate")

        div.confirmation
          span.question Are you coming?

          div.slide-toggle(@click="onSlideToggle")
            div.slider
              span YES
              div
              span NO

        Input(v-if="!states.isGoing" name="reason" placeholder="Any reason for not coming? 😁" @input-update="handleFieldUpdate")
      
        Button(label="Send RSVP" @click="handleSubmit")

    div.already-going(v-if="states?.isAlreadyGoing")
      | You already sent an RSVP

    div.flow-finish(v-if="states?.isRsvpSent")
      span(v-if="states.isGoing")
        span Thanks for confirming,
        span see you on our wedding day! 🥰
      span(v-if="!states.isGoing") Thanks for confirming 🥹
      Button(label="RSVP a companion?" @click="handleRsvpAgain")
</template>

<script lang="ts" setup>
import * as api from "@/core/api";
import * as T from "@/core/types";

const states = reactive<{
  guestList?: T.Guest[];
  isAlreadyGoing: boolean;
  isGoing: boolean;
  isRsvpSent?: boolean;
  mobileNumberError?: string;
  selectedGuest?: T.Guest | null;
}>({
  isAlreadyGoing: false,
  isGoing: true,
});

definePageMeta({
  layout: "main",
});

onBeforeMount(async () => {
  const response = await api.getSheet();
  states.guestList = response?.data || [];
});

function onSearch(searchResult: Record<string, any>) {
  const selectedGuest = findGuestFromList(searchResult.fullname);

  states.selectedGuest = selectedGuest;
  states.isAlreadyGoing = selectedGuest.isGoing;
}

function handleFieldUpdate(fieldData: Partial<T.Guest>) {
  if (!states.selectedGuest) {
    return;
  }

  states.selectedGuest = {
    ...states.selectedGuest,
    ...fieldData,
  };
}

function handleInputChange(query: string) {
  if (query?.length >= 3) {
    return;
  }

  states.isAlreadyGoing = false;
  states.selectedGuest = null;
  states.mobileNumberError = "";
}

function findGuestFromList(fullname: string = "") {
  const _selectedGuest = states.guestList?.find((guest) => {
    const lowerCaseFullname = guest.fullname?.toLocaleLowerCase();

    return (
      lowerCaseFullname && lowerCaseFullname === fullname.toLocaleLowerCase()
    );
  });

  return _selectedGuest || ({} as T.Guest);
}

async function handleSubmit() {
  const guestData = {
    ...states.selectedGuest,
    isGoing: states.isGoing,
  };

  if (!guestData.mobileNumber) {
    states.mobileNumberError = "Please input a mobile number";
    return;
  }

  if (guestData.mobileNumber) {
    const isNumberValid = validateMobileNumber(guestData.mobileNumber);

    if (!isNumberValid) {
      return;
    }

    states.mobileNumberError = "";
  }

  const response = await api.updateRow(guestData);

  if (response?.status === "KO") {
    return;
  }

  states.isRsvpSent = true;
}

function validateMobileNumber(mobileNumber: string) {
  const isNumberLocal = mobileNumber.startsWith("0");
  const isNumberGlobal = mobileNumber.startsWith("+63");

  if (isNumberLocal && mobileNumber.length !== 11) {
    states.mobileNumberError = "Invalid Mobile Number";
    return false;
  }

  if (isNumberGlobal && mobileNumber.length !== 13) {
    states.mobileNumberError = "Invalid Mobile Number";
    return false;
  }

  if (!isNumberLocal && !isNumberGlobal) {
    states.mobileNumberError = "Invalid Mobile Number";
    return false;
  }

  return true;
}

function handleRsvpAgain() {
  states.isRsvpSent = false;
  states.selectedGuest = null;
}

function onSlideToggle(event: Event) {
  const targetEl = event.target as HTMLDivElement;
  const slideToggleEl = targetEl.closest(".slide-toggle") as HTMLDivElement;

  if (!states.selectedGuest) {
    return;
  }

  states.isGoing = !states.isGoing;

  if (!states.isGoing) {
    slideToggleEl.classList.add("no");
  } else {
    slideToggleEl.classList.remove("no");
  }
}
</script>

<style lang="sass" scoped>
@use "@/styles/abstracts" as *

.RSVP
  +fx-col
  align-items: center

  header
    text-align: center
    +m-b(2rem)

  .prenup-pic
    margin: 0 auto
    filter: drop-shadow(0 0 10px rgba($dark, 0.5))
    +m-b(rem(16))

    +media(mobile)
      max-width: rem(320)

    +media((tablet, desktop))
      max-width: rem(480)

  main
    +m-x(auto)
    width: 100%
    max-width: 32.5rem

  h1
    +playlist-script(38)
    +m-b(rem(18))
    color: $purple

  .subtitle
    +sensa-wild-fill(20)
    +m-b(rem(18))
    color: $dark

  .due-date
    font-weight: 900
    color: $purple

  .flow
    +m-y(auto)
    display: flex
    flex-direction: column
    gap: rem(16)

  .already-going
    +sensa-wild-fill(20)
    color: $dark
    text-align: center

  .form
    display: flex
    flex-direction: column
    gap: rem(16)

    & > Button
      width: max-content
      margin: rem(32) auto 0

  .confirmation
    +sensa-wild-fill(16)
    display: flex
    flex-wrap: wrap
    justify-content: center
    align-items: center
    gap: rem(14)

    .question
      width: 100%
      text-align: center

    .message
      +sensa-wild-fill(16)
      text-align: center

  .reason
    +m-t(rem(32))

  .flow-finish
    +sensa-wild-fill(20)
    text-align: center
    margin: auto

    span
      display: block

    button
      margin-top: 1.5rem

  .slide-toggle
    +sensa-wild-fill(18)
    width: rem(62)
    height: rem(28)
    border: rem(2) solid $purple-dark-40
    border-radius: rem(16)
    overflow: hidden
    position: relative
    cursor: pointer

    &.no .slider
      left: rem(-34)

  .slider
    +fx
    height: rem(26)
    position: absolute
    top: 0
    left: 0
    align-items: center
    transition: 250ms left
    color: $light

    span
      padding-top: rem(1)
      display: flex
      width: 100%
      height: 100%
      align-items: center

    span:first-of-type
      background-color: $purple-light-20//#5cff59
      +p-x(rem(6), rem(16))

    span:last-of-type
      background-color: #ff5c59
      +p-x(rem(18), rem(14))

    div
      background-color: $light
      position: absolute
      border: 2px solid $dark
      min-height: rem(28)
      min-width: rem(28)
      border-radius: 50%
      left: rem(32)

  .error-mobile-number
    +sensa-wild-fill(16)
    margin-bottom: 0.5rem
    color: red
</style>
