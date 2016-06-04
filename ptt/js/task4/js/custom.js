
//@function 
//carousel
function carousel (ele, direct) {
  if ("left" === direct) {
    var pre = ele.prev();
    ele.animate({
      left: "+=100%"
    });
    pre.css("left","-100%")
    .animate({
      left: "+=100%"
    })
  }else if ("right" === direct) {
    var next = ele.next();
    ele.animate({
      left: "-=100%"
    });
    next.css("left","100%")
    .animate({
      left: "-=100%"
    })
  }
}

// 角色填充
function fullIn () {
  var ident = localStorage.identity.split(",");
  var content = "";
  for (var i = 0; i < ident.length; i++) {
    var identity = ident[i];
    content +=
    "<div class="+"'idcard'"+">"
      + "<p class="+"'idcard-id'"+">"+ identity + "</p>"
      + "<p class="+"'idcard-num'"+">" + (i + 1) + "号</p>"
      + "<div class="+"'choosebox'"+"></div>"
    + "</div>";
  }
  return content;
}


// btn

$("#backtojudge").click(function () {
  window.location.href = "judge2.html";
  
});
// 网上撸来的数字转中文数字
function NoToChinese(num) { 
if (!/^\d*(\.\d*)?$/.test(num)) { alert("Number is wrong!"); return "Number is wrong!"; } 
var AA = new Array("零", "一", "二", "三", "四", "五", "六", "七", "八", "九"); 
var BB = new Array("", "十", "佰", "仟", "萬", "億", "点", ""); 
var a = ("" + num).replace(/(^0*)/g, "").split("."), k = 0, re = ""; 
for (var i = a[0].length - 1; i >= 0; i--) { 
switch (k) { 
case 0: re = BB[7] + re; break; 
case 4: if (!new RegExp("0{4}\\d{" + (a[0].length - i - 1) + "}$").test(a[0])) 
re = BB[4] + re; break; 
case 8: re = BB[5] + re; BB[7] = BB[5]; k = 0; break; 
} 
if (k % 4 == 2 && a[0].charAt(i + 2) != 0 && a[0].charAt(i + 1) == 0) re = AA[0] + re; 
if (a[0].charAt(i) != 0) re = AA[a[0].charAt(i)] + BB[k % 4] + re; k++; 
} 

if (a.length > 1) //加上小数部分(如果有小数部分) 
{ 
re += BB[6]; 
for (var i = 0; i < a[1].length; i++) re += AA[a[1].charAt(i)]; 
} 
return re; 
} 
