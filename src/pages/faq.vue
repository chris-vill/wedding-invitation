<template lang="pug">
div.FAQ
  header
    h1 Wedding FAQs
    p We have prepared answers to some questions that you might have for our big day! 😊

  div.item
    h5 Q: Where will the ceremony be?
    span A: The ceremony will be at Our Lady of Lourdes Parish, Tagaytay City.

  div.item
    h5 Q: What time will the ceremony start?
    span A: The ceremony will start at 2:30 in the afternoon

  div.item
    h5 Q: Do we really need to RSVP?
    span
      | A:
      span.highlight Yes please
      | . We need this to consolidate guest details and finalize the head count for catering and seating arrangement. We also need a final guest list since the reception venue is strict in allowing entry.

  div.item
    h5 Q: I have RSVPed "YES", but due to a change in circumstance, I will no longer be able to attend. What should I do?
    span A: We understand that there may be such circumstance. We ask that you please let us know as soon as possible so we can reallocate your seat.
  
  div.item
    h5 Q: I have RSVPed "NO", but my schedule changed and now I can attend. What should I do?
    span A: We are glad that you can now make it on our big day! Please let us know as soon as possible.
    span Having said that, please understand that we may have reallocated your seat(s) to someone else.
    span Therefore, we cannot guarantee the same number of seats or any seat at all 😔

  div.item
    h5 Q: Can we bring kids to the wedding?
    span A: We love children, but due to necessity than choice, we regetfully cannot accommodate them at the venue.
    span The only kids attending are those who are part of the entourage and of the immediate family. We are hoping for your kind understanding.
  
  div.item
    h5 Q: Can I bring a date with me?
    span.subtitle (or any plus ones, driver, helper, etc.)
    span A: Please refer to your invitation for the number of alloted seat(s). As much as we'd love to have everyone celebrate with us, unfortunately, we can only accommodate a limited number of guests due to venue space and budget restrictions.

  div.item
    h5 Q: Where will the reception be?
    span A: Reception will be at Aquila Crystal Palace, Tagaytay.
    span Appetizers and refereshments will be served. Use this time to mingle, register, find your seats and use the photo booth.

  div.item
    h5 Q: Can we seat anywhere during the reception?
    span
      | A: 
      span.highlight Please don't 😔
      | . It took us a lot of effort and discussion to finish the seating arrangement which is planned for everyone's convenience and network preference.
    span You'll be seated along with family or friends.

  div.item
    h5 Q: When is the appropriate time to leave
    span A: We aim to end the program at 9:30pm, please don't eat and run 😔
    span If you need to leave early, we'd love to thank you and say goodbye before you go. Maybe not while they're playing the same day edit video though 😊
  
  div.item
    h5 Q: Where can we park our cars? How much will it cost?
    span A: There are parking slots in the ceremony venue, and these are for free.
    span The recception venue also has ample parking spaces for everyone, parking is like wise free.
  
  div.item
    h5 Q: Can we take picutres and videos during the wedding? (may idadagdag)
    span
      | A: 
      span.highlight Our ceremony is unplugged 
      | and we plan to keep it solemn. Please put down and keep your phones during the processional and ceremony. After we are pronounced husband and wife, you're free to take shots 😊
    span We have an amazing team of photographers and videographers to capture the moment. We promise to share the pictures with you after the wedding!

  div.item
    h5 Q: How can we help the couple have the best time during the wedding?
    span Pray with us for favors and provisions
    span RSVP now 😊
    span Wear appropriate attire
    span Be there on time
    span Stay until the end of the program
    span Enjoy! 😊

  img.logo(src="/images/logo.png")
</template>

<script setup lang="ts">
definePageMeta({
  layout: "main",
});
</script>

<style scoped lang="sass">
@use "@/styles/abstracts" as *

.FAQ
  +fx-col
  +sensa-wild-fill(20)
  +m-b(rem(64))
  color: $dark
  gap: rem(24)

  header
    +m-b(rem(12))

    p
      text-align: center

  h1
    +playlist-script(38)
    +m-b(rem(18))
    color: $purple-dark-40
    text-align: center

  h5
    color: $purple

  .item
    +fx-col
    gap: rem(8)

  .highlight
    color: $purple-light-20

  .logo
    width: rem(100)
    margin: 0 auto
</style>
