<template>
  <div class="chats-container">
    <!-- <div class="chat-container">
      <div class="thumbnail-container">
        <img src="">
      </div> -->
    <div class="message-container">
      <!-- <div class="user-name">{{ dispalyName }}</div> -->
      <div class="message">二重鉤括弧ひげで囲うんだぞ。実際のメッセージだぞ。message.text</div>
    </div>
  </div>
</template>

<script>
import Message from 'Message'

export default {
  props: ['message'],
  // computed: {
  //   dispalyName(){
  //     return "@" + this.message.user.name
  //   }
  // }
}
</script>