import Vue from "vue";
import Router from "vue-router";
import Account from "Account";
import Chat from "Chat";
import Test from "Test";
import Mainmenu from "Mainmenu";
import Mypage from "Mypage";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", component: Mainmenu },
    { path: "/account", component: Account },
    { path: "/mypage", component: mypage },
  ],
});
