document.addEventListener("prechange", function(event) {
  document.querySelector(
    "ons-toolbar .center"
  ).innerHTML = event.tabItem.getAttribute("label");
});

function viewStrLen() {
  var len = document.getElementById("introduction-textarea").value.length;
  document.getElementById("strLen").innerText = len;
}

var showTemplateDialog = function() {
  var dialog = document.getElementById("my-dialog");
  // ホーム＞フレンド申請_確認ダイアログ
  // home-applyfriend-dialog.html
  var create_home_applyfriend_dialog = function() {
    var dialog = document.getElementById("home-applyfriend-dialog");

    if (dialog) {
      dialog.show();
    } else {
      ons
        .createElement("home_applyfriend_dialog.html", { append: true })
        .then(function(dialog) {
          dialog.show();
        });
    }
  };

  var hide_home_applyfriend_dialog = function() {
    document.getElementById("home_applyfriend_dialog").hide();
  };

  // ルーム情報＞ルーム参加申請_確認ダイアログ
  // room_joinsend_dialog.html
  var create_room_joinsend_dialog = function() {
    var dialog = document.getElementById("room_joinsend_dialog");

    if (dialog) {
      dialog.show();
    } else {
      ons
        .createElement("room_joinsend_dialog.html", { append: true })
        .then(function(dialog) {
          dialog.show();
        });
    }
  };

  var hide_room_joinsend_dialog = function() {
    document.getElementById("room_joinsend_dialog").hide();
  };

  // ルーム退会確認ダイアログ
  // room_leave_dialog.html
  var create_room_leave_dialog = function() {
    var dialog = document.getElementById("room_leave_dialog");

    if (dialog) {
      dialog.show();
    } else {
      ons
        .createElement("room_leave_dialog.html", { append: true })
        .then(function(dialog) {
          dialog.show();
        });
    }
  };

  var hide_room_leave_dialog = function() {
    document.getElementById("room_leave_dialog").hide();
  };

  // ルーム情報＞招待コードコピー確認ダイアログ
  // room_leave_dialog.html
  var create_room_codecopy_dialog = function() {
    var dialog = document.getElementById("room_codecopy_dialog");

    if (dialog) {
      dialog.show();
    } else {
      ons
        .createElement("room_codecopy_dialog.html", { append: true })
        .then(function(dialog) {
          dialog.show();
        });
    }
  };

  var hide_room_codecopy_dialog = function() {
    document.getElementById("room_codecopy_dialog").hide();
  };

  // ルーム情報＞招待コードフレンド送信確認ダイアログ
  // room_codesend_dialog.html
  var create_room_codesend_dialog = function() {
    var dialog = document.getElementById("room_codesend_dialog");

    if (dialog) {
      dialog.show();
    } else {
      ons
        .createElement("room_codesend_dialog.html", { append: true })
        .then(function(dialog) {
          dialog.show();
        });
    }
  };

  var hide_room_codesend_dialog = function() {
    document.getElementById("room_codesend_dialog").hide();
  };
};
