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
            <div class="center">ブックマーク一覧</div>
        </ons-toolbar>
        <!-- スマホ用ヘッダー部  end-->
        <div class="mypage-maincontents">
            ここにブックマークしたitem系を表示一覧
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
    key: 'key_bookmark',
  
}
</script>