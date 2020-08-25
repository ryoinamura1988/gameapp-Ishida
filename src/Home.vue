     <!-- ホーム＞フォローのページ -->
      <template id="home_follow.html">
  <ons-page id="home_follow">
    <div class="tabbarArea">空のタブバー</div>

    <!-- 投稿追加ボタン -->
    <ons-fab
      position="bottom right"
      class="btn-addpost"
      onclick="document.getElementById('myNavigator').pushPage('home_follow_tl-post.html')"
    >
      <i class="fas fa-plus"></i>
    </ons-fab>

    <div class="userlist follow">
      <div class="user online">
        <img src="img/followIcon.png" alt class="user-img" />
      </div>
      <div class="user offline">
        <img src="img/followIcon.png" alt />
      </div>
      <div class="user online">
        <img src="img/followIcon.png" alt />
      </div>
      <div class="user online">
        <img src="img/followIcon.png" alt />
      </div>
      <div class="user online">
        <img src="img/followIcon.png" alt />
      </div>
      <div class="user offline">
        <img src="img/followIcon.png" alt />
      </div>
    </div>
    <!-- followUserlist -->

    <!-- タイムライン表示 -->
    <div class="timeline follow">
      <div class="ttlBox">
        <div class="ttl">タイムライン</div>
        <div
          class="sort"
          　tappable
          modifier="longdivider"
          onclick="ons.openActionSheet({ buttons: ['最新順', 'いいね順', '超いいね順', 'フォロワー順', 'Cancel'], cancelable: true })"
        >最新順</div>
      </div>
      <!-- ttlBox -->

      <div class="tlContents follow">
        <div
          class="item"
          onclick="document.getElementById('myNavigator').pushPage('home_follow_tl-detail.html')"
        >
          <div class="imgBox">
            <img src="img/tlImg.png" alt />
          </div>
          <div class="txtBox">僕は蠱毒使いにはスタミナ系と攻撃系の旋律を優先…</div>
          <div class="userBox">
            <div class="icon">
              <img src="img/tlUser.png" alt />
            </div>
            <div class="name">ふぇぐ</div>
            <div class="nice">
              <i class="fas fa-heart"></i>
            </div>
            <!-- nice -->
            <div
              class="retweet"
              onclick="document.getElementById('myNavigator').pushPage('home_follow_tl-retweet.html')"
            >
              <i class="fas fa-retweet"></i>
            </div>
            <!-- retweet -->
          </div>
          <!-- userBox -->
        </div>
        <!-- item -->

        <div
          class="item"
          onclick="document.getElementById('myNavigator').pushPage('home_follow_tl-detail.html')"
        >
          <div class="imgBox">
            <img src="img/tlImg.png" alt />
          </div>
          <div class="txtBox">僕は蠱毒使いにはスタミナ系と攻撃系の旋律を優先…</div>
          <div class="userBox">
            <div class="icon">
              <img src="img/tlUser.png" alt />
            </div>
            <div class="name">ふぇぐ</div>
            <div class="nice">
              <i class="fas fa-heart"></i>
            </div>
            <!-- nice -->
            <div class="retweet">
              <i class="fas fa-retweet"></i>
            </div>
            <!-- retweet -->
          </div>
          <!-- userBox -->
        </div>
        <!-- item -->

        <div
          class="item"
          onclick="document.getElementById('myNavigator').pushPage('home_follow_tl-detail.html')"
        >
          <div class="imgBox">
            <img src="img/tlImg.png" alt />
          </div>
          <div class="txtBox">僕は蠱毒使いにはスタミナ系と攻撃系の旋律を優先…</div>
          <div class="userBox">
            <div class="icon">
              <img src="img/tlUser.png" alt />
            </div>
            <div class="name">ふぇぐ</div>
            <div class="nice">
              <i class="fas fa-heart"></i>
            </div>
            <!-- nice -->
            <div class="retweet">
              <i class="fas fa-retweet"></i>
            </div>
            <!-- retweet -->
          </div>
          <!-- userBox -->
        </div>
        <!-- item -->

        <div
          class="item"
          onclick="document.getElementById('myNavigator').pushPage('home_follow_tl-detail.html')"
        >
          <div class="imgBox">
            <img src="img/tlImg.png" alt />
          </div>
          <div class="txtBox">僕は蠱毒使いにはスタミナ系と攻撃系の旋律を優先…</div>
          <div class="userBox">
            <div class="icon">
              <img src="img/tlUser.png" alt />
            </div>
            <div class="name">ふぇぐ</div>
            <div class="nice">
              <i class="fas fa-heart"></i>
            </div>
            <!-- nice -->
            <div class="retweet">
              <i class="fas fa-retweet"></i>
            </div>
            <!-- retweet -->
          </div>
          <!-- userBox -->
        </div>
        <!-- item -->
      </div>
      <!-- contents -->
    </div>
    <!-- timeline -->
  </ons-page>
</template>
      <!-- home_follow.html -->
