<template>
  <div id="app">
    <v-ons-page>
      <!-- <v-ons-toolbar>
        <div class="center">{{ title }}</div>
      </v-ons-toolbar>-->

      <v-ons-tabbar position="auto" :tabs="tabs" :visible="true" :index.sync="activeIndex"></v-ons-tabbar>
    </v-ons-page>
  </div>
</template>

<script>
// import settingsPage from 'Settings';
import homePage from "Home";
import newsPage from "News";
import chat from "Chat";
import test from "Test";
import Account from "Account";
import MypageNavi from "MypageNavi";

// firebase モジュール
import firebase from "firebase";
// 改行を <br> タグに変換するモジュール
import Nl2br from "vue-nl2br";
export default {
  components: {
    Nl2br,
    chat,
    homePage,
    newsPage,
    test,
    MypageNavi
  },

  data() {
    return {
      activeIndex: 0,
      tabs: [
        {
          icon: this.md() ? null : "ion-home",
          label: "Home",
          page: homePage
        },
        {
          icon: this.md() ? null : "ion-chat",
          label: "Chat",
          page: chat
        },
        {
          icon: this.md() ? null : "ion-ios-bell",
          label: "News",
          page: newsPage,
          badge: 3
        },
        {
          icon: this.md() ? null : "ion-ios-MypageNavi",
          label: "Mypage",
          page: MypageNavi
        },
        {
          icon: this.md() ? null : "ion-ios-test",
          label: "Test",
          page: test
        }
      ]
    };
  },
  methods: {
    md() {
      return this.$ons.platform.isAndroid();
    }
  },
  computed: {
    title() {
      return this.tabs[this.activeIndex].label;
    }
  }
};
</script>
