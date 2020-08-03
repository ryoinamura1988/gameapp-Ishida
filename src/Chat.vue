<template>
   <v-ons-page>
    <p style="text-align: center">
      MYYYYYYYYCHATTT!!!!!!
      {{ messages.text }}
    </p>

    
    <div class="container">
      <div class="chats-layout">
        <messages />
        <messages />
      </div> 
      <div class="input-layout">
        <chat-form />
      </div>
    </div>
  </v-ons-page>
</template>

<script>
import Messages from 'Messages'
import ChatForm from 'ChatForm'
import { db } from 'firebase'

export default {
  components :{
    Messages,
    ChatForm
  },
  data(){
    return {
      messages:[]
    }
  },
  mounted(){
    // const channelId = this.$route.params.id
    // db.collection('channels').doc(Gz4rtQBhs6tqewlOIdCA).collection('messages')
    // .onSnapshot((snapshot) =>{
    //   snapshot.docChanges().forEach((change) =>{
    //     const doc = change.doc
    //     if(change.type === 'added'){
    //       this.messages.push(doc.data())
    //     }
    //   })
    // })

    db.collection('channels').doc(Gz4rtQBhs6tqewlOIdCA).collection('messages')
    .onSnapshot((snapshot) =>{
      snapshot.docChanges().forEach((change) =>{
        const doc = change.doc
        if(change.type === 'added'){
          this.messages.push(doc.data())
        }
      })
    })
  }
}

</script>

<style>

</style>
