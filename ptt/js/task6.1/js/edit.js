$(function () {
  var userid = window.location.search.replace(/[^0-9]/ig,"");
  var editor = new MediumEditor("#wish",{
    placeholder : false
  });

  $.ajax({
    url : "/ajax/student/" + userid,
    dataType: "json",
    success : function (data) {
      numDataToStr(data);
      fillData(data);

    }
  });

  function fillData (data) {
    getForm("name")[0].value = data.name;
    getForm("qq")[0].value = data.qq;
    getForm("type")[strDatToNum("type",data.type)].checked = true;
    getForm("school")[0].value = data.school;
    getForm("talent")[strDatToNum("talent",data.talent)].checked = true;
    getForm("level")[strDatToNum("level",data.level)].checked = true;
    getForm("joinTime")[0].value = data.joinTime;
    $("#wish").html(data.wish);
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
          window.location.href = "detail.html?" + userid;
        }
      });
    }
  });
  $("#cancel").click(function () {
    window.location.href = "detail.html?" + userid;
  });
})
