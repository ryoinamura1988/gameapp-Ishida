<template>
  <v-ons-page>
    <div class="app">
      <div class="main">
        <!-- スマホ用ヘッダー部 -->
        <div class="dummyheader"></div>
        <v-ons-back-button>マイページ</v-ons-back-button>

        <ons-toolbar class="mypageheader pageBack-icon green">
          <!-- <div class="left">
          <ons-icon icon="far-times-circle"></ons-icon>
          </div>-->
          <div class="center">アカウント</div>
        </ons-toolbar>
        <!-- スマホ用ヘッダー部  end-->
        <div class="mypage-maincontents">
          <div id="mypage-account-wrap" class="gray-back">
            <ul class="list">
              <li class="list-item list-item--chevron">
                <div class="list-item__center">メールアドレス</div>
                <div class="list-item__right list-item--chevron__right">
                  <div class="list-item__label">gameapp@game.app</div>
                </div>
              </li>
              <li class="list-item list-item--chevron">
                <div class="list-item__center">電話番号</div>
                <div class="list-item__right list-item--chevron__right">
                  <div class="list-item__label">080-****-****</div>
                </div>
              </li>
            </ul>
            <div class="content-gap"></div>
            <ul class="list">
              <li class="list-item list-item--chevron">
                <div class="list-item__center">パスワード</div>
              </li>
            </ul>
            <div class="content-gap-25"></div>
            <ons-list>
              <ons-list-item>
                <div class="center">フォロー・フォロワーを公開する</div>
                <div class="right">
                  <ons-switch></ons-switch>
                </div>
              </ons-list-item>
              <ons-list-item>
                <div class="center">フレンドを公開する</div>
                <div class="right">
                  <ons-switch></ons-switch>
                </div>
              </ons-list-item>
            </ons-list>
            <div class="acount-ttl">アカウント連携</div>

            <ul class="sns-cooperation-list">
              <li class="cooperation-list-item">
                <img src alt />
                LINE
                <button>連携する</button>
              </li>
              <li class="cooperation-list-item">
                <img src alt />
                Twitter
                <button class="clicked">連携中</button>
              </li>
              <li class="cooperation-list-item">
                <img src alt />
                Google
                <button>連携する</button>
              </li>
              <li class="cooperation-list-item">
                <img src alt />
                Facebook
                <button>連携する</button>
              </li>
            </ul>
            <div class="content-gap-42"></div>

            <ul class="list">
              <li class="list-item list-item--chevron">
                <ons-button onclick="showTemplateDialog()" class="dialog-button">
                  <div class="list-item__center">ログアウト</div>
                </ons-button>

                <template id="dialog.html">
                  <ons-dialog id="my-dialog">
                    <div class="dialog-wrap">
                      <p class="dialog-ttl">ログアウト</p>
                      <p class="dialog-txt">現在のアカウントからログアウトしますか？</p>
                      <div class="logput-selecter">
                        <ons-button onclick="hideDialog('my-dialog')">キャンセル</ons-button>
                        <ons-button onclick="hideDialog('my-dialog')">OK</ons-button>
                      </div>
                    </div>
                  </ons-dialog>
                </template>
              </li>
            </ul>

            <div class="content-gap"></div>

            <ul class="list">
              <li class="list-item list-item--chevron">
                <ons-button onclick="showTemplateDialog()" class="dialog-button">
                  <div class="remove-accout-txt list-item__center">アカウント削除</div>
                </ons-button>
                <!-- dialog -->
                <template id="dialog.html">
                  <ons-dialog id="my-dialog">
                    <div class="dialog-wrap">
                      <p class="dialog-ttl remove-accout-txt">アカウント削除</p>
                      <p class="dialog-txt">
                        アカウントを削除すると、そのアカウントにログインできなくなります。
                        本当にアカウントを削除しますか？
                      </p>
                      <div class="logput-selecter">
                        <ons-button onclick="hideDialog('my-dialog')">キャンセル</ons-button>
                        <ons-button onclick="hideDialog('my-dialog')">OK</ons-button>
                      </div>
                    </div>
                  </ons-dialog>
                </template>
                <!-- /dialog -->
              </li>
            </ul>
            <p style="margin: 47.5px 0px 100px; text-align: center;">
              <ons-button class="setting-button" onclick="login()">変更する</ons-button>
            </p>
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
  key: "key_account"
};
</script>
