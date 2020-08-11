<template>
  <v-ons-page>
    <div id="app">
        <div class="main">
            <!-- スマホ用ヘッダー部 -->
            <div class="chat-header">
                <a href="javascript:history.back()" class="page-back-icon">
                <i class="fas fa-chevron-left"></i>
                </a>
                <div class="chat-name-wrap">
                <img class="chat-icon" src="" alt="" />
                <p>{{ user.displayName }}</p>
                </div>
                <a class="chat-searchIcon">
                <i class="fas fa-search"></i>
                </a>

                <!-- ログイン時にはフォームとログアウトボタンを表示 -->
                <div v-if="user.uid" key="login">
                    [{{ user.displayName }}]
                    <button type="button" @click="doLogout">ログアウト</button>
                </div>
                <!-- 未ログイン時にはログインボタンを表示 -->
                <div v-else key="logout">
                    <button type="button" @click="doLogin">ログイン</button>
                </div>

            </div>

            <div class="chat-dummyheader"></div>

            <div class="chat-mainArea">
                <div class="companion-wrap">
                <img class="companion-icon" src="" alt="" />
                <div class="message-balloon companion-message">
                    最近、激戦区降りで即死するのが趣味だから、気を使って激戦区刺した後、「死んでクリュ！」って言うとみんなついてくる…
                </div>
                <div class="send-time">18:55</div>
                </div>

                <div class="myself-wrap">
                <div class="send-time">18:55</div>
                <div class="message-balloon myself-message">
                    最近、激戦区降りで即死するのが趣味だから、気を使って激戦区刺した後、「死んでクリュ！」って言うとみんなついてくる…
                </div>
                </div>

            </div>


             <!--　Firebase から取得したリストを描画（トランジション付き）　-->
            <transition-group name="chat" tag="div" class="list content">
                <section v-for="{ key, name, image, message } in chat" :key="key" class="item">
                    <div class="companion-wrap">
                      <div class="item-image"><img class="companion-icon"  :src="image" width="35" height="35" margin-right="7.5px">
                      </div>
                      <div class="item-detail">
                        <div class="item-message message-balloon myself-message">
                            <nl2br tag="div" :text="message"/>
                        </div>
                      </div>
                    </div>
                </section>
            </transition-group>


            <div class="chat-dummyFooter"></div>

            <div class="chat-footer">
                
                <form action="" @submit.prevent="doSend" class="chat-form">
                    <textarea
                        v-model="input"
                        :disabled="!user.uid"
                        @keydown.enter.exact.prevent="doSend"
                        class="chat-textarea"
                        rows="1"
                        placeholder="Aa"
                    >
                    </textarea>
                    
                    <button type="submit" :disabled="!user.uid" class="submit-btn">投稿</button>
                </form>

                <button class="expantion-btn chat-btn">
                    <i class="fas fa-expand-alt"></i>
                </button>
                </div>
                <div class="chat-optionBar">
                <button class="chat-btn"><i class="fas fa-plus"></i></button>
                <button class="chat-btn"><i class="fas fa-camera"></i></button>
                <button class="chat-btn"><i class="far fa-image"></i></button>
                </div>
            </div>
        </div>
    </div>
  </v-ons-page>
</template>



<script>


// firebase モジュール
import firebase from 'firebase'
// 改行を <br> タグに変換するモジュール
import Nl2br from 'vue-nl2br'
export default {
  components: { Nl2br },
  data() {
    return {
      user: {},  // ユーザー情報
      chat: [],  // 取得したメッセージを入れる配列
      input: ''  // 入力したメッセージ
    }
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      this.user = user ? user : {}
      const ref_message = firebase.database().ref('message')
      if (user) {
        this.chat = []
        // message に変更があったときのハンドラを登録
        ref_message.limitToLast(10).on('child_added', this.childAdded)
      } else {
        // message に変更があったときのハンドラを解除
        ref_message.limitToLast(10).off('child_added', this.childAdded)
      }
    })
  },
  methods: {
    // ログイン処理
    doLogin() {
      const provider = new firebase.auth.TwitterAuthProvider()
      firebase.auth().signInWithPopup(provider)
    },
    // ログアウト処理
    doLogout() {
      firebase.auth().signOut()
    },
    // スクロール位置を一番下に移動
    scrollBottom() {
      this.$nextTick(() => {
        window.scrollTo(0, document.body.clientHeight)
      })
    },
    // 受け取ったメッセージをchatに追加
    // データベースに新しい要素が追加されると随時呼び出される
    childAdded(snap) {
      const message = snap.val()
      this.chat.push({
        key: snap.key,
        name: message.name,
        image: message.image,
        message: message.message
      })
      this.scrollBottom()
    },
    doSend() {
      if (this.user.uid && this.input.length) {
        // firebase にメッセージを追加
        firebase.database().ref('message').push({
          message: this.input,
          name: this.user.displayName,
          image: this.user.photoURL
        }, () => {
          this.input = '' // フォームを空にする
        })
      }
    }
  }
}

</script>



<style scoped>
    .chat-header {
    height: 55px;
    width: 100%;
    display: flex;
    background-color: #fff;
    position: fixed;
    justify-content: space-between;
    align-items: center;
    }

    .page-back-icon {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    }

    .chat-name-wrap {
    position: relative;
    flex: 0 0 auto;
    }

    .chat-icon {
    position: absolute;
    width: 35px;
    height: 35px;
    top: 50%;
    left: -25px;
    transform: translate(-50%, -50%);
    }

    .chat-searchIcon {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0 0 auto;
    }

    .chat-dummyheader {
    height: 55px;
    }

    .chat-mainArea {
    /* background-image: url(../img/chat-bg.png); */
    height: calc(100vh - 60px);
    overflow: scroll;
    }

    .companion-wrap {
    display: flex;
    flex-flow: row;
    padding: 10px 5px;
    }

    img.companion-icon {
    width: 35px;
    height: 35px;
    margin-right: 7.5px;
    border-radius: 50%;
    }
    .message-balloon {
    max-width: 100%;
    border-radius: 25px;
    padding: 12.5px 14px;
    font-weight: normal;
    font-size: 15px;
    }

    .companion-message {
    background-color: #fff;
    }

    .myself-message {
    background-color: #caff98;
    }

    .myself-wrap {
    display: flex;
    flex-flow: row;
    padding: 10px 18px;
    justify-content: flex-end;
    }

    .send-time {
    place-self: flex-end;
    font-size: 11px;
    font-weight: normal;
    padding: 0px 10px;
    }

    .chat-footer {
    position: fixed;
    bottom: 0;
    background-color: #fff;
    height: auto;
    width: 100%;
    padding: 14px 10px 5px 27.5px;
    box-sizing: border-box;
    z-index: 100;
    }

    .chat-form {
    position: relative;
    display: flex;
    align-items: center;
    padding-bottom: 5px;
    }

    .chat-textarea {
    width: 82.5%;
    bottom: 0;
    height: 37.5px;
    display: inline-flex;
    align-items: center;
    resize: none;
    border: solid 0.1px #acacac;
    background-color: #f6f7fb;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 15px;
    }

    .chat-btn {
    border: none;
    background-color: transparent;
    font-size: 25px;
    padding: 0px 5px;
    color: #a2a2a2;
    }

    .submit-btn {
    margin-left: auto;
    color: #00cf00;
    border: none;
    background-color: transparent;
    font-size: 15px;
    }

    .chat-optionBar {
    display: flex;
    flex-flow: row;
    }

    .expantion-btn {
    width: 15%;
    height: 37.5px;
    font-weight: 600;
    }

    .chat-dummyFooter {
    height: 60px;
    }

</style>