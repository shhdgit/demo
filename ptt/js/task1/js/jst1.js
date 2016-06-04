window.onload = function () {
  var timer = setInterval(function () {
    changeColor();
  },1000);

  var wrap = document.getElementById("wrap").children;
  var i = 0;
  var before = 0;
  function changeColor () {
    var rand = Math.ceil(Math.random() * 3);
    var color = "";
    var name = "";
    i = i % 9;
    wrap[before].style.backgroundColor = "#eee";
    switch (rand) {
      case 1:
        color = "#cb4042";
        name = "红色";
        break;
      case 2:
        color = "#ffc408";
        name = "黄色";
        break;
      case 3:
        color = "#3a8fb7";
        name = "蓝色";
        break;
    }
    wrap[i].style.backgroundColor = color;
    console.log("格子" + (i + 1) + "变成了" + name);
    before = i;
    i++;
  }
}
