<template>
    <v-ons-page>
        <div id="app">
            <v-ons-navigator :page-stack="pageStack">
                <component :is="page" v-for="page in pageStack" :key="page.key" :page-stack="pageStack"></component>
            </v-ons-navigator>
        </div>
    </v-ons-page>
</template>

<script>
  import Account from 'Account';
  import Mypage from 'Mypage';


  export default {
    data() {
      return {
        pageStack: [Mypage]
      }
    }
  }
</script>

