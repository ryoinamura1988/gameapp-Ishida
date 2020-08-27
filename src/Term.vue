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
          <div class="center">利用規約</div>
        </ons-toolbar>
        <!-- スマホ用ヘッダー部  end-->
        <div class="mypage-maincontents">
          <div class="term-wrap">
            <div class="term-ttl">第１章 総則</div>
            <div class="term-subttl">第1条（本規則の目的及び適用）</div>
            <div class="term-txt">
              <p>１。本利用規約は、xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
            </div>
            <div class="term-subttl">第2条（定義）</div>
            <div class="term-txt">
              <p>１.本規約について、xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
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
  key: "key_term"
};
</script>
