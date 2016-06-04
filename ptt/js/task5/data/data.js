
var dataMap = {
  "type" : [{"content":"CSS"},{"content":"JS"},{"content":"JAVA"},{"content":"运维"},{"content":"DBA"},{"content":"产品"},{"content":"IOS"},{"content":"ANDROID"}],
  "talent" : [{"content":"学霸"},{"content":"学渣"}],
  "level" : [{"content":"0基础"},{"content":"修行3个月以内"},{"content":"修行6个月以内"},{"content":"修行1年以内"},{"content":"修行3年以内"},{"content":"修行3年以上"}]
}

function numDataToStr (data) {
  if ($.isArray(data)) {
    for (var i = 0; i < data.length; i++) {
      var d = new Date(data[i].joinTime);
      var year = d.getFullYear();
      var month = d.getMonth() + 1;
      var day = d.getDate();
      data[i].joinTime = year + "年" + month + "月" + day + "日" ;

      for (attr in data[i]) {
        if (isSame(attr)) {
          var num = data[i][attr] - 1;
          if (num > -1) {
            data[i][attr] = dataMap[attr][num].content;
          }else {
            data[i][attr] = dataMap[attr][0].content;
            alert(data[i].name+"，id："+data[i].id+"这条有问题，检查一下");
          }
        }
      }
    }
  }else {
      var d = new Date(data.joinTime);
      var year = d.getFullYear();
      var month = d.getMonth() + 1;
      var day = d.getDate();
      data.joinTime = year + "年" + month + "月" + day + "日" ;

      for (attr in data) {
        if (isSame(attr)) {
          var num = data[attr] - 1;
          if (num > -1) {
            data[attr] = dataMap[attr][num].content;
          }else {
            data[attr] = dataMap[attr][0].content;
            alert(data.name+"，id："+data.id+"这条有问题，检查一下");
          }
        }
      }
  }
  function isSame (attr) {
    for (mapAttr in dataMap) {
      if (attr === mapAttr) return true;
    }
    return false;
  }
}

function strDatToNum (title,str) {
  for (var i =0; i < dataMap[title].length; i++) {
    if (str === dataMap[title][i].content) return i;
  }
}
