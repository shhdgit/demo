$(function () {
  // M
  var version = localStorage.gameversion;
  var days = parseInt(localStorage.days);
  // 只需加入版本，自动注入
  // module
  var prof = {
    "killer":"night_杀手杀人",
    "talk":"day_玩家依次发言",
    "vote":"day_投票",
    "say":"day_遗言"

  }
  // version
  var sr1 = [prof.killer,prof.talk,prof.vote,prof.say];


  // V  
  // ico
  $("#backico").click(function () {
    window.location.href = "judge.html";
  });

  // C
  // initial
  choosever();
  // for copyBlock
  var main = $("#main");
  var firstCopy = main.html();
  copyBlock();
  // 哪一个day展开
  mainday();

  function mainday () {
    var dayblocks = $(".content-wrap");
    dayblocks[days].style.display = "block";
  }


  // choose version
  function choosever () {
    var ver = null;
    switch (version) {
      case "sr1.0":
        ver = sr1;
        break;

    }

    var night = $("#night");
    var day = $("#day");
    var nightmove = "";
    var daymove = "";
    for (var i = 0; i < ver.length; i++) {
      var status = ver[i].split("_");
      if ("night" === status[0]) {
        night.html(night.html() +
          "<div class=" + "'" + "proce" + "'" + ">"
             + "<p>" + status[1] + "</p>"
           + "</div>"
        );
      }else {
        day.html(day.html() +
          "<div class=" + "'" + "proce" + "'" + ">"
             + "<p>" + status[1] + "</p>"
           + "</div>"
        );
      }
    }
  }

  function copyBlock () {
    for (var i = 0; i < days; i++) {
      main.html(main.html()
      + firstCopy);
      $(".daynum").eq(i + 1).html("第" + NoToChinese(i + 2) + "天");
    }
  }





  // warning
  $(".day-card:eq(" + days + ") .proce:eq(" + localStorage.decistate + ")").click(function () {
    window.location.href = "decision.html";
  });

  // slidetoggle
  var slidebtn = $(".day-moreico");
  slidebtn.click(function () {
    $(this).next().next().slideToggle();
  });

});

