$(function () {
  // M
  // data processing  DP
  var ident = localStorage.identity.split(",");
  var playernum = ident.length;
  var killernum = localStorage.killernum;


  // V
  // turn card around
  var btn = document.getElementById("checkbtn");
  var cont = document.getElementById("content");
  var isFont = 0;
  var playercount = 0;
  btn.onclick = function () {
    if (playercount < playernum) {
      if (isFont) {
        // cirnum control
        var cir = $("#cir");
        if (playercount > 8) {
          // 两位数没做居中，先用样式凑合一下
          cir.addClass("cirnum-d");
        }
        
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
  var back = document.getElementById("back");
  var font = document.getElementById("font");
  // back to font
  function backTofont (playercount) {
    cont.innerHTML = "身份是" + ident[playercount];
    ranimate();
    if (playercount < playernum - 1) {
      btn.innerHTML = "隐藏并传递给" + (playercount + 2) + "号";
    }else {
      btn.innerHTML = "法官点击";
    }
  }
  // animate
  function ranimate () {
    var card = $("#card");
    var back = $("#back");
    var font = $("#font");
    card.css({
      "-webkit-transform":"perspective(600px) rotateY(90deg)",
         "-moz-transform":"perspective(600px) rotateY(90deg)",
              "transform":"perspective(600px) rotateY(90deg)"
    });
    setTimeout(function () {
      if (isFont) {
        back.css({"display": "none"});
        font.css({"display": "block"});
      }else {
        back.css({"display": "block"});
        font.css({"display": "none"});
      }
      card.css({
      "-webkit-transform":"perspective(600px) rotateY(0)",
         "-moz-transform":"perspective(600px) rotateY(0)",
              "transform":"perspective(600px) rotateY(0)"
      });
    },400);
  }

  // font to back
  var cir = document.getElementById("cir");
  function fontToback () {
    ranimate();
    btn.innerHTML = "查看" + (playercount + 1) + "号身份";
    cir.innerHTML = playercount + 1;
  }
  // to judge
  function toJudge () {
    window.location.href = "judge.html";
  }


  // ico
  $("#backico").click(function () {
    window.location.href = "paraset.html";
  });

});
