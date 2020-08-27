<template>
  <v-ons-page>
    <div class="main">
      <!-- スマホ用ヘッダー部 -->
      <div class="dummyheader"></div>
      <ons-toolbar class="mypageheader">
        <div class="center">マイページ</div>
      </ons-toolbar>
      <!-- スマホ用ヘッダー部  end-->
      <div class="mypage-maincontents">
        <div class="mypage-thum">
          <img class="thumImg" />
        </div>
        <div class="mypage-icon-wrapper">
          <div class="mypage-icon-circle">
            <img class="mypage-icon-img" src alt />
          </div>
        </div>
        <div class="item-boxes">
          <a @click="pushfollow" class="item-box">
            <span class="item-number">0</span>
            <span class="item-label">フォロー</span>
          </a>
          <a @click="pushfollower" class="item-box">
            <span class="item-number">0</span>
            <span class="item-label">フォロワー</span>
          </a>
          <a @click="pushfriend" class="item-box">
            <span class="item-number">0</span>
            <span class="item-label">フレンド</span>
          </a>
          <a @click="pushroom" class="item-box">
            <span class="item-number">0</span>
            <span class="item-label">ルーム</span>
          </a>
          <a class="item-box" href>
            <span class="item-number">0</span>
            <span class="item-label">イベント</span>
          </a>
        </div>
        <div class="content-gap"></div>
        <div class="mygame-wrap">
          <p>マイゲーム</p>
          <div class="mygame-item-wrap">
            <div class="mygame-icon-wrap">
              <div class="mygame-icon">
                <img src alt />
              </div>
              <div class="mygame-icon">
                <img src alt />
              </div>
              <div class="mygame-icon">
                <img src alt />
              </div>
              <div class="mygame-icon">
                <img src alt />
              </div>
              <div class="mygame-icon">
                <img src alt />
              </div>
              <div class="mygame-icon">
                <img src alt />
              </div>
              <div class="mygame-icon">
                <img src alt />
              </div>
              <div class="mygame-icon">
                <img src alt />
              </div>
            </div>
            <button @click="pushmygameedit" class="add-mygame">
              <i class="fas fa-plus-circle"></i>
            </button>
          </div>
        </div>
        <div class="content-gap"></div>
        <div @click="pushstatussetting" class="status-wrap">
          <span>ステータス設定</span>
          <a class="status-online">オンライン</a>
        </div>
        <div class="content-gap"></div>
        <div class="mypage-detail-wrap">
          <a @click="pushprofile" class="mypage-detail">
            <i class="fas fa-user"></i>
            <span>プロフィール</span>
          </a>
          <a @click="pushbookmark" class="mypage-detail">
            <i class="fas fa-bookmark"></i>
            <span>ブックマーク</span>
          </a>
          <a @click="pushaccount" class="mypage-detail">
            <i class="fas fa-address-card"></i>
            <span>アカウント</span>
          </a>
          <a @click="pushnotificationsetting" class="mypage-detail">
            <i class="fas fa-bell"></i>
            <span>通知設定</span>
          </a>
        </div>
        <div class="content-gap"></div>
        <div class="mypage-help-wrap">
          <a @click="pushhelp" class="mypage-help">
            <i class="fas fa-question-circle"></i>
            <span>ヘルプ</span>
          </a>
          <a @click="pushappinfo" class="mypage-help">
            <i class="fas fa-info-circle"></i>
            <span>アプリ情報・利用規約</span>
          </a>
        </div>
      </div>
    </div>
    <!-- /main -->

    <!-- <script src="js/script.js"></script> -->
  </v-ons-page>
</template>



<script>
import Account from "Account";
import Bookmark from "Bookmark";
import Profile from "Profile";
import StatusSetting from "StatusSetting";
import MyGameEdit from "MyGameEdit";
import Follow from "Follow";
import Follower from "Follower";
import Room from "Room";
import NotificationSetting from "NotificationSetting";
import Help from "Help";
import AppInfo from "AppInfo";
import Friend from "Friend";

export default {
  methods: {
    pop() {
      this.pageStack.pop();
    },
    push() {
      this.pageStack.push(page2);
    },
    pushprofile() {
      this.pageStack.push(Profile);
    },
    pushbookmark() {
      this.pageStack.push(Bookmark);
    },
    pushaccount() {
      this.pageStack.push(Account);
    },
    pushstatussetting() {
      this.pageStack.push(StatusSetting);
    },
    pushmygameedit() {
      this.pageStack.push(MyGameEdit);
    },
    pushfollow() {
      this.pageStack.push(Follow);
    },
    pushfollower() {
      this.pageStack.push(Follower);
    },
    pushroom() {
      this.pageStack.push(Room);
    },
    pushnotificationsetting() {
      this.pageStack.push(NotificationSetting);
    },
    pushhelp() {
      this.pageStack.push(Help);
    },
    pushappinfo() {
      this.pageStack.push(AppInfo);
    },
    pushfriend() {
      this.pageStack.push(Friend);
    }
  },
  props: ["pageStack"],
  components: {},
  key: "key_mypage"
};
</script>




<style>
@import "./css/reset.css";
@import "./css/style.css";
@import "./css/mypage.css";
</style>
