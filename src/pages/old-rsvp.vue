<template lang="pug">
div.RSVP
  header
    h1 RSVP
    img(src="/images/prenup_4.png")
    p The favor of your reply is greatly appreciated
    p on or before
    p August 22, 2023

  div.rsvp-flow(v-if="!isRsvpJustSent")
    SearchBar(name="fullname" :search-list="guestList" @input-update="onSearch")
    div.form(v-if="!isRsvpAlreadySent && guestData?.fullname" )
      Input(name="mobileNumber" placeholder="Mobile Number *" @input-update="onFieldsUpdate")
      span.error-mobile-number(v-if="mobileNumberError") {{ mobileNumberError }}
      Input(name="emailNumber" placeholder="Email Address (optional)" @input-update="onFieldsUpdate")
      div.confirmation
        span.question Are you coming?
        
        div.slide-toggle(@click="onSlideToggle")
          div.slider
            span YES
            div
            span NO

      div.reason(v-if="isReasonVisible")
        Input(name="reason" placeholder="Any reason for not coming? 😁" @input-update="onFieldsUpdate")
      
      Button(label="Send RSVP" @click="onSendRsvp")
  
  div.finish-message(v-if="isRsvpJustSent")
    span(v-if="isSuccess") Thanks for confirming, see you on our wedding day! 🥰
    span(v-if="!isSuccess") Thanks for confirming 🥹
      
  div.message(v-if="isRsvpAlreadySent")
    | You already sent an RSVP
</template>

<script lang="ts" setup>
import * as api from "@/core/api";
import * as T from "@/core/types";

const guestData = ref<Partial<T.Guest>>({});
const isRsvpAlreadySent = ref(false);
const isReasonVisible = ref(false);
const isRsvpJustSent = ref(false);
const isSuccess = ref(false);
const isGoing = ref(true);
const mobileNumberError = ref("");
const guestList = ref<T.Guest[]>([]);

definePageMeta({
  layout: "main",
});

onBeforeMount(async () => {
  const response = await api.getSheet();
  guestList.value = response?.data || [];
});

function onSearch(fieldData: Record<string, any>) {
  const guestFromList = (findGuestFromList(fieldData.fullname) ||
    {}) as T.Guest;

  isRsvpAlreadySent.value = guestFromList.isGoing !== null;

  guestData.value = {
    ...guestFromList,
    ...fieldData,
  };
}

function onFieldsUpdate(fieldData: Record<string, any>) {
  const guestFromList = (findGuestFromList(fieldData.fullname) ||
    {}) as T.Guest;

  guestData.value = {
    ...guestFromList,
    ...guestData.value,
    ...fieldData,
  };
}

function findGuestFromList(fullname: string = "") {
  return guestList.value.find(
    (guest) =>
      guest.fullname.toLocaleLowerCase() === fullname.toLocaleLowerCase()
  );
}

async function onSendRsvp() {
  guestData.value = {
    ...guestData.value,
    isGoing: isGoing.value,
  };

  if (!guestData.value.mobileNumber) {
    mobileNumberError.value = "Please input a mobile number";
    return;
  }

  if (guestData.value.mobileNumber) {
    const isNumberValid = validateMobileNumber(guestData.value.mobileNumber);

    if (!isNumberValid) {
      return;
    }

    mobileNumberError.value = "";
  }

  const response = await api.updateRow(guestData.value);

  if (response?.status === "KO") {
    return;
  }

  isRsvpJustSent.value = true;
  isSuccess.value = guestData.value.isGoing as boolean;
}

function validateMobileNumber(mobileNumber: string) {
  const isNumberLocal = mobileNumber.startsWith("0");
  const isNumberGlobal = mobileNumber.startsWith("+63");

  if (isNumberLocal && mobileNumber.length !== 11) {
    mobileNumberError.value = "Invalid Mobile Number";
    return false;
  }

  if (isNumberGlobal && mobileNumber.length !== 13) {
    mobileNumberError.value = "Invalid Mobile Number";
    return false;
  }

  if (!isNumberLocal && !isNumberGlobal) {
    mobileNumberError.value = "Invalid Mobile Number";
    return false;
  }

  return true;
}

function onSlideToggle(event: Event) {
  const targetEl = event.target as HTMLDivElement;
  const slideToggleEl = targetEl.closest(".slide-toggle") as HTMLDivElement;

  isGoing.value = !isGoing.value;

  if (!isGoing.value) {
    slideToggleEl.classList.add("no");
  } else {
    slideToggleEl.classList.remove("no");
  }

  isReasonVisible.value = !isGoing.value;
}
</script>

<style lang="sass" scoped>
@use "@/styles/abstracts" as *

.RSVP
  +fx-col

  header
    text-align: center
    +m-b(rem(48))

    img
      margin: 0 auto
      filter: drop-shadow(0 0 10px rgba($dark, 0.5))
      +m-b(rem(16))

      +media(mobile)
        max-width: rem(320)

      +media((tablet, desktop))
        max-width: rem(480)

  h1
    +playlist-script(38)
    +m-b(rem(18))
    color: $purple

  p
    +sensa-wild-fill(20)
    +m-b(rem(18))
    color: $dark

  .rsvp-flow
    +m-y(auto)
    display: flex
    flex-direction: column
    gap: rem(32)

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

  .finish-message
    +sensa-wild-fill(20)
    text-align: center
    margin: auto

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
