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
            </div> -->
            <div class="center">マイゲームを編集</div>
        </ons-toolbar>
        <!-- スマホ用ヘッダー部  end-->
        <div class="mypage-maincontents">
            <div class="mygame-form-wrap">
            <p style="text-align: center; margin-top: 10px;">
                <ons-search-input
                placeholder="Search"
                onchange="ons.notification.alert('Searched for: ' + this.value)"
                ></ons-search-input>
            </p>
            </div>
            <div class="mygame-newEdit">
            <i class="fas fa-plus"></i>
            <span>「新しいゲームタイトル」を新規追加</span>
            </div>
            <div class="createdGame-wrap">
            <div class="createdGame-card">
                <div class="card-icon">
                <img src="/www/img/tlImg.png" alt="" />
                </div>
                <div class="card-info">
                <span>モンスターハンターワールド</span>
                <div class="mygame-info-detail">
                    <span><i class="fas fa-user"></i>100000</span>
                    <span><i class="fas fa-user"></i>999999</span>
                </div>
                </div>
            </div>
            <p style="margin-top: 86.5px; text-align: center;">
                <ons-button class="setting-button" onclick="login()"
                >設定する</ons-button
                >
            </p>
            </div>
        </div>
        </div>
  </div>
    <!-- /main -->
  </v-ons-page>
</template>


<script>
  import app from './App';

  export default {
    methods: {
      pop() {
        this.pageStack.pop();
      } 
    },
    props: ['pageStack'],
    components: {  },
    key: 'key_mygameedit'
  }
</script>