$(function () {
  var userid = window.location.search.replace(/[^0-9]/ig,"");
  $.ajax({
    url : "/ajax/student/" + userid,
    dataType: "json",
    success : function (data) {
      numDataToStr(data);
      fillDetail(data);

      $("#edit").click(function () {
        window.location.href = "edit.html?" + userid;
      });
      $("#del").click(function () {
        var id = "id=" + userid;
        $.ajax({
          url : "/ajax/students",
          type : "POST",
          data : id,
          success : function () {
            window.location.href = "index.html";
          }
        });
      });

    }
  });

  function fillDetail (data) {
            // <p>XDYL</p>
            // <p>50409266</p>
            // <p>JAVA</p>
            // <p>北京天天蓝大学天天玩技术学院</p>
            // <p>学霸</p>
            // <p>0基础</p>
            // <p>2015年10月27日</p>
            // <p>如果我不能在IT特训营拼尽全力，为自己以后的修行路上打好基础，就让我变胖2斤！</p>
    $("#content").html("<p>" + data.name + "</p>" +
                       "<p>" + data.qq + "</p>" +
                       "<p>" + data.type + "</p>" +
                       "<p>" + data.school + "</p>" +
                       "<p>" + data.talent + "</p>" +
                       "<p>" + data.level + "</p>" +
                       "<p>" + data.joinTime + "</p>" +
                       "<p>" + data.wish + "</p>"
                      );
  }

  $("#back").click(function () {
    window.location.href = "index.html";
  });

});
