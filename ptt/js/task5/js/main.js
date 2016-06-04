function getForm (name) {
  return document.getElementsByName(name);
}

function checkedNum (name) {
  var radio = getForm(name);
  for (var i = 0; i <  radio.length; i++) {
    if (true === radio[i].checked) return (i + 1);
  }
}

function getTime (val) {
  var dateArr = val.replace(/[^0-9]/ig,",").split(",");
  var year = dateArr[0];
  var month = dateArr[1];
  var day = dateArr[2];
  var millsec = Date.parse(year + "/" + month + "/" + day);
  return millsec;
}

function getData () {
  var tmpData = {
    "name" : getForm("name")[0].value,
    "qq" : getForm("qq")[0].value,
    "type" : checkedNum("type"),
    "school" : getForm("school")[0].value,
    "talent" : checkedNum("talent"),
    "level" : checkedNum("level"),
    "joinTime" : getTime(getForm("joinTime")[0].value),
    "wish" : document.getElementById("wish").value
  }
  return tmpData;
}

function idGetObj (data,userid) {
  for (var i = 0; i < data.length; i++) {
    if (data[i].id == userid) return data[i];
  }
}

function isContEmp (cont) {
  for (attr in cont) {
    if ("" === cont[attr]) return false;
  }
  return true;
}
