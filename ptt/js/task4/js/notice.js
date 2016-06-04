$(function () {
  // M 
  var identity = localStorage.identity.split(",");
  var noticestate = localStorage.noticestate;
  var deadnum = localStorage.deadnum.split(",");
  var day = parseInt(localStorage.days);


  // V
  fillContent();

  // button
  $("#jumpbtn").click(function () {
    pageJump();
  });


  // C
  function fillContent () {
    // 填提示部分
    var notice = $("#notice");
    for (var i = 0; i < deadnum.length; i++) {
      var dnum = parseInt(deadnum[deadnum.length - 1 - i] ) + 1;
      notice.html(
        notice.html() + "<p>" + dnum + "号被杀死了，真实身份是" + identity[deadnum[deadnum.length - 1 - i]] + "</p>"
      );
    }

    // 填流程部分
    var proceContent = "";
    var btnContent = "";
    var imgContent = "";
    if ("0" === noticestate) {
      proceContent = "玩家依次发言讨论";
      btnContent = "去投票";
      imgContent = "../img/cryman.png";
    }else {
      proceContent = "死者发表遗言";
      btnContent = "第" + NoToChinese(day + 2) + "天";
      imgContent = "../img/crygirl.png";
    }
    $("#procedure").html(proceContent);
    $("#jumpbtn").html(btnContent);
    $(".content-notice").css("background-image","url(" + imgContent + ")");

  }

  function pageJump () {
    if ("0" === noticestate) {
      localStorage.noticestate = 1;
      window.location.href = "decision.html";
    }else {
      localStorage.noticestate = 0;
      localStorage.decistate = 0;
      localStorage.days = day + 1;
      window.location.href = "judge2.html";
    }

  }

});
