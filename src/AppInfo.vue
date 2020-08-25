  <template>
  <v-ons-page>
    <div id="app">
      <div class="main">
        <!-- スマホ用ヘッダー部 -->
        <div class="dummyheader"></div>
        <ons-toolbar class="mypageheader pageBack-icon green">
          <!-- <div class="left">
          <ons-icon icon="far-times-circle"></ons-icon>
          </div>-->
          <div class="center">アカウント</div>
        </ons-toolbar>
        <!-- スマホ用ヘッダー部  end-->
        <div class="mypage-maincontents">
          <div class="gray-back">
            <ul class="list">
              <li class="list-item list-item--chevron">
                <div class="list-item__center">利用規約</div>
              </li>
              <li class="list-item list-item--chevron">
                <div class="list-item__center">プライバシーポリシー</div>
              </li>
            </ul>
            <ul class="list">
              <li class="list-item">
                <div class="list-item__center">バージョン</div>
                <div class="list-item__right">
                  <div class="list-item__label">1.00.0</div>
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
  key: "key_appinfo"
};
</script>
