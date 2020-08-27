<template>
  <v-ons-page>
    <div id="app">
      <div class="main">
        <!-- スマホ用ヘッダー部 -->
        <div class="dummyheader"></div>
        <v-ons-back-button>マイページ</v-ons-back-button>

        <ons-toolbar class="mypageheader pageBack-icon green">
          <!-- <div class="left">
          <ons-icon icon="far-times-circle"></ons-icon>
          </div>-->
          <div class="center">対象ルームの設定</div>
        </ons-toolbar>
        <!-- スマホ用ヘッダー部  end-->
        <div class="mypage-maincontents">
          <div class="gray-back">
            <ul class="list-items">
              <li class="list-item">
                <img src alt class="account-img" />
                <div class="user-notification-detail">
                  <p class="follower-name">あああああああああ</p>
                </div>
                <button class="notification-icon green">
                  <i class="fas fa-check-circle"></i>
                </button>
              </li>
              <li class="list-item">
                <img src alt class="account-img" />
                <div class="user-notification-detail">
                  <p class="follower-name">あああああ</p>
                </div>
              </li>
              <li class="list-item">
                <img src alt class="account-img" />
                <div class="user-notification-detail">
                  <p class="follower-name">あああああ</p>
                </div>
              </li>
              <li class="list-item">
                <img src alt class="account-img" />
                <div class="user-notification-detail">
                  <p class="follower-name">あああああ</p>
                </div>
                <button class="notification-icon">
                  <i class="fas fa-check-circle"></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- /main -->
  </v-ons-page>
</template>


<script>
import app from "./App";

export default {
  methods: {
    pop() {
      this.pageStack.pop();
    }
  },
  props: ["pageStack"],
  components: {},
  key: "key_friendnotification"
};
</script>
