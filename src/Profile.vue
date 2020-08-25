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
          <div class="center">プロフィール設定</div>
        </ons-toolbar>
        <!-- スマホ用ヘッダー部  end-->
        <div class="mypage-maincontents">
          <div class="gray-back">
            <div class="mypage-thum">
              <img class="thumImg" src="/www/img/tlImg.png" alt />
              <!-- /www/img/tlImg.png -->
            </div>
            <div class="mypage-icon-wrapper">
              <div class="mypage-icon-circle">
                <img class="mypage-icon-img" src="/www/img/tlImg.png" alt />
                <!-- /www/img/tlImg.png -->
              </div>
            </div>
            <div class="mypage-subttl">ユーザ名</div>
            <ul class="list">
              <a href style="display: block;">
                <li class="list-item list-item--chevron">
                  <div class="list-item__center">きゃんゆう</div>
                </li>
              </a>
            </ul>
            <div class="mypage-subttl">自己紹介分</div>
            <ul class="list">
              <a href style="display: block;">
                <li class="list-item list-item--chevron profile-edit-list">
                  <div class="list-item__center scroll-style">
                    きゃんゆうといいます
                    <br />やかましい音楽が好きです
                    <br />
                  </div>
                </li>
              </a>
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
  key: "key_profile"
};
</script>
