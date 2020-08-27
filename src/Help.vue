  <template>
  <v-ons-page>
    <div id="app">
      <div class="main">
        <!-- スマホ用ヘッダー部 -->
        <div class="dummyheader"></div>
        <v-ons-back-button>マイページ</v-ons-back-button>
        <ons-toolbar class="mypageheader pageBack-icon green">
          <div class="center">ヘルプ</div>
        </ons-toolbar>
        <!-- スマホ用ヘッダー部  end-->
        <div class="mypage-maincontents">
          <div class="gray-back">
            <ul class="list">
              <li class="list-item list-item--chevron">
                <div @click="pushguide" class="list-item__center">ご利用ガイド</div>
              </li>
              <li class="list-item list-item--chevron">
                <div @click="pushfaq" class="list-item__center">よくある質問</div>
              </li>
              <li class="list-item list-item--chevron">
                <div class="list-item__center">お問い合わせ</div>
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
import Guide from "Guide";
import Faq from "Faq";

export default {
  methods: {
    pop() {
      this.pageStack.pop();
    },
    pushguide() {
      this.pageStack.push(Guide);
    },
    pushfaq() {
      this.pageStack.push(Faq);
    }
  },
  props: ["pageStack"],
  components: {},
  key: "key_help"
};
</script>
