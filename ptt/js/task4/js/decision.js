$(function () {
  // M
  var version = localStorage.gameversion;
  var decistate = localStorage.decistate;
  var deadnum = localStorage.deadnum;
  var deadArr = localStorage.deadnum.split(",");


  // config
  // 
  var sr1 = [
    "杀手杀人,杀手请杀人,点击下方玩家头像，对被杀的玩家进行标记",
    "投票,发言结束，大家请投票,点击得票数最多人的头像"
  ];


  // V
  // content
  configfill();
  fillDeadColor();

  // 点击头像
  var prevBox = null;
  var whoDead = "";      //记录这次谁死了
  $(".idcard").click(function () {
    whoDead = parseInt($(this).find(".idcard-num").html()) - 1;
    var choosebox = $(this).find(".choosebox");
    if (prevBox) prevBox.css("display","none");
    choosebox.css("display","block");
    prevBox = choosebox;
  });

  // confirm button
  $("#confirmbtn").click(function () {
    pageJump();
  });



  // C
  // 注入配置
  function configfill () {
    var idcontent = $("#idcontent");
    idcontent.html(fullIn() );

    var fillcontent = sr1[decistate].split(",");
    $("#title").html(fillcontent[0]);
    $("#procedure").html(fillcontent[1]);
    $("#tips").html(fillcontent[2]);
  }

  // 记录死亡者
  function recorder () {
    if (isRepeat() ) {
      if (localStorage.deadnum === ""){
        localStorage.deadnum += whoDead;
      }else {
        localStorage.deadnum += "," + whoDead;
      }
    }
  }
  function isRepeat () {
    for (var i = 0; i < deadArr.length; i++) {
      if (parseInt(deadArr[i]) === whoDead) return false;
    }
    return true;
  }

  // 判断游戏是否结束
  function pageJump () {
    if ("" !== whoDead) {
      recorder();
      if (isOver()) {
        window.location.href = "result.html";
        // 选择后才可跳转
      }else {
        if (deadnum !== localStorage.deadnum) {
          localStorage.decistate = parseInt(decistate) + 1;
          window.location.href = "notice.html";
        }
      }
    }


    function isOver () {
      var playernum = localStorage.identity.split(",").length;
      var killernum = parseInt(localStorage.killernum);
      var famernum = playernum - killernum;
      var deadGroup = localStorage.deadnum.split(",");
      for (var i = 0; i < deadGroup.length; i++) {
        if ("杀手" === $(".idcard-id")[deadGroup[i]].innerHTML ) {
          killernum--;
        }else {
          famernum--;
        }
      }
      if (killernum === famernum) {
        // killerwin
        localStorage.result = "0";
        return true;
      }else if (0 === killernum) {
        // famerwin
        localStorage.result = "1";
        return true;
      }else {
        return false;
      }

    }
  }

  // 死人卡片变色
  function fillDeadColor () {
    var card = $(".idcard-id");
    for (var i = 0; i < deadArr.length; i++) {
      $(card[deadArr[i]]).addClass("card-id-dead");
    }
  }

});
