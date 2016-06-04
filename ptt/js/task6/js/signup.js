$(function () {
  $("#wish").summernote({
    lang : "zh-CN",
    height : 200,
    minHeight : 200,
    maxHeight : 200,
    toolbar : [
      ['style', ['bold', 'italic', 'underline', 'clear']],
      ['font', ['strikethrough']],
      ['fontsize', ['fontsize']],
      ['color', ['color']],
      ['para', ['ul', 'ol', 'paragraph']],
      ['height', ['height']]
    ]
  });

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

