window.onload = function () {
  var pnum = document.getElementById("pnum");
  var btn = document.getElementById("start");
  var idarea = document.getElementById("showid");
  var ident = new Array();

  btn.onclick = function () {
    idarea.value = "";
    ident = [];
    start();
    showIdent();
  }


  function start () {
    var playernum = parseInt(pnum.value);
    var killernum = Math.floor(playernum / 4);
    if (playernum === 8) killernum = 1;
    handout(playernum,killernum);  
  }

  function handout (playernum,killernum) {
    var k = 0;
    // all identity
    for (var i = 0; i < playernum; i++) {
      ident[i] = 0;
    }
    // for killer
    for (var i = 0; i < killernum; i++) {
      ident[whoisK(playernum)] = 1;
    }
    // task
    var count = 0;
    for (var i = 0; i < playernum; i++) {
      if (ident[i] === 1) count++;
    }
    if (count < killernum) {
      handout();
    }
  }

  function whoisK (playernum) {
    k = Math.ceil(Math.random() * playernum) - 1;
    if (ident[k] === 1) whoisK();
    return k;
  }


  function showIdent () {
    var imap = "";
    for (var i = 0; i < ident.length; i++) {
      if (ident[i] === 0) {
        imap = "平民";
      }else {
        imap = "杀手";
      }
      idarea.value = idarea.value + ( (i + 1) + "号的身份是" + imap) + "\r\n";
    }
  }
}
