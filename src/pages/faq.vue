<template lang="pug">
div.FAQ
  header
    h1.animated.animation Wedding FAQs
    img.page-photo.animated.animation(src="/images/prenup_6.png")
    p.page-description.animated.animation We have prepared answers to some questions that you might have for our big day! 😊

  div.item
    h5.question.animated.animation
      b.question__initials Q:
      span Where will the ceremony be?
    span.answer.animated.animation
      b.answer__initials A:
      span
        | The ceremony will be held at
        b.highlight  Our Lady of Lourdes Parish, Tagaytay City.

  div.item
    h5.question.animated.animation
      b.question__initials Q:
      span What time will the ceremony start?
    span.answer.animated.animation
      b.answer__initials A:
      span The ceremony will start at 2:30 in the afternoon

  div.item
    h5.question.animated.animation
      b.question__initials Q:
      span Do we really need to RSVP?
    span.answer.animated.animation
      b.answer__initials A:
      span
        b.highlight Yes please
        | . We need this to consolidate guest details and finalize the head count for catering and seating arrangement. We also need a final guest list since the reception venue is strict in allowing entry.

  div.item
    h5.question.animated.animation
      b.question__initials Q:
      span
        | I have
        span.normal-case  RSVPed
        |  "YES", but due to a change in circumstance, I will no longer be able to attend. What should I do?
    span.answer.animated.animation
      b.answer__initials A:
      span We understand that there may be such circumstance. We ask that you please let us know as soon as possible so we can reallocate your seat.
  
  div.item
    h5.question.animated.animation
      b.question__initials Q:
      span
        | I have
        span.normal-case  RSVPed
        |  "NO", but my schedule changed and now I can attend. What should I do?
    span.answer.animated.animation
      b.answer__initials A:
      div.answer__multiple
        span We are glad that you can now make it on our big day! Please let us know as soon as possible.
        span Having said that, please understand that we may have reallocated your seat(s) to someone else.
        span Therefore, we cannot guarantee the same number of seats or any seat at all 😔

  div.item
    h5.question.animated.animation
      b.question__initials Q:
      span Can we bring kids to the wedding?
    span.answer.animated.animation
      b.answer__initials A:
      div.answer__multiple
        span We love children, but due to necessity than choice, we regretfully cannot accommodate them at the venue.
        span The only kids attending are those who are part of the entourage and of the immediate family. We are hoping for your kind understanding.
  
  div.item
    h5.question.animated.animation
      b.question__initials Q:
      div
        span Can I bring a date with me?
        br
        span.normal-case (or any plus ones, driver, helper, etc.)
    span.answer.animated.animation
      b.answer__initials A:
      span Please refer to your invitation for the number of alloted seat(s). As much as we'd love to have everyone celebrate with us, unfortunately, we can only accommodate a limited number of guests due to venue space and budget restrictions.

  div.item
    h5.question.animated.animation
      b.question__initials Q:
      span Where will the reception be?
    span.answer.animated.animation
      b.answer__initials A:
      div.answer__multiple
        span
          | Reception will be at
          b.highlight  Aquila Crystal Palace, Tagaytay.
        span Upon arrival, snacks and refreshments will be served. Use this time to mingle, register, find your seats and use the photo booth.

  div.item
    h5.question.animated.animation
      b.question__initials Q:
      span Can we seat anywhere during the reception?
    span.answer.animated.animation
      b.answer__initials A:
      div.answer__multiple
        span
          b.highlight Please don't 😔
          | . It took us a lot of effort and discussion to finish the seating arrangement which is planned for everyone's convenience and network preference.
        span You'll be seated along with family or friends.

  div.item
    h5.question.animated.animation
      b.question__initials Q:
      span When is the appropriate time to leave
    span.answer.animated.animation
      b.answer__initials A:
      div.answer__multiple
        span We aim to end the program at 9:30pm, please don't eat and run 😔
        span If you need to leave early, we'd love to thank you and say goodbye before you go. Maybe not while they're playing the same day edit video though 😊
  
  div.item
    h5.question.animated.animation
      b.question__initials Q:
      span Where can we park our cars? How much will it cost?
    span.answer.animated.animation
      b.answer__initials A:
      div.answer__multiple
        span There are parking slots in the ceremony venue, and these are for free.
        span The reception venue also has ample parking spaces for everyone, parking is likewise free.
  
  div.item
    h5.question.animated.animation
      b.question__initials Q:
      span Can we take pictures and videos during the wedding? (may idadagdag)
    span.answer.animated.animation
      b.answer__initials A: 
      div.answer__multiple
        span 
          b.highlight Our ceremony is unplugged 
          |  and we plan to keep it solemn. Please put down and keep your phones away during the processional and ceremony. After we are pronounced husband and wife, you're free to take shots 😊
        span We have an amazing team of photographers and videographers to capture the moment. We promise to share the pictures with you after the wedding!

  div.item
    h5.question.animated.animation
      b.question__initials Q:
      span How can we help the couple have the best time during the wedding?
    span.answer.animated.animation
      b.answer__initials A:
      div.answer__multiple
        span Pray with us for favors and provisions
        span RSVP now 😊
        span Wear appropriate attire
        span Be there on time
        span Stay until the end of the program
        span Enjoy! 😊
</template>

<script setup lang="ts">
definePageMeta({
  layout: "main",
});

onMounted(() => {
  // Animate Intro
  const animatedEls = document.querySelectorAll(".animated");
  animatedEls.forEach((animatedEl, i) => {
    setTimeout(() => {
      animatedEl.classList.remove("animation");
    }, 150 * (1 + i));
  });
});

onBeforeUnmount(() => {
  // Animate Outro
  const animatedEls = document.querySelectorAll(".animated");
  animatedEls.forEach((animatedEl, i) => {
    setTimeout(() => {
      animatedEl.classList.add("animation");
    }, 150 * (1 + i));
  });
});
</script>

<style scoped lang="sass">
@use "@/styles/abstracts" as *

.FAQ
  +fx-col
  gap: rem(32)

  header
    +fx-col
    +m-b(rem(16))
    gap: rem(24)

  h1
    +playlist-script(38)
    color: $purple-dark-40
    text-align: center

  .page-photo
    +m-x(auto)
    display: block

  .page-description
    +sensa-wild-fill(20)
    color: $purple-dark-40
    text-align: center

  .item
    +fx-col
    +more-sugar-thin(16)
    gap: rem(12)
    margin-right: auto
    max-width: rem(520)

  .question
    +fx
    color: $purple-dark-40
    gap: rem(6)
    text-transform: uppercase

    &__initials
      +more-sugar(16)
      color: red

  .answer
    +fx
    color: $purple
    gap: rem(6)

    &__initials
      +more-sugar(16)
      color: green

    &__multiple
      +fx-col
      gap: rem(12)

  .highlight
    +more-sugar(16)

  .normal-case
    text-transform: none

  .animation
    transform: translateY(50%)
    opacity: 0

  .animated
    transition: all 450ms

  +media((tablet, desktop))
    .page-photo
      max-width: rem(480)

  +media(mobile)
    .page-photo
      max-width: rem(320)

  +media(desktop)
    .item
      margin-left: auto
      min-width: rem(520)
</style>
