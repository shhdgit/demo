window.onload = function () {
  var pnum = document.getElementById("pnum");
  var btn = document.getElementById("start");

  btn.onclick = function () {
    window.location.href = "start/index.html?" + pnum.value;
  }

}
