<template>
  <v-ons-page>
    <div id="app">
      <div class="main">
        <!-- スマホ用ヘッダー部 -->
        <div class="dummyheader"></div>
        <v-ons-back-button>マイページ</v-ons-back-button>
        <ons-toolbar class="mypageheader pageBack-icon green">
          <div class="center">マイゲームを編集</div>
        </ons-toolbar>
        <!-- スマホ用ヘッダー部  end-->
        <div class="mypage-maincontents">
          <div class="mygame-form-wrap">
            <div class="search-box">
              <ons-search-input
                placeholder="ゲームタイトルでさがす"
                onchange="ons.notification.alert('Searched for: ' + this.value)"
              ></ons-search-input>
              <div
                class="searchOption"
                onclick="document.getElementById('myNavigator').pushPage('')"
              >
                <img src alt />
              </div>
            </div>
          </div>
          <div class="mygfame-list">
            <div class="gray-back">
              <div class="mygame-card">
                <div class="card-icon">
                  <img src alt />
                </div>
                <div class="card-info">
                  <span>モンスターハンターワールド</span>
                  <div class="mygame-info-detail">
                    <span class="fa-user-wrap">
                      <i class="fas fa-user"></i>10
                    </span>
                    <span class="fa-users-wrap">
                      <i class="fas fa-user"></i>99
                    </span>
                  </div>
                </div>
              </div>
              <div class="mygame-card">
                <div class="card-icon">
                  <img src alt />
                </div>
                <div class="card-info">
                  <span>モンスターハンターワールド</span>
                  <div class="mygame-info-detail">
                    <span class="fa-user-wrap">
                      <i class="fas fa-user"></i>10000
                    </span>
                    <span class="fa-users-wrap">
                      <i class="fas fa-user"></i>99000
                    </span>
                  </div>
                </div>
              </div>
              <div class="mygame-card">
                <div class="card-icon">
                  <img src alt />
                </div>
                <div class="card-info">
                  <span>モンスターハンターワールド</span>
                  <div class="mygame-info-detail">
                    <span class="fa-user-wrap">
                      <i class="fas fa-user"></i>10000
                    </span>
                    <span class="fa-users-wrap">
                      <i class="fas fa-user"></i>99999999
                    </span>
                  </div>
                </div>
              </div>
            </div>
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
  key: "key_mygameedit"
};
</script>
