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
          <div class="center">通知設定</div>
        </ons-toolbar>
        <!-- スマホ用ヘッダー部  end-->
        <div class="mypage-maincontents">
          <div class="gray-back">
            <ons-list>
              <ons-list-item>
                <div class="center">プッシュ通知を受け取る</div>
                <div class="right">
                  <ons-switch></ons-switch>
                </div>
              </ons-list-item>
            </ons-list>
            <p>プッシュ通知の対象</p>
            <ul class="list">
              <li class="list-item list-item--chevron">
                <div @click="pushroomnotification" class="list-item__center">対象ルームの設定</div>
              </li>
              <li class="list-item list-item--chevron">
                <div @click="pushfriendnotification" class="list-item__center">対象フレンドの設定</div>
              </li>
              <li class="list-item list-item--chevron">
                <div @click="pusheventnotification" class="list-item__center">対象イベントの設定</div>
              </li>
            </ul>
            <ons-list>
              <ons-list-item>
                <div class="center">プッシュ通知を受け取る</div>
                <div class="right">
                  <ons-switch></ons-switch>
                </div>
              </ons-list-item>
            </ons-list>
          </div>
        </div>
      </div>
    </div>
    <!-- /main -->
  </v-ons-page>
</template>


<script>
import app from "./App";
import RoomNotification from "roomnotification";
import FriendNotification from "friendnotification";
import EventNotification from "eventnotification";

export default {
  methods: {
    pop() {
      this.pageStack.pop();
    },
    pushroomnotification() {
      this.pageStack.push(RoomNotification);
    },
    pushfriendnotification() {
      this.pageStack.push(FriendNotification);
    },
    pusheventnotification() {
      this.pageStack.push(EventNotification);
    }
  },
  props: ["pageStack"],
  components: {},
  key: "key_notificationsetting"
};
</script>
