<template>
  <div class="chats-container">
    <!-- <message v-for="message in messages" :message="message" /> -->
    <message />
    ＜メッセージ＞を表示するよ。
  </div>
</template>

<script>
import Message from 'Message'
export default {
  props: ['messages'],
  components:{
    Message
  }
  // mounted(){
  //   console.log(this.messages)
  // }
}
</script>