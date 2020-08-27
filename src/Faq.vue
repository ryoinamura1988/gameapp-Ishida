  <template>
  <v-ons-page>
    <div id="app">
      <div class="main">
        <!-- スマホ用ヘッダー部 -->
        <div class="dummyheader"></div>
        <v-ons-back-button>マイページ</v-ons-back-button>

        <ons-toolbar class="mypageheader pageBack-icon green">
          <div class="center">よくある質問</div>
        </ons-toolbar>
        <!-- スマホ用ヘッダー部  end-->
        <div class="mypage-maincontents">
          <div class="gray-back">
            <ul class="list">
              <li class="list-item list-item--chevron">
                <div class="list-item__center">パスワード再設定方法</div>
              </li>
              <li class="list-item list-item--chevron">
                <div class="list-item__center">ユーザー名の変更方法</div>
              </li>
              <li class="list-item list-item--chevron">
                <div class="list-item__center">退会方法</div>
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
  key: "key_faq"
};
</script>
