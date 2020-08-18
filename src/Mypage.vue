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
          <img class="thumImg" src="" alt="" />
          <!-- /www/img/tlImg.png -->
        </div>
        <div class="mypage-icon-wrapper">
          <div class="mypage-icon-circle">
            <img class="mypage-icon-img" src="" alt="" />
            <!-- /www/img/tlImg.png -->
          </div>
        </div>
        <div class="item-boxes">
          <div @click="pushfollow"  class="itemBox">
            <span class="item-number">0</span>
            <span class="item-label">フォロー</span>
          </div>
          <a class="itemBox" href="">
            <span class="item-number">0</span>
            <span class="item-label">フレンド</span>
          </a>
          <div @click="pushroom" class="itemBox">
            <span class="item-number">0</span>
            <span class="item-label">ルーム</span>
          </div>
          <a class="itemBox" href="">
            <span class="item-number">0</span>
            <span class="item-label">イベント</span>
          </a>
          <div @click="pushfollower" class="itemBox" >
            <span class="item-number">0</span>
            <span class="item-label">フォロワー</span>
          </div>
        </div>
        <div class="content-gap"></div>
        <div @click="pushmygameedit" class="mygame-wrap">
          <p>マイゲーム</p>
          <div class="mygane-icon-wrap" >
            <div class="mygame-icon">
              <img src="" alt="" />
            </div>
            <div class="mygame-icon">
              <img src="" alt="" />
            </div>
          </div>
        </div>
        <div class="content-gap"></div>
        <div @click="pushstatussetting"  class="status-wrap">
          <span>ステータス設定</span>
          <a class="status-offline" href="">オフライン</a>
        </div>
        <div class="content-gap"></div>
        <div class="mypage-detail-wrap">
          <div @click="pushprofile" class="mypage-detail" >
            <i class="fas fa-user"></i>
            <span>プロフィール</span>
            
          </div>
          <a @click="pushbookmark" class="mypage-detail">
            <i class="fas fa-bookmark"></i>
            <span>ブックマーク</span>
          </a>
          <a  @click="pushaccount"  class="mypage-detail">
            <i class="fas fa-address-card"></i>
            <span>アカウント</span>
          </a>
          <a class="mypage-detail" href="">
            <i class="fas fa-bell"></i>
            <span>通知設定</span>
          </a>
        </div>
        <div class="content-gap"></div>
        <div class="mypage-help-wrap">
          <a class="mypage-help" href="">
            <i class="fas fa-question-circle"></i>
            <span>ヘルプ</span>
          </a>
          <a class="mypage-help" href="">
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
  import Account from 'Account';
  import Bookmark from 'Bookmark';
  import Profile from 'Profile';
  import StatusSetting from 'StatusSetting';
  import MyGameEdit from 'MyGameEdit';
  import Follow from 'Follow';
  import Follower from 'Follower';
  import Room from 'Room';



  export default {
     methods: {
       pop(){
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
       }
      
     },
     props: ['pageStack'],
     components: {  },
     key: 'key_page1'
  }
</script>




<style>
  @import "./css/mypage.css";  
</style>


