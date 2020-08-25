(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  [
    ,
    ,
    ,
    ,
    ,
    function (t, a, s) {
      "use strict";
      s.r(a);
      var i = s(59),
        e = s(12);
      for (var n in e)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            s.d(a, t, function () {
              return e[t];
            });
          })(n);
      var c = s(1),
        l = Object(c.a)(e.default, i.a, i.b, !1, null, null, null);
      (l.options.__file = "src/App.vue"), (a.default = l.exports);
    },
    ,
    ,
    ,
    function (t, a, s) {
      "use strict";
      s.r(a);
      var i = s(54),
        e = s(27);
      for (var n in e)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            s.d(a, t, function () {
              return e[t];
            });
          })(n);
      var c = s(1),
        l = Object(c.a)(e.default, i.a, i.b, !1, null, null, null);
      (l.options.__file = "src/Account.vue"), (a.default = l.exports);
    },
    ,
    ,
    function (t, a, s) {
      "use strict";
      s.r(a);
      var i = s(13),
        e = s.n(i);
      for (var n in i)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            s.d(a, t, function () {
              return i[t];
            });
          })(n);
      a.default = e.a;
    },
    function (t, a, s) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 });
      var i = o(s(110)),
        e = o(s(81)),
        n = o(s(91)),
        c = o(s(92)),
        l = (o(s(9)), o(s(98))),
        r = (o(s(49)), o(s(50)));
      function o(t) {
        return t && t.__esModule ? t : { default: t };
      }
      a.default = {
        components: {
          Nl2br: r.default,
          chat: n.default,
          homePage: i.default,
          newsPage: e.default,
          test: c.default,
          MypageNavi: l.default,
        },
        data: function () {
          return {
            activeIndex: 0,
            tabs: [
              {
                icon: this.md() ? null : "ion-home",
                label: "Home",
                page: i.default,
              },
              {
                icon: this.md() ? null : "ion-chat",
                label: "Chat",
                page: n.default,
              },
              {
                icon: this.md() ? null : "ion-ios-bell",
                label: "News",
                page: e.default,
                badge: 3,
              },
              {
                icon: this.md() ? null : "ion-ios-MypageNavi",
                label: "Mypage",
                page: l.default,
              },
              {
                icon: this.md() ? null : "ion-ios-test",
                label: "Test",
                page: c.default,
              },
            ],
          };
        },
        methods: {
          md: function () {
            return this.$ons.platform.isAndroid();
          },
        },
        computed: {
          title: function () {
            return this.tabs[this.activeIndex].label;
          },
        },
      };
    },
    function (t, a, s) {
      "use strict";
      s.r(a);
      var i = s(15),
        e = s.n(i);
      for (var n in i)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            s.d(a, t, function () {
              return i[t];
            });
          })(n);
      a.default = e.a;
    },
    function (t, a, s) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 });
      var i = n(s(49)),
        e = n(s(50));
      function n(t) {
        return t && t.__esModule ? t : { default: t };
      }
      a.default = {
        components: { Nl2br: e.default },
        data: function () {
          return { user: {}, chat: [], input: "" };
        },
        created: function () {
          var t = this;
          i.default.auth().onAuthStateChanged(function (a) {
            t.user = a || {};
            var s = i.default.database().ref("message");
            a
              ? ((t.chat = []),
                s.limitToLast(10).on("child_added", t.childAdded))
              : s.limitToLast(10).off("child_added", t.childAdded);
          });
        },
        methods: {
          doLogin: function () {
            var t = new i.default.auth.TwitterAuthProvider();
            i.default.auth().signInWithPopup(t);
          },
          doLogout: function () {
            i.default.auth().signOut();
          },
          scrollBottom: function () {
            this.$nextTick(function () {
              window.scrollTo(0, document.body.clientHeight);
            });
          },
          childAdded: function (t) {
            var a = t.val();
            this.chat.push({
              key: t.key,
              name: a.name,
              image: a.image,
              message: a.message,
            }),
              this.scrollBottom();
          },
          doSend: function () {
            var t = this;
            this.user.uid &&
              this.input.length &&
              i.default
                .database()
                .ref("message")
                .push(
                  {
                    message: this.input,
                    name: this.user.displayName,
                    image: this.user.photoURL,
                  },
                  function () {
                    t.input = "";
                  }
                );
          },
        },
      };
    },
    function (t, a, s) {},
    function (t, a, s) {
      "use strict";
      s.r(a);
      var i = s(18),
        e = s.n(i);
      for (var n in i)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            s.d(a, t, function () {
              return i[t];
            });
          })(n);
      a.default = e.a;
    },
    function (t, a, s) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 });
      var i = n(s(49)),
        e = n(s(50));
      function n(t) {
        return t && t.__esModule ? t : { default: t };
      }
      a.default = {
        components: { Nl2br: e.default },
        data: function () {
          return { user: {}, chat: [], input: "" };
        },
        created: function () {
          var t = this;
          i.default.auth().onAuthStateChanged(function (a) {
            t.user = a || {};
            var s = i.default.database().ref("message");
            a
              ? ((t.chat = []),
                s.limitToLast(10).on("child_added", t.childAdded))
              : s.limitToLast(10).off("child_added", t.childAdded);
          });
        },
        methods: {
          doLogin: function () {
            var t = new i.default.auth.TwitterAuthProvider();
            i.default.auth().signInWithPopup(t);
          },
          doLogout: function () {
            i.default.auth().signOut();
          },
          scrollBottom: function () {
            this.$nextTick(function () {
              window.scrollTo(0, document.body.clientHeight);
            });
          },
          childAdded: function (t) {
            var a = t.val();
            this.chat.push({
              key: t.key,
              name: a.name,
              image: a.image,
              message: a.message,
            }),
              this.scrollBottom();
          },
          doSend: function () {
            var t = this;
            this.user.uid &&
              this.input.length &&
              i.default
                .database()
                .ref("message")
                .push(
                  {
                    message: this.input,
                    name: this.user.displayName,
                    image: this.user.photoURL,
                  },
                  function () {
                    t.input = "";
                  }
                );
          },
        },
      };
    },
    function (t, a, s) {
      "use strict";
      s.r(a);
      var i = s(20),
        e = s.n(i);
      for (var n in i)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            s.d(a, t, function () {
              return i[t];
            });
          })(n);
      a.default = e.a;
    },
    function (t, a, s) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 });
      var i = e(s(93));
      e(s(72)), e(s(9));
      function e(t) {
        return t && t.__esModule ? t : { default: t };
      }
      a.default = {
        data: function () {
          return { pageStack: [i.default] };
        },
      };
    },
    function (t, a, s) {
      "use strict";
      s.r(a);
      var i = s(22),
        e = s.n(i);
      for (var n in i)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            s.d(a, t, function () {
              return i[t];
            });
          })(n);
      a.default = e.a;
    },
    function (t, a, s) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 });
      var i = c(s(71)),
        e = c(s(72)),
        n = c(s(9));
      function c(t) {
        return t && t.__esModule ? t : { default: t };
      }
      a.default = {
        methods: {
          pop: function () {
            this.pageStack.pop();
          },
          push: function () {
            this.pageStack.push(e.default);
          },
          pushaccount: function () {
            this.pageStack.push(n.default);
          },
        },
        props: ["pageStack"],
        components: { customToolbar: i.default },
        key: "key_page1",
      };
    },
    function (t, a, s) {
      "use strict";
      s.r(a);
      var i = s(24),
        e = s.n(i);
      for (var n in i)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            s.d(a, t, function () {
              return i[t];
            });
          })(n);
      a.default = e.a;
    },
    function (t, a, s) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = { props: ["pop", "backLabel"] });
    },
    function (t, a, s) {
      "use strict";
      s.r(a);
      var i = s(26),
        e = s.n(i);
      for (var n in i)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            s.d(a, t, function () {
              return i[t];
            });
          })(n);
      a.default = e.a;
    },
    function (t, a, s) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 });
      var i = e(s(71));
      e(s(5));
      function e(t) {
        return t && t.__esModule ? t : { default: t };
      }
      a.default = {
        methods: {
          pop: function () {
            this.pageStack.pop();
          },
        },
        props: ["pageStack"],
        components: { customToolbar: i.default },
        key: "key_page2",
      };
    },
    function (t, a, s) {
      "use strict";
      s.r(a);
      var i = s(28),
        e = s.n(i);
      for (var n in i)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            s.d(a, t, function () {
              return i[t];
            });
          })(n);
      a.default = e.a;
    },
    function (t, a, s) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 });
      var i,
        e = s(5);
      (i = e) && i.__esModule;
      a.default = {
        methods: {
          pop: function () {
            this.pageStack.pop();
          },
        },
        props: ["pageStack"],
        components: {},
        key: "key_account",
      };
    },
    function (t, a, s) {
      "use strict";
      s.r(a);
      var i = s(30),
        e = s.n(i);
      for (var n in i)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            s.d(a, t, function () {
              return i[t];
            });
          })(n);
      a.default = e.a;
    },
    function (t, a, s) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 });
      e(s(9));
      var i = e(s(99));
      function e(t) {
        return t && t.__esModule ? t : { default: t };
      }
      a.default = {
        data: function () {
          return { pageStack: [i.default] };
        },
      };
    },
    function (t, a, s) {
      "use strict";
      s.r(a);
      var i = s(32),
        e = s.n(i);
      for (var n in i)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            s.d(a, t, function () {
              return i[t];
            });
          })(n);
      a.default = e.a;
    },
    function (t, a, s) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 });
      var i = v(s(9)),
        e = v(s(100)),
        n = v(s(101)),
        c = v(s(102)),
        l = v(s(103)),
        r = v(s(104)),
        o = v(s(105)),
        u = v(s(106));
      function v(t) {
        return t && t.__esModule ? t : { default: t };
      }
      a.default = {
        methods: {
          pop: function () {
            this.pageStack.pop();
          },
          push: function () {
            this.pageStack.push(page2);
          },
          pushprofile: function () {
            this.pageStack.push(n.default);
          },
          pushbookmark: function () {
            this.pageStack.push(e.default);
          },
          pushaccount: function () {
            this.pageStack.push(i.default);
          },
          pushstatussetting: function () {
            this.pageStack.push(c.default);
          },
          pushmygameedit: function () {
            this.pageStack.push(l.default);
          },
          pushfollow: function () {
            this.pageStack.push(r.default);
          },
          pushfollower: function () {
            this.pageStack.push(o.default);
          },
          pushroom: function () {
            this.pageStack.push(u.default);
          },
        },
        props: ["pageStack"],
        components: {},
        key: "key_page1",
      };
    },
    function (t, a, s) {
      "use strict";
      s.r(a);
      var i = s(34),
        e = s.n(i);
      for (var n in i)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            s.d(a, t, function () {
              return i[t];
            });
          })(n);
      a.default = e.a;
    },
    function (t, a, s) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 });
      var i,
        e = s(5);
      (i = e) && i.__esModule;
      a.default = {
        methods: {
          pop: function () {
            this.pageStack.pop();
          },
        },
        props: ["pageStack"],
        components: {},
        key: "key_bookmark",
      };
    },
    function (t, a, s) {
      "use strict";
      s.r(a);
      var i = s(36),
        e = s.n(i);
      for (var n in i)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            s.d(a, t, function () {
              return i[t];
            });
          })(n);
      a.default = e.a;
    },
    function (t, a, s) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 });
      var i,
        e = s(5);
      (i = e) && i.__esModule;
      a.default = {
        methods: {
          pop: function () {
            this.pageStack.pop();
          },
        },
        props: ["pageStack"],
        components: {},
        key: "key_profile",
      };
    },
    function (t, a, s) {
      "use strict";
      s.r(a);
      var i = s(38),
        e = s.n(i);
      for (var n in i)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            s.d(a, t, function () {
              return i[t];
            });
          })(n);
      a.default = e.a;
    },
    function (t, a, s) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 });
      var i,
        e = s(5);
      (i = e) && i.__esModule;
      a.default = {
        methods: {
          pop: function () {
            this.pageStack.pop();
          },
        },
        props: ["pageStack"],
        components: {},
        key: "key_statussetting",
      };
    },
    function (t, a, s) {
      "use strict";
      s.r(a);
      var i = s(40),
        e = s.n(i);
      for (var n in i)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            s.d(a, t, function () {
              return i[t];
            });
          })(n);
      a.default = e.a;
    },
    function (t, a, s) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 });
      var i,
        e = s(5);
      (i = e) && i.__esModule;
      a.default = {
        methods: {
          pop: function () {
            this.pageStack.pop();
          },
        },
        props: ["pageStack"],
        components: {},
        key: "key_mygameedit",
      };
    },
    function (t, a, s) {
      "use strict";
      s.r(a);
      var i = s(42),
        e = s.n(i);
      for (var n in i)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            s.d(a, t, function () {
              return i[t];
            });
          })(n);
      a.default = e.a;
    },
    function (t, a, s) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 });
      var i,
        e = s(5);
      (i = e) && i.__esModule;
      a.default = {
        methods: {
          pop: function () {
            this.pageStack.pop();
          },
        },
        props: ["pageStack"],
        components: {},
        key: "key_follow",
      };
    },
    function (t, a, s) {
      "use strict";
      s.r(a);
      var i = s(44),
        e = s.n(i);
      for (var n in i)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            s.d(a, t, function () {
              return i[t];
            });
          })(n);
      a.default = e.a;
    },
    function (t, a, s) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 });
      var i,
        e = s(5);
      (i = e) && i.__esModule;
      a.default = {
        methods: {
          pop: function () {
            this.pageStack.pop();
          },
        },
        props: ["pageStack"],
        components: {},
        key: "key_follower",
      };
    },
    function (t, a, s) {
      "use strict";
      s.r(a);
      var i = s(46),
        e = s.n(i);
      for (var n in i)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            s.d(a, t, function () {
              return i[t];
            });
          })(n);
      a.default = e.a;
    },
    function (t, a, s) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 });
      var i,
        e = s(5);
      (i = e) && i.__esModule;
      a.default = {
        methods: {
          pop: function () {
            this.pageStack.pop();
          },
        },
        props: ["pageStack"],
        components: {},
        key: "key_room",
      };
    },
    function (t, a, s) {},
    ,
    ,
    ,
    function (t, a, s) {
      "use strict";
      s.d(a, "a", function () {
        return i;
      }),
        s.d(a, "b", function () {
          return e;
        });
      var i = function () {
          var t = this.$createElement,
            a = this._self._c || t;
          return a(
            "v-ons-page",
            [
              a("custom-toolbar", { attrs: { "back-label": "Page 1" } }, [
                this._v("Page 2"),
              ]),
              this._v(" "),
              a("p", { staticStyle: { "text-align": "center" } }, [
                this._v("This is the second page"),
              ]),
            ],
            1
          );
        },
        e = [];
      i._withStripped = !0;
    },
    function (t, a, s) {
      "use strict";
      s.d(a, "a", function () {
        return i;
      }),
        s.d(a, "b", function () {
          return e;
        });
      var i = function () {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s("v-ons-page", [
            s("div", { attrs: { id: "app" } }, [
              s(
                "div",
                { staticClass: "main" },
                [
                  s("div", { staticClass: "chat-header" }, [
                    s(
                      "a",
                      {
                        staticClass: "page-back-icon",
                        attrs: { href: "javascript:history.back()" },
                      },
                      [s("i", { staticClass: "fas fa-chevron-left" })]
                    ),
                    t._v(" "),
                    s("div", { staticClass: "chat-name-wrap" }, [
                      s("img", {
                        staticClass: "chat-icon",
                        attrs: { src: "", alt: "" },
                      }),
                      t._v(" "),
                      s("p", [t._v(t._s(t.user.displayName))]),
                    ]),
                    t._v(" "),
                    s("a", { staticClass: "chat-searchIcon" }, [
                      s("i", { staticClass: "fas fa-search" }),
                    ]),
                    t._v(" "),
                    t.user.uid
                      ? s("div", { key: "login" }, [
                          t._v(
                            "\n                  [" +
                              t._s(t.user.displayName) +
                              "]\n                  "
                          ),
                          s(
                            "button",
                            {
                              attrs: { type: "button" },
                              on: { click: t.doLogout },
                            },
                            [t._v("ログアウト")]
                          ),
                        ])
                      : s("div", { key: "logout" }, [
                          s(
                            "button",
                            {
                              attrs: { type: "button" },
                              on: { click: t.doLogin },
                            },
                            [t._v("ログイン")]
                          ),
                        ]),
                  ]),
                  t._v(" "),
                  s("div", { staticClass: "chat-dummyheader" }),
                  t._v(" "),
                  s("div", { staticClass: "chat-mainArea" }, [
                    s("div", { staticClass: "companion-wrap" }, [
                      s("img", {
                        staticClass: "companion-icon",
                        attrs: { src: "", alt: "" },
                      }),
                      t._v(" "),
                      s(
                        "div",
                        { staticClass: "message-balloon companion-message" },
                        [
                          t._v(
                            "\n                  最近、激戦区降りで即死するのが趣味だから、気を使って激戦区刺した後、「死んでクリュ！」って言うとみんなついてくる…\n              "
                          ),
                        ]
                      ),
                      t._v(" "),
                      s("div", { staticClass: "send-time" }, [t._v("18:55")]),
                    ]),
                    t._v(" "),
                    s("div", { staticClass: "myself-wrap" }, [
                      s("div", { staticClass: "send-time" }, [t._v("18:55")]),
                      t._v(" "),
                      s(
                        "div",
                        { staticClass: "message-balloon myself-message" },
                        [
                          t._v(
                            "\n                  最近、激戦区降りで即死するのが趣味だから、気を使って激戦区刺した後、「死んでクリュ！」って言うとみんなついてくる…\n              "
                          ),
                        ]
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  s(
                    "transition-group",
                    {
                      staticClass: "list content",
                      attrs: { name: "chat", tag: "div" },
                    },
                    t._l(t.chat, function (a) {
                      var i = a.key,
                        e = (a.name, a.image),
                        n = a.message;
                      return s("section", { key: i, staticClass: "item" }, [
                        s("div", { staticClass: "companion-wrap" }, [
                          s("div", { staticClass: "item-image" }, [
                            s("img", {
                              staticClass: "companion-icon",
                              attrs: {
                                src: e,
                                width: "35",
                                height: "35",
                                "margin-right": "7.5px",
                              },
                            }),
                          ]),
                          t._v(" "),
                          s("div", { staticClass: "myself-wrap" }, [
                            s("div", { staticClass: "item-detail" }, [
                              s(
                                "div",
                                {
                                  staticClass:
                                    "item-message message-balloon myself-message",
                                },
                                [
                                  s("nl2br", {
                                    attrs: { tag: "div", text: n },
                                  }),
                                ],
                                1
                              ),
                            ]),
                          ]),
                        ]),
                      ]);
                    }),
                    0
                  ),
                  t._v(" "),
                  s("div", { staticClass: "chat-dummyFooter" }),
                  t._v(" "),
                  s("div", { staticClass: "chat-footer" }, [
                    s(
                      "form",
                      {
                        staticClass: "chat-form",
                        attrs: { action: "" },
                        on: {
                          submit: function (a) {
                            return a.preventDefault(), t.doSend(a);
                          },
                        },
                      },
                      [
                        s("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: t.input,
                              expression: "input",
                            },
                          ],
                          staticClass: "chat-textarea",
                          attrs: {
                            disabled: !t.user.uid,
                            rows: "1",
                            placeholder: "Aa",
                          },
                          domProps: { value: t.input },
                          on: {
                            keydown: function (a) {
                              return (!a.type.indexOf("key") &&
                                t._k(a.keyCode, "enter", 13, a.key, "Enter")) ||
                                a.ctrlKey ||
                                a.shiftKey ||
                                a.altKey ||
                                a.metaKey
                                ? null
                                : (a.preventDefault(), t.doSend(a));
                            },
                            input: function (a) {
                              a.target.composing || (t.input = a.target.value);
                            },
                          },
                        }),
                        t._v(" "),
                        s(
                          "button",
                          {
                            staticClass: "submit-btn",
                            attrs: { type: "submit", disabled: !t.user.uid },
                          },
                          [t._v("投稿")]
                        ),
                      ]
                    ),
                    t._v(" "),
                    s("button", { staticClass: "expantion-btn chat-btn" }, [
                      s("i", { staticClass: "fas fa-expand-alt" }),
                    ]),
                  ]),
                  t._v(" "),
                  s("div", { staticClass: "chat-optionBar" }, [
                    s("button", { staticClass: "chat-btn" }, [
                      s("i", { staticClass: "fas fa-plus" }),
                    ]),
                    t._v(" "),
                    s("button", { staticClass: "chat-btn" }, [
                      s("i", { staticClass: "fas fa-camera" }),
                    ]),
                    t._v(" "),
                    s("button", { staticClass: "chat-btn" }, [
                      s("i", { staticClass: "far fa-image" }),
                    ]),
                  ]),
                ],
                1
              ),
            ]),
          ]);
        },
        e = [];
      i._withStripped = !0;
    },
    function (t, a, s) {
      "use strict";
      s.d(a, "a", function () {
        return i;
      }),
        s.d(a, "b", function () {
          return e;
        });
      var i = function () {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s("v-ons-page", [
            s(
              "div",
              { attrs: { id: "app" } },
              [
                s(
                  "v-ons-navigator",
                  { attrs: { "page-stack": t.pageStack } },
                  t._l(t.pageStack, function (a) {
                    return s(a, {
                      key: a.key,
                      tag: "component",
                      attrs: { "page-stack": t.pageStack },
                    });
                  }),
                  1
                ),
              ],
              1
            ),
          ]);
        },
        e = [];
      i._withStripped = !0;
    },
    function (t, a, s) {
      "use strict";
      s.d(a, "a", function () {
        return i;
      }),
        s.d(a, "b", function () {
          return e;
        });
      var i = function () {
          var t = this,
            a = t.$createElement,
            i = t._self._c || a;
          return i("v-ons-page", [
            i("div", { attrs: { id: "app" } }, [
              i(
                "div",
                { staticClass: "main" },
                [
                  i("div", { staticClass: "dummyheader" }),
                  t._v(" "),
                  i("v-ons-back-button", [t._v("マイページ")]),
                  t._v(" "),
                  i(
                    "ons-toolbar",
                    { staticClass: "mypageheader pageBack-icon green" },
                    [i("div", { staticClass: "center" }, [t._v("アカウント")])]
                  ),
                  t._v(" "),
                  i("div", { staticClass: "mypage-maincontents" }, [
                    i(
                      "div",
                      { staticClass: "gray-back" },
                      [
                        i("ul", { staticClass: "list" }, [
                          i(
                            "li",
                            { staticClass: "list-item list-item--chevron" },
                            [
                              i("div", { staticClass: "list-item__center" }, [
                                t._v("メールアドレス"),
                              ]),
                              t._v(" "),
                              i(
                                "div",
                                {
                                  staticClass:
                                    "list-item__right list-item--chevron__right",
                                },
                                [
                                  i(
                                    "div",
                                    { staticClass: "list-item__label" },
                                    [t._v("gameapp@game.app")]
                                  ),
                                ]
                              ),
                            ]
                          ),
                          t._v(" "),
                          i(
                            "li",
                            { staticClass: "list-item list-item--chevron" },
                            [
                              i("div", { staticClass: "list-item__center" }, [
                                t._v("電話番号"),
                              ]),
                              t._v(" "),
                              i(
                                "div",
                                {
                                  staticClass:
                                    "list-item__right list-item--chevron__right",
                                },
                                [
                                  i(
                                    "div",
                                    { staticClass: "list-item__label" },
                                    [t._v("080-****-****")]
                                  ),
                                ]
                              ),
                            ]
                          ),
                        ]),
                        t._v(" "),
                        i("ul", { staticClass: "list" }, [
                          i(
                            "li",
                            { staticClass: "list-item list-item--chevron" },
                            [
                              i("div", { staticClass: "list-item__center" }, [
                                t._v("パスワード"),
                              ]),
                            ]
                          ),
                        ]),
                        t._v(" "),
                        i(
                          "ons-list",
                          [
                            i("ons-list-item", [
                              i("div", { staticClass: "center" }, [
                                t._v(
                                  "\n                  フォロー・フォロワーを公開する\n              "
                                ),
                              ]),
                              t._v(" "),
                              i(
                                "div",
                                { staticClass: "right" },
                                [i("ons-switch")],
                                1
                              ),
                            ]),
                            t._v(" "),
                            i("ons-list-item", [
                              i("div", { staticClass: "center" }, [
                                t._v(
                                  "\n                  フレンドを公開する\n              "
                                ),
                              ]),
                              t._v(" "),
                              i(
                                "div",
                                { staticClass: "right" },
                                [i("ons-switch")],
                                1
                              ),
                            ]),
                          ],
                          1
                        ),
                        t._v(" "),
                        i("p", [t._v("アカウント連携")]),
                        t._v(" "),
                        i("ul", { staticClass: "sns-cooperation-list" }, [
                          i("li", { staticClass: "cooperation-list-item" }, [
                            i("img", { attrs: { src: s(94), alt: "" } }),
                            t._v("\n              LINE\n              "),
                            i("button", [
                              t._v(
                                "\n                  連携する\n              "
                              ),
                            ]),
                          ]),
                          t._v(" "),
                          i("li", { staticClass: "cooperation-list-item" }, [
                            i("img", { attrs: { src: s(95), alt: "" } }),
                            t._v("\n              Twitter\n              "),
                            i("button", { staticClass: "clicked" }, [
                              t._v(
                                "\n                  連携中\n              "
                              ),
                            ]),
                          ]),
                          t._v(" "),
                          i("li", { staticClass: "cooperation-list-item" }, [
                            i("img", { attrs: { src: s(96), alt: "" } }),
                            t._v("\n              Google\n              "),
                            i("button", [
                              t._v(
                                "\n                  連携する\n              "
                              ),
                            ]),
                          ]),
                          t._v(" "),
                          i("li", { staticClass: "cooperation-list-item" }, [
                            i("img", { attrs: { src: s(97), alt: "" } }),
                            t._v("\n              Facebook\n              "),
                            i("button", [
                              t._v(
                                "\n                  連携する\n              "
                              ),
                            ]),
                          ]),
                        ]),
                        t._v(" "),
                        i("ul", { staticClass: "list" }, [
                          i(
                            "li",
                            { staticClass: "list-item list-item--chevron" },
                            [
                              i("div", { staticClass: "list-item__center" }, [
                                t._v("ログアウト"),
                              ]),
                            ]
                          ),
                        ]),
                        t._v(" "),
                        i("ul", { staticClass: "list" }, [
                          i(
                            "li",
                            { staticClass: "list-item list-item--chevron" },
                            [
                              i("div", { staticClass: "list-item__center" }, [
                                t._v("アカウント削除"),
                              ]),
                            ]
                          ),
                        ]),
                      ],
                      1
                    ),
                  ]),
                ],
                1
              ),
            ]),
          ]);
        },
        e = [];
      i._withStripped = !0;
    },
    function (t, a, s) {
      "use strict";
      s.d(a, "a", function () {
        return i;
      }),
        s.d(a, "b", function () {
          return e;
        });
      var i = function () {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s("v-ons-page", [
            s(
              "div",
              { attrs: { id: "app" } },
              [
                s("header", { staticClass: "header" }, [
                  s("h1", [t._v("Chat")]),
                  t._v(" "),
                  t.user.uid
                    ? s("div", { key: "login" }, [
                        t._v(
                          "\n        [" +
                            t._s(t.user.displayName) +
                            "]\n        "
                        ),
                        s(
                          "button",
                          {
                            attrs: { type: "button" },
                            on: { click: t.doLogout },
                          },
                          [t._v("ログアウト")]
                        ),
                      ])
                    : s("div", { key: "logout" }, [
                        s(
                          "button",
                          {
                            attrs: { type: "button" },
                            on: { click: t.doLogin },
                          },
                          [t._v("ログイン")]
                        ),
                      ]),
                ]),
                t._v(" "),
                s(
                  "transition-group",
                  {
                    staticClass: "list content",
                    attrs: { name: "chat", tag: "div" },
                  },
                  t._l(t.chat, function (a) {
                    var i = a.key,
                      e = a.name,
                      n = a.image,
                      c = a.message;
                    return s("section", { key: i, staticClass: "item" }, [
                      s("div", { staticClass: "item-image" }, [
                        s("img", {
                          attrs: { src: n, width: "40", height: "40" },
                        }),
                      ]),
                      t._v(" "),
                      s("div", { staticClass: "item-detail" }, [
                        s("div", { staticClass: "item-name" }, [t._v(t._s(e))]),
                        t._v(" "),
                        s(
                          "div",
                          { staticClass: "item-message" },
                          [s("nl2br", { attrs: { tag: "div", text: c } })],
                          1
                        ),
                      ]),
                    ]);
                  }),
                  0
                ),
                t._v(" "),
                s(
                  "form",
                  {
                    staticClass: "form",
                    attrs: { action: "" },
                    on: {
                      submit: function (a) {
                        return a.preventDefault(), t.doSend(a);
                      },
                    },
                  },
                  [
                    s("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: t.input,
                          expression: "input",
                        },
                      ],
                      attrs: { disabled: !t.user.uid },
                      domProps: { value: t.input },
                      on: {
                        keydown: function (a) {
                          return (!a.type.indexOf("key") &&
                            t._k(a.keyCode, "enter", 13, a.key, "Enter")) ||
                            a.ctrlKey ||
                            a.shiftKey ||
                            a.altKey ||
                            a.metaKey
                            ? null
                            : (a.preventDefault(), t.doSend(a));
                        },
                        input: function (a) {
                          a.target.composing || (t.input = a.target.value);
                        },
                      },
                    }),
                    t._v(" "),
                    s(
                      "button",
                      {
                        staticClass: "send-button",
                        attrs: { type: "submit", disabled: !t.user.uid },
                      },
                      [t._v("Send")]
                    ),
                  ]
                ),
              ],
              1
            ),
          ]);
        },
        e = [];
      i._withStripped = !0;
    },
    function (t, a, s) {
      "use strict";
      s.d(a, "a", function () {
        return i;
      }),
        s.d(a, "b", function () {
          return e;
        });
      var i = function () {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s(
            "v-ons-page",
            [
              s("p", [t._v("アババババ馬場b")]),
              t._v(" "),
              s(
                "v-ons-navigator",
                { attrs: { "page-stack": t.pageStack } },
                t._l(t.pageStack, function (a) {
                  return s(a, {
                    key: a.key,
                    tag: "component",
                    attrs: { "page-stack": t.pageStack },
                  });
                }),
                1
              ),
            ],
            1
          );
        },
        e = [];
      i._withStripped = !0;
    },
    function (t, a, s) {
      "use strict";
      s.d(a, "a", function () {
        return i;
      }),
        s.d(a, "b", function () {
          return e;
        });
      var i = function () {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s(
            "v-ons-page",
            [
              s("custom-toolbar", [t._v("Page 1")]),
              t._v(" "),
              s(
                "p",
                { staticStyle: { "text-align": "center" } },
                [
                  t._v("\n    This is the first page\n    "),
                  s("v-ons-button", { on: { click: t.push } }, [
                    t._v("Push Page 2"),
                  ]),
                  t._v(" "),
                  s("v-ons-button", { on: { click: t.pushaccount } }, [
                    t._v("Push Account!"),
                  ]),
                ],
                1
              ),
            ],
            1
          );
        },
        e = [];
      i._withStripped = !0;
    },
    function (t, a, s) {
      "use strict";
      s.d(a, "a", function () {
        return i;
      }),
        s.d(a, "b", function () {
          return e;
        });
      var i = function () {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s("v-ons-page", [
            s(
              "div",
              { staticClass: "main" },
              [
                s("div", { staticClass: "dummyheader" }),
                t._v(" "),
                s("ons-toolbar", { staticClass: "mypageheader" }, [
                  s("div", { staticClass: "center" }, [t._v("マイページ")]),
                ]),
                t._v(" "),
                s("div", { staticClass: "mypage-maincontents" }, [
                  s("div", { staticClass: "mypage-thum" }, [
                    s("img", {
                      staticClass: "thumImg",
                      attrs: { src: "", alt: "" },
                    }),
                  ]),
                  t._v(" "),
                  s("div", { staticClass: "mypage-icon-wrapper" }, [
                    s("div", { staticClass: "mypage-icon-circle" }, [
                      s("img", {
                        staticClass: "mypage-icon-img",
                        attrs: { src: "", alt: "" },
                      }),
                    ]),
                  ]),
                  t._v(" "),
                  s("div", { staticClass: "item-boxes" }, [
                    s(
                      "div",
                      { staticClass: "itemBox", on: { click: t.pushfollow } },
                      [
                        s("span", { staticClass: "item-number" }, [t._v("0")]),
                        t._v(" "),
                        s("span", { staticClass: "item-label" }, [
                          t._v("フォロー"),
                        ]),
                      ]
                    ),
                    t._v(" "),
                    s("a", { staticClass: "itemBox", attrs: { href: "" } }, [
                      s("span", { staticClass: "item-number" }, [t._v("0")]),
                      t._v(" "),
                      s("span", { staticClass: "item-label" }, [
                        t._v("フレンド"),
                      ]),
                    ]),
                    t._v(" "),
                    s(
                      "div",
                      { staticClass: "itemBox", on: { click: t.pushroom } },
                      [
                        s("span", { staticClass: "item-number" }, [t._v("0")]),
                        t._v(" "),
                        s("span", { staticClass: "item-label" }, [
                          t._v("ルーム"),
                        ]),
                      ]
                    ),
                    t._v(" "),
                    s("a", { staticClass: "itemBox", attrs: { href: "" } }, [
                      s("span", { staticClass: "item-number" }, [t._v("0")]),
                      t._v(" "),
                      s("span", { staticClass: "item-label" }, [
                        t._v("イベント"),
                      ]),
                    ]),
                    t._v(" "),
                    s(
                      "div",
                      { staticClass: "itemBox", on: { click: t.pushfollower } },
                      [
                        s("span", { staticClass: "item-number" }, [t._v("0")]),
                        t._v(" "),
                        s("span", { staticClass: "item-label" }, [
                          t._v("フォロワー"),
                        ]),
                      ]
                    ),
                  ]),
                  t._v(" "),
                  s("div", { staticClass: "content-gap" }),
                  t._v(" "),
                  s(
                    "div",
                    {
                      staticClass: "mygame-wrap",
                      on: { click: t.pushmygameedit },
                    },
                    [
                      s("p", [t._v("マイゲーム")]),
                      t._v(" "),
                      s("div", { staticClass: "mygane-icon-wrap" }, [
                        s("div", { staticClass: "mygame-icon" }, [
                          s("img", { attrs: { src: "", alt: "" } }),
                        ]),
                        t._v(" "),
                        s("div", { staticClass: "mygame-icon" }, [
                          s("img", { attrs: { src: "", alt: "" } }),
                        ]),
                      ]),
                    ]
                  ),
                  t._v(" "),
                  s("div", { staticClass: "content-gap" }),
                  t._v(" "),
                  s(
                    "div",
                    {
                      staticClass: "status-wrap",
                      on: { click: t.pushstatussetting },
                    },
                    [
                      s("span", [t._v("ステータス設定")]),
                      t._v(" "),
                      s(
                        "a",
                        { staticClass: "status-offline", attrs: { href: "" } },
                        [t._v("オフライン")]
                      ),
                    ]
                  ),
                  t._v(" "),
                  s("div", { staticClass: "content-gap" }),
                  t._v(" "),
                  s("div", { staticClass: "mypage-detail-wrap" }, [
                    s(
                      "div",
                      {
                        staticClass: "mypage-detail",
                        on: { click: t.pushprofile },
                      },
                      [
                        s("i", { staticClass: "fas fa-user" }),
                        t._v(" "),
                        s("span", [t._v("プロフィール")]),
                      ]
                    ),
                    t._v(" "),
                    s(
                      "a",
                      {
                        staticClass: "mypage-detail",
                        on: { click: t.pushbookmark },
                      },
                      [
                        s("i", { staticClass: "fas fa-bookmark" }),
                        t._v(" "),
                        s("span", [t._v("ブックマーク")]),
                      ]
                    ),
                    t._v(" "),
                    s(
                      "a",
                      {
                        staticClass: "mypage-detail",
                        on: { click: t.pushaccount },
                      },
                      [
                        s("i", { staticClass: "fas fa-address-card" }),
                        t._v(" "),
                        s("span", [t._v("アカウント")]),
                      ]
                    ),
                    t._v(" "),
                    s(
                      "a",
                      { staticClass: "mypage-detail", attrs: { href: "" } },
                      [
                        s("i", { staticClass: "fas fa-bell" }),
                        t._v(" "),
                        s("span", [t._v("通知設定")]),
                      ]
                    ),
                  ]),
                  t._v(" "),
                  s("div", { staticClass: "content-gap" }),
                  t._v(" "),
                  s("div", { staticClass: "mypage-help-wrap" }, [
                    s(
                      "a",
                      { staticClass: "mypage-help", attrs: { href: "" } },
                      [
                        s("i", { staticClass: "fas fa-question-circle" }),
                        t._v(" "),
                        s("span", [t._v("ヘルプ")]),
                      ]
                    ),
                    t._v(" "),
                    s(
                      "a",
                      { staticClass: "mypage-help", attrs: { href: "" } },
                      [
                        s("i", { staticClass: "fas fa-info-circle" }),
                        t._v(" "),
                        s("span", [t._v("アプリ情報・利用規約")]),
                      ]
                    ),
                  ]),
                ]),
              ],
              1
            ),
          ]);
        },
        e = [];
      i._withStripped = !0;
    },
    function (t, a, s) {
      "use strict";
      s.d(a, "a", function () {
        return i;
      }),
        s.d(a, "b", function () {
          return e;
        });
      var i = function () {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s(
            "div",
            { attrs: { id: "app" } },
            [
              s(
                "v-ons-page",
                [
                  s("v-ons-toolbar", [
                    s("div", { staticClass: "center" }, [t._v(t._s(t.title))]),
                  ]),
                  t._v(" "),
                  s("v-ons-tabbar", {
                    attrs: {
                      position: "auto",
                      tabs: t.tabs,
                      visible: !0,
                      index: t.activeIndex,
                    },
                    on: {
                      "update:index": function (a) {
                        t.activeIndex = a;
                      },
                    },
                  }),
                ],
                1
              ),
            ],
            1
          );
        },
        e = [];
      i._withStripped = !0;
    },
    function (t, a, s) {
      "use strict";
      s.d(a, "a", function () {
        return i;
      }),
        s.d(a, "b", function () {
          return e;
        });
      var i = function () {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s("v-ons-page", [
            s("div", { attrs: { id: "app" } }, [
              s(
                "div",
                { staticClass: "main" },
                [
                  s("div", { staticClass: "dummyheader" }),
                  t._v(" "),
                  s("v-ons-back-button", [t._v("マイページ")]),
                  t._v(" "),
                  s(
                    "ons-toolbar",
                    { staticClass: "mypageheader pageBack-icon green" },
                    [
                      s("div", { staticClass: "center" }, [
                        t._v("フォローリスト"),
                      ]),
                    ]
                  ),
                  t._v(" "),
                  s("div", { staticClass: "mypage-maincontents" }, [
                    s("div", { staticClass: "gray-back" }, [
                      s("ul", { staticClass: "list-items" }, [
                        s("li", { staticClass: "community-list-item" }, [
                          s("img", {
                            staticClass: "community-img",
                            attrs: { src: "/www/img/tlImg.png", alt: "" },
                          }),
                          t._v(" "),
                          s("div", { staticClass: "community-details" }, [
                            s("p", { staticClass: "community-category" }, [
                              t._v("モンスターハンター"),
                            ]),
                            t._v(" "),
                            s("p", { staticClass: "community-name" }, [
                              t._v(
                                "\n                  【総合】モンスターハンター：ワールド\n                  "
                              ),
                            ]),
                            t._v(" "),
                            s("div", { staticClass: "community-meta" }, [
                              s("span", [
                                s("i", { staticClass: "fas fa-user" }),
                                t._v("100000"),
                              ]),
                              t._v(" "),
                              s("span", [
                                s("i", { staticClass: "far fa-clock" }),
                                t._v("18:50"),
                              ]),
                            ]),
                          ]),
                        ]),
                        t._v(" "),
                        s("li", { staticClass: "community-list-item" }, [
                          s("img", {
                            staticClass: "community-img",
                            attrs: { src: "/www/img/tlImg.png", alt: "" },
                          }),
                          t._v(" "),
                          s("div", { staticClass: "community-details" }, [
                            s("p", { staticClass: "community-category" }, [
                              t._v("モンスターハンター"),
                            ]),
                            t._v(" "),
                            s("p", { staticClass: "community-name" }, [
                              t._v(
                                "\n                  【総合】モンスターハンター：ワールド\n                  "
                              ),
                            ]),
                            t._v(" "),
                            s("div", { staticClass: "community-meta" }, [
                              s("span", [
                                s("i", { staticClass: "fas fa-user" }),
                                t._v("100000"),
                              ]),
                              t._v(" "),
                              s("span", [
                                s("i", { staticClass: "far fa-clock" }),
                                t._v("18:50"),
                              ]),
                            ]),
                          ]),
                        ]),
                        t._v(" "),
                        s("li", { staticClass: "community-list-item" }, [
                          s("img", {
                            staticClass: "community-img",
                            attrs: { src: "/www/img/tlImg.png", alt: "" },
                          }),
                          t._v(" "),
                          s("div", { staticClass: "community-details" }, [
                            s("p", { staticClass: "community-category" }, [
                              t._v("モンスターハンター"),
                            ]),
                            t._v(" "),
                            s("p", { staticClass: "community-name" }, [
                              t._v(
                                "\n                  【総合】モンスターハンター：ワールド\n                  "
                              ),
                            ]),
                            t._v(" "),
                            s("div", { staticClass: "community-meta" }, [
                              s("span", [
                                s("i", { staticClass: "fas fa-user" }),
                                t._v("100000"),
                              ]),
                              t._v(" "),
                              s("span", [
                                s("i", { staticClass: "far fa-clock" }),
                                t._v("18:50"),
                              ]),
                            ]),
                          ]),
                        ]),
                        t._v(" "),
                        s("li", { staticClass: "community-list-item" }, [
                          s("img", {
                            staticClass: "community-img",
                            attrs: { src: "/www/img/tlImg.png", alt: "" },
                          }),
                          t._v(" "),
                          s("div", { staticClass: "community-details" }, [
                            s("p", { staticClass: "community-category" }, [
                              t._v("モンスターハンター"),
                            ]),
                            t._v(" "),
                            s("p", { staticClass: "community-name" }, [
                              t._v(
                                "\n                  【総合】モンスターハンター：ワールド\n                  "
                              ),
                            ]),
                            t._v(" "),
                            s("div", { staticClass: "community-meta" }, [
                              s("span", [
                                s("i", { staticClass: "fas fa-user" }),
                                t._v("100000"),
                              ]),
                              t._v(" "),
                              s("span", [
                                s("i", { staticClass: "far fa-clock" }),
                                t._v("18:50"),
                              ]),
                            ]),
                          ]),
                        ]),
                        t._v(" "),
                        s("li", { staticClass: "community-list-item" }, [
                          s("img", {
                            staticClass: "community-img",
                            attrs: { src: "/www/img/tlImg.png", alt: "" },
                          }),
                          t._v(" "),
                          s("div", { staticClass: "community-details" }, [
                            s("p", { staticClass: "community-category" }, [
                              t._v("モンスターハンター"),
                            ]),
                            t._v(" "),
                            s("p", { staticClass: "community-name" }, [
                              t._v(
                                "\n                  【総合】モンスターハンター：ワールド\n                  "
                              ),
                            ]),
                            t._v(" "),
                            s("div", { staticClass: "community-meta" }, [
                              s("span", [
                                s("i", { staticClass: "fas fa-user" }),
                                t._v("100000"),
                              ]),
                              t._v(" "),
                              s("span", [
                                s("i", { staticClass: "far fa-clock" }),
                                t._v("18:50"),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ],
                1
              ),
            ]),
          ]);
        },
        e = [];
      i._withStripped = !0;
    },
    function (t, a, s) {
      "use strict";
      s.d(a, "a", function () {
        return i;
      }),
        s.d(a, "b", function () {
          return e;
        });
      var i = function () {
          var t = this.$createElement,
            a = this._self._c || t;
          return a("v-ons-page", [
            a("div", { attrs: { id: "app" } }, [
              a(
                "div",
                { staticClass: "main" },
                [
                  a("div", { staticClass: "dummyheader" }),
                  this._v(" "),
                  a("v-ons-back-button", [this._v("マイページ")]),
                  this._v(" "),
                  a(
                    "ons-toolbar",
                    { staticClass: "mypageheader pageBack-icon green" },
                    [
                      a("div", { staticClass: "center" }, [
                        this._v("ブックマーク一覧"),
                      ]),
                    ]
                  ),
                  this._v(" "),
                  a("div", { staticClass: "mypage-maincontents" }, [
                    this._v(
                      "\n          ここにブックマークしたitem系を表示一覧\n      "
                    ),
                  ]),
                ],
                1
              ),
            ]),
          ]);
        },
        e = [];
      i._withStripped = !0;
    },
    function (t, a, s) {
      "use strict";
      s.d(a, "a", function () {
        return i;
      }),
        s.d(a, "b", function () {
          return e;
        });
      var i = function () {
          var t = this.$createElement,
            a = this._self._c || t;
          return a("v-ons-toolbar", [
            a(
              "div",
              { staticClass: "left" },
              [
                a("v-ons-back-button", { attrs: { "on-click": this.pop } }, [
                  this._v(this._s(this.backLabel)),
                ]),
              ],
              1
            ),
            this._v(" "),
            a("div", { staticClass: "center" }, [this._t("default")], 2),
          ]);
        },
        e = [];
      i._withStripped = !0;
    },
    function (t, a, s) {
      "use strict";
      s.d(a, "a", function () {
        return i;
      }),
        s.d(a, "b", function () {
          return e;
        });
      var i = function () {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s("v-ons-page", [
            s("div", { attrs: { id: "app" } }, [
              s(
                "div",
                { staticClass: "main" },
                [
                  s("div", { staticClass: "dummyheader" }),
                  t._v(" "),
                  s("v-ons-back-button", [t._v("マイページ")]),
                  t._v(" "),
                  s(
                    "ons-toolbar",
                    { staticClass: "mypageheader pageBack-icon green" },
                    [
                      s("div", { staticClass: "center" }, [
                        t._v("ステータス設定"),
                      ]),
                    ]
                  ),
                  t._v(" "),
                  s("div", { staticClass: "mypage-maincontents" }, [
                    s("div", { staticClass: "gray-back" }, [
                      s("div", { staticClass: "ss-ttl" }, [
                        t._v("ステータス設定"),
                      ]),
                      t._v(" "),
                      s("div", { staticClass: "ss-box" }, [
                        s(
                          "label",
                          {
                            staticClass:
                              "radio-button radio-button--material status-online",
                          },
                          [
                            t._v(
                              "\n                  オンライン\n                  "
                            ),
                            s("input", {
                              staticClass:
                                "radio-button__input radio-button--material__input",
                              attrs: {
                                type: "radio",
                                name: "r",
                                checked: "checked",
                              },
                            }),
                            t._v(" "),
                            s("div", {
                              staticClass:
                                "radio-button__checkmark radio-button--material__checkmark",
                            }),
                          ]
                        ),
                        t._v(" "),
                        s(
                          "label",
                          {
                            staticClass:
                              "radio-button radio-button--material status-offline",
                          },
                          [
                            t._v(
                              "\n                  オフライン\n                  "
                            ),
                            s("input", {
                              staticClass:
                                "radio-button__input radio-button--material__input",
                              attrs: {
                                type: "radio",
                                name: "r",
                                checked: "checked",
                              },
                            }),
                            t._v(" "),
                            s("div", {
                              staticClass:
                                "radio-button__checkmark radio-button--material__checkmark",
                            }),
                          ]
                        ),
                      ]),
                      t._v(" "),
                      s("div", { staticClass: "ss-ttl" }, [t._v("オプション")]),
                      t._v(" "),
                      s("ul", { staticClass: "list" }, [
                        s(
                          "li",
                          { staticClass: "list-item list-item--tappable" },
                          [
                            s("div", { staticClass: "list-item__left" }, [
                              s("label", { staticClass: "checkbox" }, [
                                s("input", {
                                  staticClass: "checkbox__input",
                                  attrs: {
                                    type: "checkbox",
                                    id: "checkbox1",
                                    name: "c",
                                    checked: "checked",
                                  },
                                }),
                                t._v(" "),
                                s("div", {
                                  staticClass: "checkbox__checkmark",
                                }),
                              ]),
                            ]),
                            t._v(" "),
                            s(
                              "label",
                              {
                                staticClass: "list-item__center",
                                attrs: { for: "checkbox1" },
                              },
                              [
                                t._v(
                                  "\n                      一定時間後にステータスを”オフライン”にする\n                  "
                                ),
                              ]
                            ),
                          ]
                        ),
                        t._v(" "),
                        s(
                          "li",
                          { staticClass: "list-item list-item--tappable" },
                          [
                            s("div", { staticClass: "list-item__left" }, [
                              s("label", { staticClass: "checkbox" }, [
                                s("input", {
                                  staticClass: "checkbox__input",
                                  attrs: {
                                    type: "checkbox",
                                    id: "checkbox2",
                                    name: "c",
                                  },
                                }),
                                t._v(" "),
                                s("div", {
                                  staticClass: "checkbox__checkmark",
                                }),
                              ]),
                            ]),
                            t._v(" "),
                            s(
                              "label",
                              {
                                staticClass: "list-item__center",
                                attrs: { for: "checkbox2" },
                              },
                              [
                                t._v(
                                  "\n                      次の時間帯は自動でステータスを”オフライン”にする\n                  "
                                ),
                              ]
                            ),
                          ]
                        ),
                      ]),
                      t._v(" "),
                      s(
                        "p",
                        {
                          staticStyle: {
                            "margin-top": "86.5px",
                            "text-align": "center",
                          },
                        },
                        [
                          s(
                            "ons-button",
                            {
                              staticClass: "setting-button",
                              attrs: { onclick: "login()" },
                            },
                            [t._v("設定する")]
                          ),
                        ],
                        1
                      ),
                    ]),
                  ]),
                ],
                1
              ),
            ]),
          ]);
        },
        e = [];
      i._withStripped = !0;
    },
    function (t, a, s) {
      "use strict";
      s.d(a, "a", function () {
        return i;
      }),
        s.d(a, "b", function () {
          return e;
        });
      var i = function () {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s("v-ons-page", [
            s("div", { attrs: { id: "app" } }, [
              s(
                "div",
                { staticClass: "main" },
                [
                  s("div", { staticClass: "dummyheader" }),
                  t._v(" "),
                  s("v-ons-back-button", [t._v("マイページ")]),
                  t._v(" "),
                  s(
                    "ons-toolbar",
                    { staticClass: "mypageheader pageBack-icon green" },
                    [
                      s("div", { staticClass: "center" }, [
                        t._v("マイゲームを編集"),
                      ]),
                    ]
                  ),
                  t._v(" "),
                  s("div", { staticClass: "mypage-maincontents" }, [
                    s("div", { staticClass: "mygame-form-wrap" }, [
                      s(
                        "p",
                        {
                          staticStyle: {
                            "text-align": "center",
                            "margin-top": "10px",
                          },
                        },
                        [
                          s("ons-search-input", {
                            attrs: {
                              placeholder: "Search",
                              onchange:
                                "ons.notification.alert('Searched for: ' + this.value)",
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
                    t._v(" "),
                    s("div", { staticClass: "mygame-newEdit" }, [
                      s("i", { staticClass: "fas fa-plus" }),
                      t._v(" "),
                      s("span", [t._v("「新しいゲームタイトル」を新規追加")]),
                    ]),
                    t._v(" "),
                    s("div", { staticClass: "createdGame-wrap" }, [
                      s("div", { staticClass: "createdGame-card" }, [
                        s("div", { staticClass: "card-icon" }, [
                          s("img", {
                            attrs: { src: "/www/img/tlImg.png", alt: "" },
                          }),
                        ]),
                        t._v(" "),
                        s("div", { staticClass: "card-info" }, [
                          s("span", [t._v("モンスターハンターワールド")]),
                          t._v(" "),
                          s("div", { staticClass: "mygame-info-detail" }, [
                            s("span", [
                              s("i", { staticClass: "fas fa-user" }),
                              t._v("100000"),
                            ]),
                            t._v(" "),
                            s("span", [
                              s("i", { staticClass: "fas fa-user" }),
                              t._v("999999"),
                            ]),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      s(
                        "p",
                        {
                          staticStyle: {
                            "margin-top": "86.5px",
                            "text-align": "center",
                          },
                        },
                        [
                          s(
                            "ons-button",
                            {
                              staticClass: "setting-button",
                              attrs: { onclick: "login()" },
                            },
                            [t._v("設定する")]
                          ),
                        ],
                        1
                      ),
                    ]),
                  ]),
                ],
                1
              ),
            ]),
          ]);
        },
        e = [];
      i._withStripped = !0;
    },
    function (t, a, s) {
      "use strict";
      s.d(a, "a", function () {
        return i;
      }),
        s.d(a, "b", function () {
          return e;
        });
      var i = function () {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s("v-ons-page", [
            s("div", { attrs: { id: "app" } }, [
              s(
                "div",
                { staticClass: "main" },
                [
                  s("div", { staticClass: "dummyheader" }),
                  t._v(" "),
                  s("v-ons-back-button", [t._v("マイページ")]),
                  t._v(" "),
                  s(
                    "ons-toolbar",
                    { staticClass: "mypageheader pageBack-icon green" },
                    [s("div", { staticClass: "center" }, [t._v("フォロー?")])]
                  ),
                  t._v(" "),
                  s("div", { staticClass: "mypage-maincontents" }, [
                    s("div", { staticClass: "gray-back" }, [
                      s("ul", { staticClass: "list-items" }, [
                        s("li", { staticClass: "list-item" }, [
                          s("img", {
                            staticClass: "account-img",
                            attrs: { src: "/www/img/tlImg.png", alt: "" },
                          }),
                          t._v(" "),
                          s("div", { staticClass: "item-detail" }, [
                            s("p", { staticClass: "account-name" }, [
                              t._v("あああああ"),
                            ]),
                            t._v(" "),
                            s("p", { staticClass: "account-message" }, [
                              t._v(
                                "\n                  ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ\n                  "
                              ),
                            ]),
                          ]),
                          t._v(" "),
                          s("div", { staticClass: "item-meta" }, [
                            s("p", { staticClass: "message-time" }, [
                              t._v("18:55"),
                            ]),
                            t._v(" "),
                            s("div", { staticClass: "unread-number-wrao" }, [
                              s("p", { staticClass: "unread-number" }, [
                                t._v("1"),
                              ]),
                            ]),
                          ]),
                        ]),
                        t._v(" "),
                        s("li", { staticClass: "list-item" }, [
                          s("img", {
                            staticClass: "account-img",
                            attrs: { src: "/www/img/tlImg.png", alt: "" },
                          }),
                          t._v(" "),
                          s("div", { staticClass: "item-detail" }, [
                            s("p", { staticClass: "account-name" }, [
                              t._v("あああああ"),
                            ]),
                            t._v(" "),
                            s("p", { staticClass: "account-message" }, [
                              t._v(
                                "\n                  ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ\n                  "
                              ),
                            ]),
                          ]),
                          t._v(" "),
                          s("div", { staticClass: "item-meta" }, [
                            s("p", { staticClass: "message-time" }, [
                              t._v("18:55"),
                            ]),
                            t._v(" "),
                            s("div", { staticClass: "unread-number-wrao" }, [
                              s("p", { staticClass: "unread-number" }, [
                                t._v("1"),
                              ]),
                            ]),
                          ]),
                        ]),
                        t._v(" "),
                        s("li", { staticClass: "list-item" }, [
                          s("img", {
                            staticClass: "account-img",
                            attrs: { src: "/www/img/tlImg.png", alt: "" },
                          }),
                          t._v(" "),
                          s("div", { staticClass: "item-detail" }, [
                            s("p", { staticClass: "account-name" }, [
                              t._v("あああああ"),
                            ]),
                            t._v(" "),
                            s("p", { staticClass: "account-message" }, [
                              t._v(
                                "\n                  ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ\n                  "
                              ),
                            ]),
                          ]),
                          t._v(" "),
                          s("div", { staticClass: "item-meta" }, [
                            s("p", { staticClass: "message-time" }, [
                              t._v("18:55"),
                            ]),
                            t._v(" "),
                            s("div", { staticClass: "unread-number-wrao" }, [
                              s("p", { staticClass: "unread-number" }, [
                                t._v("1"),
                              ]),
                            ]),
                          ]),
                        ]),
                        t._v(" "),
                        s("li", { staticClass: "list-item" }, [
                          s("img", {
                            staticClass: "account-img",
                            attrs: { src: "/www/img/tlImg.png", alt: "" },
                          }),
                          t._v(" "),
                          s("div", { staticClass: "item-detail" }, [
                            s("p", { staticClass: "account-name" }, [
                              t._v("あああああ"),
                            ]),
                            t._v(" "),
                            s("p", { staticClass: "account-message" }, [
                              t._v(
                                "\n                  ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ\n                  "
                              ),
                            ]),
                          ]),
                          t._v(" "),
                          s("div", { staticClass: "item-meta" }, [
                            s("p", { staticClass: "message-time" }, [
                              t._v("18:55"),
                            ]),
                            t._v(" "),
                            s("div", { staticClass: "unread-number-wrao" }, [
                              s("p", { staticClass: "unread-number" }, [
                                t._v("1"),
                              ]),
                            ]),
                          ]),
                        ]),
                        t._v(" "),
                        s("li", { staticClass: "list-item" }, [
                          s("img", {
                            staticClass: "account-img",
                            attrs: { src: "/www/img/tlImg.png", alt: "" },
                          }),
                          t._v(" "),
                          s("div", { staticClass: "item-detail" }, [
                            s("p", { staticClass: "account-name" }, [
                              t._v("あああああ"),
                            ]),
                            t._v(" "),
                            s("p", { staticClass: "account-message" }, [
                              t._v(
                                "\n                  ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ\n                  "
                              ),
                            ]),
                          ]),
                          t._v(" "),
                          s("div", { staticClass: "item-meta" }, [
                            s("p", { staticClass: "message-time" }, [
                              t._v("18:55"),
                            ]),
                            t._v(" "),
                            s("div", { staticClass: "unread-number-wrao" }, [
                              s("p", { staticClass: "unread-number" }, [
                                t._v("1"),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ],
                1
              ),
            ]),
          ]);
        },
        e = [];
      i._withStripped = !0;
    },
    function (t, a, s) {
      "use strict";
      s.d(a, "a", function () {
        return i;
      }),
        s.d(a, "b", function () {
          return e;
        });
      var i = function () {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s("v-ons-page", [
            s("div", { attrs: { id: "app" } }, [
              s(
                "div",
                { staticClass: "main" },
                [
                  s("div", { staticClass: "dummyheader" }),
                  t._v(" "),
                  s("v-ons-back-button", [t._v("マイページ")]),
                  t._v(" "),
                  s(
                    "ons-toolbar",
                    { staticClass: "mypageheader pageBack-icon green" },
                    [
                      s("div", { staticClass: "center" }, [
                        t._v("フォロワー？"),
                      ]),
                    ]
                  ),
                  t._v(" "),
                  s("div", { staticClass: "mypage-maincontents" }, [
                    s("div", { staticClass: "gray-back" }, [
                      s("ul", { staticClass: "list-items" }, [
                        s("li", { staticClass: "list-item" }, [
                          s("img", {
                            staticClass: "account-img",
                            attrs: { src: "/www/img/tlImg.png", alt: "" },
                          }),
                          t._v(" "),
                          s("div", { staticClass: "follower-detail" }, [
                            s("p", { staticClass: "follower-name" }, [
                              t._v("あああああ"),
                            ]),
                          ]),
                        ]),
                        t._v(" "),
                        s("li", { staticClass: "list-item" }, [
                          s("img", {
                            staticClass: "account-img",
                            attrs: { src: "/www/img/tlImg.png", alt: "" },
                          }),
                          t._v(" "),
                          s("div", { staticClass: "follower-detail" }, [
                            s("p", { staticClass: "follower-name" }, [
                              t._v("あああああ"),
                            ]),
                          ]),
                        ]),
                        t._v(" "),
                        s("li", { staticClass: "list-item" }, [
                          s("img", {
                            staticClass: "account-img",
                            attrs: { src: "/www/img/tlImg.png", alt: "" },
                          }),
                          t._v(" "),
                          s("div", { staticClass: "follower-detail" }, [
                            s("p", { staticClass: "follower-name" }, [
                              t._v("あああああ"),
                            ]),
                          ]),
                        ]),
                        t._v(" "),
                        s("li", { staticClass: "list-item" }, [
                          s("img", {
                            staticClass: "account-img",
                            attrs: { src: "/www/img/tlImg.png", alt: "" },
                          }),
                          t._v(" "),
                          s("div", { staticClass: "follower-detail" }, [
                            s("p", { staticClass: "follower-name" }, [
                              t._v("あああああ"),
                            ]),
                          ]),
                        ]),
                        t._v(" "),
                        s("li", { staticClass: "list-item" }, [
                          s("img", {
                            staticClass: "account-img",
                            attrs: { src: "/www/img/tlImg.png", alt: "" },
                          }),
                          t._v(" "),
                          s("div", { staticClass: "follower-detail" }, [
                            s("p", { staticClass: "follower-name" }, [
                              t._v("あああああ"),
                            ]),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ],
                1
              ),
            ]),
          ]);
        },
        e = [];
      i._withStripped = !0;
    },
    function (t, a, s) {
      "use strict";
      s.d(a, "a", function () {
        return i;
      }),
        s.d(a, "b", function () {
          return e;
        });
      var i = function () {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s("v-ons-page", [
            s("div", { attrs: { id: "app" } }, [
              s(
                "div",
                { staticClass: "main" },
                [
                  s("div", { staticClass: "dummyheader" }),
                  t._v(" "),
                  s("v-ons-back-button", [t._v("マイページ")]),
                  t._v(" "),
                  s(
                    "ons-toolbar",
                    { staticClass: "mypageheader pageBack-icon green" },
                    [
                      s("div", { staticClass: "center" }, [
                        t._v("プロフィール設定"),
                      ]),
                    ]
                  ),
                  t._v(" "),
                  s("div", { staticClass: "mypage-maincontents" }, [
                    s("div", { staticClass: "gray-back" }, [
                      s("div", { staticClass: "mypage-thum" }, [
                        s("img", {
                          staticClass: "thumImg",
                          attrs: { src: "/www/img/tlImg.png", alt: "" },
                        }),
                      ]),
                      t._v(" "),
                      s("div", { staticClass: "mypage-icon-wrapper" }, [
                        s("div", { staticClass: "mypage-icon-circle" }, [
                          s("img", {
                            staticClass: "mypage-icon-img",
                            attrs: { src: "/www/img/tlImg.png", alt: "" },
                          }),
                        ]),
                      ]),
                      t._v(" "),
                      s("div", { staticClass: "mypage-subttl" }, [
                        t._v("ユーザ名"),
                      ]),
                      t._v(" "),
                      s("ul", { staticClass: "list" }, [
                        s(
                          "a",
                          {
                            staticStyle: { display: "block" },
                            attrs: { href: "" },
                          },
                          [
                            s(
                              "li",
                              { staticClass: "list-item list-item--chevron" },
                              [
                                s(
                                  "div",
                                  {
                                    staticClass: "list-item__center",
                                    staticStyle: { height: "76px" },
                                  },
                                  [
                                    t._v(
                                      "\n                      きゃんゆう\n                      "
                                    ),
                                  ]
                                ),
                              ]
                            ),
                          ]
                        ),
                      ]),
                      t._v(" "),
                      s("div", { staticClass: "mypage-subttl" }, [
                        t._v("自己紹介分"),
                      ]),
                      t._v(" "),
                      s("ul", { staticClass: "list" }, [
                        s(
                          "a",
                          {
                            staticStyle: { display: "block" },
                            attrs: { href: "" },
                          },
                          [
                            s(
                              "li",
                              { staticClass: "list-item list-item--chevron" },
                              [
                                s(
                                  "div",
                                  {
                                    staticClass: "list-item__center",
                                    staticStyle: {
                                      height: "auto",
                                      "padding-right": "25px",
                                      "font-size": "14px",
                                    },
                                  },
                                  [
                                    t._v(
                                      "\n                      きゃんゆうといいます"
                                    ),
                                    s("br"),
                                    t._v("やかましい音楽が好きです"),
                                    s("br"),
                                    s("br"),
                                    t._v(
                                      "\n                      きゃんゆうといいますやかましい音楽が好きです"
                                    ),
                                    s("br"),
                                    t._v(
                                      "\n                      きゃんゆうといいますやかましい音楽が好きです"
                                    ),
                                    s("br"),
                                    t._v(
                                      "\n                      きゃんゆうといいますやかましい音楽が好きです"
                                    ),
                                    s("br"),
                                    t._v(
                                      "\n                      きゃんゆうといいますやかましい音楽が好きです"
                                    ),
                                    s("br"),
                                    t._v(
                                      "\n                      きゃんゆうといいますやかましい音楽が好きです"
                                    ),
                                    s("br"),
                                    t._v(
                                      "\n                      きゃんゆうといいますやかましい音楽が好きです"
                                    ),
                                    s("br"),
                                    t._v(
                                      "\n                      きゃんゆうといいますやかましい音楽が好きです"
                                    ),
                                    s("br"),
                                    t._v(
                                      "\n                      きゃんゆうといいますやかましい音楽が好きです"
                                    ),
                                    s("br"),
                                    t._v(
                                      "\n                      きゃんゆうといいますやかましい音楽が好きです\n                      "
                                    ),
                                  ]
                                ),
                              ]
                            ),
                          ]
                        ),
                      ]),
                    ]),
                  ]),
                ],
                1
              ),
            ]),
          ]);
        },
        e = [];
      i._withStripped = !0;
    },
    ,
    ,
    ,
    function (t, a, s) {
      "use strict";
      s.r(a);
      var i = s(62),
        e = s(23);
      for (var n in e)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            s.d(a, t, function () {
              return e[t];
            });
          })(n);
      var c = s(1),
        l = Object(c.a)(e.default, i.a, i.b, !1, null, null, null);
      (l.options.__file = "src/CustomToolbar.vue"), (a.default = l.exports);
    },
    function (t, a, s) {
      "use strict";
      s.r(a);
      var i = s(51),
        e = s(25);
      for (var n in e)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            s.d(a, t, function () {
              return e[t];
            });
          })(n);
      var c = s(1),
        l = Object(c.a)(e.default, i.a, i.b, !1, null, null, null);
      (l.options.__file = "src/Page2.vue"), (a.default = l.exports);
    },
    function (t, a, s) {
      t.exports = s(74);
    },
    function (t, a, s) {
      "use strict";
      var i = r(s(75)),
        e = r(s(77)),
        n = r(s(78));
      s(79), s(80);
      var c = r(s(68)),
        l = r(s(5));
      function r(t) {
        return t && t.__esModule ? t : { default: t };
      }
      i.default.config.productionTip = !1;
      n.default.initializeApp({
        apiKey: "AIzaSyDQIzccqwhpPtgd4AswJINVHnc4ETBpv98",
        authDomain: "gameapp-alive.firebaseapp.com",
        databaseURL: "https://gameapp-alive.firebaseio.com",
        projectId: "gameapp-alive",
        storageBucket: "gameapp-alive.appspot.com",
        messagingSenderId: "184451273275",
        appId: "1:184451273275:web:6cfb9405a329879fdac21e",
        measurementId: "G-Q8WHJF1QRV",
      }),
        s(108),
        s(109),
        c.default.platform.isIPhoneX() &&
          (document.documentElement.setAttribute(
            "onsflag-iphonex-portrait",
            ""
          ),
          document.documentElement.setAttribute(
            "onsflag-iphonex-landscape",
            ""
          )),
        i.default.use(e.default),
        new i.default({
          el: "#app",
          template: "<app></app>",
          components: { App: l.default },
        });
    },
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, a, s) {
      "use strict";
      s.r(a);
      var i = s(52),
        e = s(14);
      for (var n in e)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            s.d(a, t, function () {
              return e[t];
            });
          })(n);
      s(90);
      var c = s(1),
        l = Object(c.a)(e.default, i.a, i.b, !1, null, "d8c16268", null);
      (l.options.__file = "src/News.vue"), (a.default = l.exports);
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, a, s) {
      "use strict";
      var i = s(16);
      s.n(i).a;
    },
    function (t, a, s) {
      "use strict";
      s.r(a);
      var i = s(55),
        e = s(17);
      for (var n in e)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            s.d(a, t, function () {
              return e[t];
            });
          })(n);
      var c = s(1),
        l = Object(c.a)(e.default, i.a, i.b, !1, null, null, null);
      (l.options.__file = "src/Chat.vue"), (a.default = l.exports);
    },
    function (t, a, s) {
      "use strict";
      s.r(a);
      var i = s(56),
        e = s(19);
      for (var n in e)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            s.d(a, t, function () {
              return e[t];
            });
          })(n);
      var c = s(1),
        l = Object(c.a)(e.default, i.a, i.b, !1, null, null, null);
      (l.options.__file = "src/Test.vue"), (a.default = l.exports);
    },
    function (t, a, s) {
      "use strict";
      s.r(a);
      var i = s(57),
        e = s(21);
      for (var n in e)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            s.d(a, t, function () {
              return e[t];
            });
          })(n);
      var c = s(1),
        l = Object(c.a)(e.default, i.a, i.b, !1, null, null, null);
      (l.options.__file = "src/Page1.vue"), (a.default = l.exports);
    },
    function (t, a, s) {
      t.exports = s.p + "assets/icon_line.5a254852f754bbe7146a752681b6291b.png";
    },
    function (t, a, s) {
      t.exports =
        s.p + "assets/icon_twitter.0b0374dc363adc5cbb32593314ba8115.png";
    },
    function (t, a, s) {
      t.exports =
        s.p + "assets/icon_google.51114bbbc21e8b2919f3f044afcdddf1.png";
    },
    function (t, a, s) {
      t.exports =
        s.p + "assets/icon_facebook.f7b896b2af7b7ae0ec8b4a5e1d8326f8.png";
    },
    function (t, a, s) {
      "use strict";
      s.r(a);
      var i = s(53),
        e = s(29);
      for (var n in e)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            s.d(a, t, function () {
              return e[t];
            });
          })(n);
      var c = s(1),
        l = Object(c.a)(e.default, i.a, i.b, !1, null, null, null);
      (l.options.__file = "src/MypageNavi.vue"), (a.default = l.exports);
    },
    function (t, a, s) {
      "use strict";
      s.r(a);
      var i = s(58),
        e = s(31);
      for (var n in e)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            s.d(a, t, function () {
              return e[t];
            });
          })(n);
      s(107);
      var c = s(1),
        l = Object(c.a)(e.default, i.a, i.b, !1, null, null, null);
      (l.options.__file = "src/Mypage.vue"), (a.default = l.exports);
    },
    function (t, a, s) {
      "use strict";
      s.r(a);
      var i = s(61),
        e = s(33);
      for (var n in e)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            s.d(a, t, function () {
              return e[t];
            });
          })(n);
      var c = s(1),
        l = Object(c.a)(e.default, i.a, i.b, !1, null, null, null);
      (l.options.__file = "src/Bookmark.vue"), (a.default = l.exports);
    },
    function (t, a, s) {
      "use strict";
      s.r(a);
      var i = s(67),
        e = s(35);
      for (var n in e)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            s.d(a, t, function () {
              return e[t];
            });
          })(n);
      var c = s(1),
        l = Object(c.a)(e.default, i.a, i.b, !1, null, null, null);
      (l.options.__file = "src/Profile.vue"), (a.default = l.exports);
    },
    function (t, a, s) {
      "use strict";
      s.r(a);
      var i = s(63),
        e = s(37);
      for (var n in e)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            s.d(a, t, function () {
              return e[t];
            });
          })(n);
      var c = s(1),
        l = Object(c.a)(e.default, i.a, i.b, !1, null, null, null);
      (l.options.__file = "src/StatusSetting.vue"), (a.default = l.exports);
    },
    function (t, a, s) {
      "use strict";
      s.r(a);
      var i = s(64),
        e = s(39);
      for (var n in e)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            s.d(a, t, function () {
              return e[t];
            });
          })(n);
      var c = s(1),
        l = Object(c.a)(e.default, i.a, i.b, !1, null, null, null);
      (l.options.__file = "src/MyGameEdit.vue"), (a.default = l.exports);
    },
    function (t, a, s) {
      "use strict";
      s.r(a);
      var i = s(65),
        e = s(41);
      for (var n in e)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            s.d(a, t, function () {
              return e[t];
            });
          })(n);
      var c = s(1),
        l = Object(c.a)(e.default, i.a, i.b, !1, null, null, null);
      (l.options.__file = "src/Follow.vue"), (a.default = l.exports);
    },
    function (t, a, s) {
      "use strict";
      s.r(a);
      var i = s(66),
        e = s(43);
      for (var n in e)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            s.d(a, t, function () {
              return e[t];
            });
          })(n);
      var c = s(1),
        l = Object(c.a)(e.default, i.a, i.b, !1, null, null, null);
      (l.options.__file = "src/Follower.vue"), (a.default = l.exports);
    },
    function (t, a, s) {
      "use strict";
      s.r(a);
      var i = s(60),
        e = s(45);
      for (var n in e)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            s.d(a, t, function () {
              return e[t];
            });
          })(n);
      var c = s(1),
        l = Object(c.a)(e.default, i.a, i.b, !1, null, null, null);
      (l.options.__file = "src/Room.vue"), (a.default = l.exports);
    },
    function (t, a, s) {
      "use strict";
      var i = s(47);
      s.n(i).a;
    },
    ,
    ,
    function (t, a, s) {
      "use strict";
      s.r(a);
      var i = function () {
        var t = this,
          a = t.$createElement,
          s = t._self._c || a;
        return s(
          "ons-page",
          { attrs: { id: "home_follow" } },
          [
            s("div", { staticClass: "tabbarArea" }, [t._v("空のタブバー")]),
            t._v(" "),
            s(
              "ons-fab",
              {
                staticClass: "btn-addpost",
                attrs: {
                  position: "bottom right",
                  onclick:
                    "document.getElementById('myNavigator').pushPage('home_follow_tl-post.html')",
                },
              },
              [s("i", { staticClass: "fas fa-plus" })]
            ),
            t._v(" "),
            s("div", { staticClass: "userlist follow" }, [
              s("div", { staticClass: "user online" }, [
                s("img", {
                  staticClass: "user-img",
                  attrs: { src: "img/followIcon.png", alt: "" },
                }),
              ]),
              t._v(" "),
              s("div", { staticClass: "user offline" }, [
                s("img", { attrs: { src: "img/followIcon.png", alt: "" } }),
              ]),
              t._v(" "),
              s("div", { staticClass: "user online" }, [
                s("img", { attrs: { src: "img/followIcon.png", alt: "" } }),
              ]),
              t._v(" "),
              s("div", { staticClass: "user online" }, [
                s("img", { attrs: { src: "img/followIcon.png", alt: "" } }),
              ]),
              t._v(" "),
              s("div", { staticClass: "user online" }, [
                s("img", { attrs: { src: "img/followIcon.png", alt: "" } }),
              ]),
              t._v(" "),
              s("div", { staticClass: "user offline" }, [
                s("img", { attrs: { src: "img/followIcon.png", alt: "" } }),
              ]),
            ]),
            t._v(" "),
            s("div", { staticClass: "timeline follow" }, [
              s("div", { staticClass: "ttlBox" }, [
                s("div", { staticClass: "ttl" }, [t._v("タイムライン")]),
                t._v(" "),
                s(
                  "div",
                  {
                    staticClass: "sort",
                    attrs: {
                      tappable: "",
                      modifier: "longdivider",
                      onclick:
                        "ons.openActionSheet({ buttons: ['最新順', 'いいね順', '超いいね順', 'フォロワー順', 'Cancel'], cancelable: true })",
                    },
                  },
                  [t._v("最新順")]
                ),
              ]),
              t._v(" "),
              s("div", { staticClass: "tlContents follow" }, [
                s(
                  "div",
                  {
                    staticClass: "item",
                    attrs: {
                      onclick:
                        "document.getElementById('myNavigator').pushPage('home_follow_tl-detail.html')",
                    },
                  },
                  [
                    s("div", { staticClass: "imgBox" }, [
                      s("img", { attrs: { src: "img/tlImg.png", alt: "" } }),
                    ]),
                    t._v(" "),
                    s("div", { staticClass: "txtBox" }, [
                      t._v("僕は蠱毒使いにはスタミナ系と攻撃系の旋律を優先…"),
                    ]),
                    t._v(" "),
                    s("div", { staticClass: "userBox" }, [
                      s("div", { staticClass: "icon" }, [
                        s("img", { attrs: { src: "img/tlUser.png", alt: "" } }),
                      ]),
                      t._v(" "),
                      s("div", { staticClass: "name" }, [t._v("ふぇぐ")]),
                      t._v(" "),
                      s("div", { staticClass: "nice" }, [
                        s("i", { staticClass: "fas fa-heart" }),
                      ]),
                      t._v(" "),
                      s(
                        "div",
                        {
                          staticClass: "retweet",
                          attrs: {
                            onclick:
                              "document.getElementById('myNavigator').pushPage('home_follow_tl-retweet.html')",
                          },
                        },
                        [s("i", { staticClass: "fas fa-retweet" })]
                      ),
                    ]),
                  ]
                ),
                t._v(" "),
                s(
                  "div",
                  {
                    staticClass: "item",
                    attrs: {
                      onclick:
                        "document.getElementById('myNavigator').pushPage('home_follow_tl-detail.html')",
                    },
                  },
                  [
                    s("div", { staticClass: "imgBox" }, [
                      s("img", { attrs: { src: "img/tlImg.png", alt: "" } }),
                    ]),
                    t._v(" "),
                    s("div", { staticClass: "txtBox" }, [
                      t._v("僕は蠱毒使いにはスタミナ系と攻撃系の旋律を優先…"),
                    ]),
                    t._v(" "),
                    s("div", { staticClass: "userBox" }, [
                      s("div", { staticClass: "icon" }, [
                        s("img", { attrs: { src: "img/tlUser.png", alt: "" } }),
                      ]),
                      t._v(" "),
                      s("div", { staticClass: "name" }, [t._v("ふぇぐ")]),
                      t._v(" "),
                      s("div", { staticClass: "nice" }, [
                        s("i", { staticClass: "fas fa-heart" }),
                      ]),
                      t._v(" "),
                      s("div", { staticClass: "retweet" }, [
                        s("i", { staticClass: "fas fa-retweet" }),
                      ]),
                    ]),
                  ]
                ),
                t._v(" "),
                s(
                  "div",
                  {
                    staticClass: "item",
                    attrs: {
                      onclick:
                        "document.getElementById('myNavigator').pushPage('home_follow_tl-detail.html')",
                    },
                  },
                  [
                    s("div", { staticClass: "imgBox" }, [
                      s("img", { attrs: { src: "img/tlImg.png", alt: "" } }),
                    ]),
                    t._v(" "),
                    s("div", { staticClass: "txtBox" }, [
                      t._v("僕は蠱毒使いにはスタミナ系と攻撃系の旋律を優先…"),
                    ]),
                    t._v(" "),
                    s("div", { staticClass: "userBox" }, [
                      s("div", { staticClass: "icon" }, [
                        s("img", { attrs: { src: "img/tlUser.png", alt: "" } }),
                      ]),
                      t._v(" "),
                      s("div", { staticClass: "name" }, [t._v("ふぇぐ")]),
                      t._v(" "),
                      s("div", { staticClass: "nice" }, [
                        s("i", { staticClass: "fas fa-heart" }),
                      ]),
                      t._v(" "),
                      s("div", { staticClass: "retweet" }, [
                        s("i", { staticClass: "fas fa-retweet" }),
                      ]),
                    ]),
                  ]
                ),
                t._v(" "),
                s(
                  "div",
                  {
                    staticClass: "item",
                    attrs: {
                      onclick:
                        "document.getElementById('myNavigator').pushPage('home_follow_tl-detail.html')",
                    },
                  },
                  [
                    s("div", { staticClass: "imgBox" }, [
                      s("img", { attrs: { src: "img/tlImg.png", alt: "" } }),
                    ]),
                    t._v(" "),
                    s("div", { staticClass: "txtBox" }, [
                      t._v("僕は蠱毒使いにはスタミナ系と攻撃系の旋律を優先…"),
                    ]),
                    t._v(" "),
                    s("div", { staticClass: "userBox" }, [
                      s("div", { staticClass: "icon" }, [
                        s("img", { attrs: { src: "img/tlUser.png", alt: "" } }),
                      ]),
                      t._v(" "),
                      s("div", { staticClass: "name" }, [t._v("ふぇぐ")]),
                      t._v(" "),
                      s("div", { staticClass: "nice" }, [
                        s("i", { staticClass: "fas fa-heart" }),
                      ]),
                      t._v(" "),
                      s("div", { staticClass: "retweet" }, [
                        s("i", { staticClass: "fas fa-retweet" }),
                      ]),
                    ]),
                  ]
                ),
              ]),
            ]),
          ],
          1
        );
      };
      i._withStripped = !0;
      var e = s(1),
        n = Object(e.a)({}, i, [], !1, null, null, null);
      n.options.__file = "src/Home.vue";
      a.default = n.exports;
    },
  ],
  [[73, 1, 2]],
]);
