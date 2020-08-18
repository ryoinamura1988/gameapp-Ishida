<template>
  <v-ons-page>
    <custom-toolbar>Page 1</custom-toolbar>
    <p style="text-align: center">
      This is the first page
      <v-ons-button @click="push">Push Page 2</v-ons-button>
      <v-ons-button @click="pushaccount">Push Account!</v-ons-button>
    </p>
  </v-ons-page>
</template>

<script>
  import customToolbar from './CustomToolbar';
  import page2 from './Page2';
  import Account from 'Account';

  export default {
     methods: {
       pop(){
         this.pageStack.pop();
       },
       push() {
         this.pageStack.push(page2);
       },
       pushaccount() {
         this.pageStack.push(Account);
       }
     },
     props: ['pageStack'],
     components: { customToolbar },
     key: 'key_page1',
  }
</script>
