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
          <div class="center">ステータス設定</div>
        </ons-toolbar>
        <!-- スマホ用ヘッダー部  end-->
        <div class="mypage-maincontents">
          <div class="gray-back">
            <div class="ss-ttl">ステータス設定</div>
            <div class="ss-box">
              <label class="radio-button radio-button--material status-online-label">
                オンライン
                <input
                  type="radio"
                  class="radio-button__input radio-button--material__input"
                  name="r"
                  checked="checked"
                />
                <div class="radio-button__checkmark radio-button--material__checkmark"></div>
              </label>
              <label class="radio-button radio-button--material status-offline-label">
                オフライン
                <input
                  type="radio"
                  class="radio-button__input radio-button--material__input"
                  name="r"
                  checked="checked"
                />
                <div class="radio-button__checkmark radio-button--material__checkmark"></div>
              </label>
            </div>
            <div class="ss-ttl">オプション</div>
            <ul class="list pb-25">
              <li class="list-item list-item--tappable option-list">
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
                <label for="checkbox1" class="list-item__center">一定時間後にステータスを”オフライン”にする</label>
              </li>
              <form action="#" class="option-setting-wrap">
                <label for class="option-setting-label">時間設定</label>
                <ons-select id="choose-sel" onchange="editSelects(event)">
                  <option value="2">2分</option>
                  <option value="5">5分</option>
                  <option value="10">10分</option>
                  <option value="15">15分</option>
                  <option value="30">30分</option>
                  <option value="60">60分</option>
                </ons-select>
              </form>
              <li class="list-item list-item--tappable option-list">
                <div class="list-item__left">
                  <label class="checkbox">
                    <input type="checkbox" id="checkbox2" class="checkbox__input" name="c" />
                    <div class="checkbox__checkmark"></div>
                  </label>
                </div>
                <label for="checkbox2" class="list-item__center">次の時間帯は自動でステータスを”オフライン”にする</label>
              </li>
              <form action="#" class="option-setting-wrap">
                <ons-select id="choose-sel" onchange="editSelects(event)">
                  <option value="0">0時</option>
                  <option value="1">1時</option>
                  <option value="2">2時</option>
                  <option value="3">3時</option>
                  <option value="4">4時</option>
                  <option value="5">5時</option>
                  <option value="6">6時</option>
                  <option value="7">7時</option>
                  <option value="8">8時</option>
                  <option value="9">9時</option>
                  <option value="10">10時</option>
                  <option value="11">11時</option>
                  <option value="12">12時</option>
                  <option value="13">13時</option>
                  <option value="14">14時</option>
                  <option value="15">15時</option>
                  <option value="16">16時</option>
                  <option value="17">17時</option>
                  <option value="18">18時</option>
                  <option value="19">19時</option>
                  <option value="20">20時</option>
                  <option value="21">21時</option>
                  <option value="22">22時</option>
                  <option value="23">23時</option>
                </ons-select>
                <span class="side-margin">〜</span>
                <ons-select id="choose-sel" onchange="editSelects(event)">
                  <option value="0">0時</option>
                  <option value="1">1時</option>
                  <option value="2">2時</option>
                  <option value="3">3時</option>
                  <option value="4">4時</option>
                  <option value="5">5時</option>
                  <option value="6">6時</option>
                  <option value="7">7時</option>
                  <option value="8">8時</option>
                  <option value="9">9時</option>
                  <option value="10">10時</option>
                  <option value="11">11時</option>
                  <option value="12">12時</option>
                  <option value="13">13時</option>
                  <option value="14">14時</option>
                  <option value="15">15時</option>
                  <option value="16">16時</option>
                  <option value="17">17時</option>
                  <option value="18">18時</option>
                  <option value="19">19時</option>
                  <option value="20">20時</option>
                  <option value="21">21時</option>
                  <option value="22">22時</option>
                  <option value="23">23時</option>
                </ons-select>
              </form>
            </ul>
            <p style="margin-top: 86.5px; text-align: center;">
              <ons-button class="setting-button" onclick="login()">設定する</ons-button>
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
  key: "key_statussetting"
};
</script>
