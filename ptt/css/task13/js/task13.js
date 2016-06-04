var flag = 0;
var tiemer = "";
var time = 1000;
var before = 0;
function left (){
  before = flag;
  $("#cir" + before).prop("src","img/ico_05_01.png");
  pre();
  $(".right").unbind("click");
  $(".left").unbind("click");
  tiemer = setTimeout(function(){
    $(".right").click(right);
    $(".left").click(left);
  },time);
  $("#cir" + flag).prop("src","img/ico_05_02.png");
}
$(".left").click(left);

function right (){
  before = flag;
  $("#cir" + before).prop("src","img/ico_05_01.png");
  next();
  $(".right").unbind("click");
  $(".left").unbind("click");
  tiemer = setTimeout(function(){
    $(".right").click(right);
    $(".left").click(left);
  },time);
  $("#cir" + flag).prop("src","img/ico_05_02.png");
}
$(".right").click(right);



function next () {
  switch (flag) {
    case 0:
      $("#banner1").css("left","0");
      $("#banner2").css("left","100%");
      flag++;
      $("#banner1").animate({left:'-100%'},1000);
      $("#banner2").animate({left:'0'},1000);
      break;
    case 1:
      $("#banner2").css("left","0");
      $("#banner3").css("left","100%");
      flag++;
      $("#banner2").animate({left:'-100%'},1000);
      $("#banner3").animate({left:'0'},1000);
      break;
    case 2:
      $("#banner3").css("left","0");
      $("#banner1").css("left","100%");
      flag = 0;
      $("#banner3").animate({left:'-100%'},1000);
      $("#banner1").animate({left:'0'},1000);
      break;
  }
}
function pre () {
  switch (flag) {
    case 0:
      $("#banner1").css("left","0");
      $("#banner3").css("left","-100%");
      flag = 2;
      $("#banner1").animate({left:'100%'},1000);
      $("#banner3").animate({left:'0'},1000);
      break;
    case 1:
      $("#banner2").css("left","0");
      $("#banner1").css("left","-100%");
      flag--;
      $("#banner2").animate({left:'100%'},1000);
      $("#banner1").animate({left:'0'},1000);
      break;
    case 2:
      $("#banner3").css("left","0");
      $("#banner2").css("left","-100%");
      flag--;
      $("#banner3").animate({left:'100%'},1000);
      $("#banner2").animate({left:'0'},1000);
      break;
  }
}
