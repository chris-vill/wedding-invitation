<template lang="pug">
div.RSVP
  div.rsvp-flow(v-if="!isRsvpJustSent")
    SearchBar(name="fullname" :search-list="guestList" @input-update="onFieldsUpdate")
    div.form(v-if="!isRsvpAlreadySent && guestData.fullname" )
      div.confirmation
        span.question Are you going?
        Button(label="YES" @click="onConfirmationYes")
        span or
        Button(label="NO" @click="onConfirmationNo")
      
      div.reason(v-if="isReasonVisible")
        Input(name="reason" placeholder="Any reason for not coming?" @input-update="onFieldsUpdate")
      
      Button(v-if="hasConfirmed" label="Send RSVP" @click="onSendRsvp")
  
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
const hasConfirmed = ref(false);
const isRsvpJustSent = ref(false);
const isSuccess = ref(false);

const response = await api.getSheet();
const guestList = response?.data || [];

definePageMeta({
  layout: "main",
});

function onFieldsUpdate(fieldData: Record<string, any>) {
  const guestFromList = (findGuestFromList(fieldData.fullname) ||
    {}) as T.Guest;

  if (guestFromList.isGoing) {
    isRsvpAlreadySent.value = true;
    return;
  }

  isRsvpAlreadySent.value = false;

  guestData.value = {
    ...guestFromList,
    ...guestData.value,
    ...fieldData,
  };
}

function findGuestFromList(fullname: string = "") {
  return guestList.find(
    (guest) =>
      guest.fullname.toLocaleLowerCase() === fullname.toLocaleLowerCase()
  );
}

function onConfirmationYes() {
  guestData.value = {
    ...guestData.value,
    isGoing: true,
    reason: "",
  };
  hasConfirmed.value = true;
}

function onConfirmationNo() {
  guestData.value = {
    ...guestData.value,
    isGoing: false,
  };
  isReasonVisible.value = true;
  hasConfirmed.value = true;
}

async function onSendRsvp() {
  const response = await api.updateRow(guestData.value);

  if (response?.status === "KO") {
    return;
  }

  isRsvpJustSent.value = true;
  isSuccess.value = guestData.value.isGoing as boolean;
}
</script>

<style lang="sass" scoped>
@use "@/styles/abstracts" as *

.RSVP
  .rsvp-flow
    display: flex
    flex-direction: column
    gap: rem(16)

    .form
      display: flex
      flex-direction: column
      gap: rem(16)

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

  .finish-message
    +sensa-wild-fill(20)
    text-align: center
</style>
