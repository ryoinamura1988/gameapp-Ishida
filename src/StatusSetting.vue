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
                <div class="center">ステータス設定</div>
            </ons-toolbar>
            <!-- スマホ用ヘッダー部  end-->
            <div class="mypage-maincontents">
                <div class="gray-back">
                <div class="ss-ttl">ステータス設定</div>
                <div class="ss-box">
                    <label class="radio-button radio-button--material status-online">
                    オンライン
                    <input
                        type="radio"
                        class="radio-button__input radio-button--material__input"
                        name="r"
                        checked="checked"
                    />
                    <div
                        class="radio-button__checkmark radio-button--material__checkmark"
                    ></div>
                    </label>
                    <label class="radio-button radio-button--material status-offline">
                    オフライン
                    <input
                        type="radio"
                        class="radio-button__input radio-button--material__input"
                        name="r"
                        checked="checked"
                    />
                    <div
                        class="radio-button__checkmark radio-button--material__checkmark"
                    ></div>
                    </label>
                </div>
                <div class="ss-ttl">オプション</div>
                <ul class="list">
                    <li class="list-item list-item--tappable">
                    <div class="list-item__left">
                        <label class="checkbox">
                        <input
                            type="checkbox"
                            id="checkbox1"
                            class="checkbox__input"
                            name="c"
                            checked="checked"
                        />
                        <div class="checkbox__checkmark"></div>
                        </label>
                    </div>
                    <label for="checkbox1" class="list-item__center">
                        一定時間後にステータスを”オフライン”にする
                    </label>
                    </li>
                    <li class="list-item list-item--tappable">
                    <div class="list-item__left">
                        <label class="checkbox">
                        <input
                            type="checkbox"
                            id="checkbox2"
                            class="checkbox__input"
                            name="c"
                        />
                        <div class="checkbox__checkmark"></div>
                        </label>
                    </div>
                    <label for="checkbox2" class="list-item__center">
                        次の時間帯は自動でステータスを”オフライン”にする
                    </label>
                    </li>
                </ul>
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
    key: 'key_statussetting',

}
</script>