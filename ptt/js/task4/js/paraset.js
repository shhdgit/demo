window.onload = function () {
  // V
  // ico
  $("#backico").click(function () {
    window.location.href = "../version.html";
  });
  var startbtn = $("#startbtn");
  var pnum = $("#pnum");
  startbtn.click(function () {
    start(pnum.val());
    window.location.href = "checkid.html";
  });

  // C
  // start
  var ident = new Array();
  var playernum = 0;
  var killernum = 0;

  function start (pnum) {
    playernum = parseInt(pnum);
    killernum = Math.floor(playernum / 4);
    if (playernum === 8) killernum = 1;
    handout(playernum,killernum); 
    localStorage.identity = ident;
    localStorage.killernum = killernum;
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

}
