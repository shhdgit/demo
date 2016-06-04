$(function () {

  $("#cancel").click(function () {
    window.location.href = "index.html";
  });
  $("#sign").click(function () {
    if (!isContEmp(getData())) {
      $("#err").html("有内容没填");
    }else {
      $.ajax({
        url : "/ajax/student",
        type : "POST",
        data : getData(),
        success : function () {
          window.location.href = "index.html";
        }
      });
    }
  });

});
