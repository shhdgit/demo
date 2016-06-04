window.onload = function () {
  // start
  var ident = new Array();
  var playernum = 0;
  var killernum = 0;
  start();

  function start () {
    playernum = parseInt(window.location.search.replace(/[^0-9]/ig,"") );
    killernum = Math.floor(playernum / 4);
    if (playernum === 8) killernum = 1;
    handout(playernum,killernum);  
  }
  // 身份填入数组
  function handout (playernum,killernum) {
    // all identity
    for (var i = 0; i < playernum; i++) {
      ident[i] = 0;
    }
    // for killer
    for (var i = 0; i < killernum; i++) {
      ident[whoisK(playernum)] = 1;
    }
    // test
    var count = 0;
    for (var i = 0; i < playernum; i++) {
      if (ident[i] === 1) count++;
    }
    if (count < killernum) {
      handout();
    }
    showIdent();
  }
  function whoisK (playernum) {
    var k = 0;
    k = Math.ceil(Math.random() * playernum) - 1;
    if (ident[k] === 1) whoisK();
    return k;
  }
  function showIdent () {
    for (var i = 0; i < ident.length; i++) {
      if (ident[i] === 0) {
        ident[i] = "平民";
      }else {
        ident[i] = "杀手";
      }
    }
  }

  // turn card around
  var btn = document.getElementById("checkid");
  var cont = document.getElementById("content");
  var isFont = 0;
  var playercount = 0;
  btn.onclick = function () {
    if (playercount < playernum) {
      if (isFont) {
        fontToback();
        isFont = 0;
      }else {
        backTofont(playercount);
        playercount++;
        isFont = 1;
      }
    }else {
      toJudge();
    }
  }

  // back to font
  function backTofont (playercount) {
    cont.innerHTML = "身份是" + ident[playercount];
    if (playercount < playernum - 1) {
      btn.innerHTML = "隐藏并传递给" + (playercount + 2) + "号";
    }else {
      btn.innerHTML = "法官点击";
    }
  }
  // font to back
  var cir = document.getElementById("cir");
  function fontToback () {
    cont.innerHTML = "翻翻翻！";
    btn.innerHTML = "查看" + (playercount + 1) + "号身份";
    cir.innerHTML = playercount + 1;
  }

  // to judge
  var back = document.getElementById("back");
  function toJudge () {
    window.location.href = "../judge?" + encodeURI(ident);
  }

}
