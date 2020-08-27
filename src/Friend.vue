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
          <div class="center">フレンド</div>
        </ons-toolbar>
        <!-- スマホ用ヘッダー部  end-->
        <div class="mypage-maincontents">
          <div class="gray-back">
            <ul class="list-items">
              <li class="list-item">
                <img src="/www/img/tlImg.png" alt class="account-img" />
                <div class="item-detail">
                  <p class="account-name">あああああ</p>
                  <p
                    class="account-message"
                  >ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ</p>
                </div>
                <div class="item-meta">
                  <p class="message-time">18:55</p>
                  <div class="unread-number-wrao">
                    <p class="unread-number">1</p>
                  </div>
                </div>
              </li>
              <li class="list-item">
                <img src="/www/img/tlImg.png" alt class="account-img" />
                <div class="item-detail">
                  <p class="account-name">あああああ</p>
                  <p
                    class="account-message"
                  >ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ</p>
                </div>
                <div class="item-meta">
                  <p class="message-time">18:55</p>
                  <div class="unread-number-wrao">
                    <p class="unread-number">1</p>
                  </div>
                </div>
              </li>
              <li class="list-item">
                <img src="/www/img/tlImg.png" alt class="account-img" />
                <div class="item-detail">
                  <p class="account-name">あああああ</p>
                  <p
                    class="account-message"
                  >ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ</p>
                </div>
                <div class="item-meta">
                  <p class="message-time">18:55</p>
                  <div class="unread-number-wrao">
                    <p class="unread-number">1</p>
                  </div>
                </div>
              </li>
              <li class="list-item">
                <img src="/www/img/tlImg.png" alt class="account-img" />
                <div class="item-detail">
                  <p class="account-name">あああああ</p>
                  <p
                    class="account-message"
                  >ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ</p>
                </div>
                <div class="item-meta">
                  <p class="message-time">18:55</p>
                  <div class="unread-number-wrao">
                    <p class="unread-number">1</p>
                  </div>
                </div>
              </li>
              <li class="list-item">
                <img src="/www/img/tlImg.png" alt class="account-img" />
                <div class="item-detail">
                  <p class="account-name">あああああ</p>
                  <p
                    class="account-message"
                  >ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ</p>
                </div>
                <div class="item-meta">
                  <p class="message-time">18:55</p>
                  <div class="unread-number-wrao">
                    <p class="unread-number">1</p>
                  </div>
                </div>
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
  key: "key_friend"
};
</script>
