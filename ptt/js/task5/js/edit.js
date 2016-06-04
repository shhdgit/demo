$(function () {
  var userid = window.location.search.replace(/[^0-9]/ig,"");
  $.ajax({
    url : "/ajax/student/" + userid,
    dataType: "json",
    success : function (data) {
      numDataToStr(data);
      fillData(data);

    }
  });

  function fillData (data) {
    var user = data;
    getForm("name")[0].value = user.name;
    getForm("qq")[0].value = user.qq;
    getForm("type")[strDatToNum("type",user.type)].checked = true;
    getForm("school")[0].value = user.school;
    getForm("talent")[strDatToNum("talent",user.talent)].checked = true;
    getForm("level")[strDatToNum("level",user.level)].checked = true;
    getForm("joinTime")[0].value = user.joinTime;
    getForm("wish")[0].value = user.wish;
  }


  $("#comp").click(function () {
    if (!isContEmp(getData())) {
      $("#err").html("有内容没填");
    }else {
      $.ajax({
        url : "/ajax/student/" + userid,
        type : "PUT",
        data : getData(),
        success : function () {
          window.location.href = "index.html";
        }
      });
    }
  });
  $("#cancel").click(function () {
    window.location.href = "detail.html?" + userid;
  });
})
