$(function () {
  // ajax
  $.ajax({
    url : "/ajax/students",
    dataType: "json",
    success : function (datas) {
      var data = datas.data;
      const ONEPAGEN = 10; //每页多少条
      var pageNum = Math.ceil(data.length / ONEPAGEN);
      var pageArr = new Array();
      var position = 0;
      var delArr = new Array();

      // boot
      if(data.length) {
        var pageDataArr = getPageNum();
        creatPageBtn();
        numDataToStr(data);
        fillIndex(pageDataArr[0]);
        showChecked();
        changeBtnColor(position);
      }

      // 单击换页键
      $("#pagebtn span").click(function () {
        $("#content").html("");
        var btnId = $(this).attr("id").replace(/[^0-9]/ig,"");
        fillIndex(pageDataArr[btnId]);
        showChecked();
        changeBtnColor(btnId);

        // 重新给tr绑定click
        $("tbody tr").click(function () {
          var userid = $(this).attr("id").replace(/[^0-9]/ig,"");
          window.location.href = "detail.html?" + userid;
        });
        $(".checkbox").click(function () {
          var delid = $(this).attr("id").replace(/[^0-9]/ig,"");
          isChecked(delid);
        });
      });
      function changeBtnColor (id) {
        $("#pagebtn" + position).removeClass("nowpage");
        position = id;
        $("#pagebtn" + position).addClass("nowpage");
      }

      $("tbody tr").click(function () {
        var userid = $(this).attr("id").replace(/[^0-9]/ig,"");
        window.location.href = "detail.html?" + userid;
      });
      $("#sign").click(function () {
        window.location.href = "signup.html";
      });
      $(".checkbox").click(function () {
        var delid = $(this).attr("id").replace(/[^0-9]/ig,"");
        isChecked(delid);
      });
      $("#delbtn").click(function () {
        // 转为JSON字符串
        if (!(undefined === delArr[0])) {
          var ids = matchId();
          $.ajax({
            url : "/ajax/students",
            type : "POST",
            data : ids,
            success : function () {
              window.location.href = "index.html";
            }
          });
        }else {
          alert('未选择');
        }
      });
      function matchId () {
        var tmpStr = "id=" + delArr[0];
        for (var i = 1; i < delArr.length; i++) {
          tmpStr += "&id=" + delArr[i];
        }
        return tmpStr;
      }

      // 分页
      function getPageNum () {
        splitData();
        return pageArr;

        function splitData () {
          for (var i = 0; i < pageNum; i++) {
            var tmpArr = new Array();
            for (var j = 0; j < ONEPAGEN; j++) {
              tmpArr.push(data[i * ONEPAGEN + j]);
            }
            pageArr[i] = tmpArr;
          }
          // 除掉多余的元素
          var remainder = data.length % ONEPAGEN;
          if (remainder) {
            for (var k = 0; k < ONEPAGEN - remainder; k++) {
              pageArr[pageNum - 1].pop();
            }
          }
        }
      }

      function creatPageBtn () {
        var pageLine = $("#pagebtn");
        for (var i = 0; i < pageNum; i++) {
          pageLine.html(pageLine.html() + "<span id='pagebtn" + i + "'>" + (i + 1) + "</span>");
        }
      }

      // 多选删除

      function isChecked (id) {
        var isInArr = isIdInArr(id);
        if (isInArr) return delArr.splice(isInArr - 1,1);
        delArr.push(id);
      }
      function isIdInArr (id) {
        if (delArr.length) {
          for (var i = 0; i < delArr.length; i++) {
            if (id === delArr[i]) return (i + 1);
          }
          return false;
        }else {
          // 没有选人删除
          return false;
        }
      }

      function showChecked () {
        if (delArr.length) {
          for (var i = 0; i < delArr.length; i++) {
            var id = delArr[i];
            $("#delid"+id).prop("checked","true");
          }
        }
      }

    }
  });

  // 填数据
  function fillIndex (data) {
    for (var i = 0; i < data.length; i++) {
      var oldCont = $("#content").html()
            // <tr>
            //   <td>XD</td>
            //   <td>JAVA</td>
            //   <td>2015-12-3 22:09</td>
            // </tr>
      $("#content").html(oldCont +
                          "<input class='checkbox' id='delid" + data[i].id + "' name='isDel' type='checkbox' />" +
                          "<tr id='no" + data[i].id + "'>" +
                            "<td>" + data[i].name + "</td>" +
                            "<td>" + data[i].type + "</td>" +
                            "<td>" + data[i].joinTime + "</td>" +
                          "</tr>"
                       );
    }

  }




});
