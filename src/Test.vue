<template>
    <v-ons-page>
        <p>アババババ馬場b</p>
            <v-ons-navigator :page-stack="pageStack">
                <component :is="page" v-for="page in pageStack" :key="page.key" :page-stack="pageStack"></component>
            </v-ons-navigator>
    </v-ons-page>

</template>

<script>
  import page1 from './Page1';
  import page2 from './Page2';
  import Account from 'Account';

  export default {
    data() {
      return {
        pageStack: [page1]
      }
    }
  }
</script>
