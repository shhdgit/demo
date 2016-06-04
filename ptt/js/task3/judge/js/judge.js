window.onload = function () {
  // swich
  var rbtn = document.getElementById("rbtn");
  var jbtn = document.getElementById("jbtn");
  var result = document.getElementById("result");
  var journal = document.getElementById("journal");
  rbtn.onclick = function () {
    result.style.display = "block";
    journal.style.display = "none";
    rbtn.style.backgroundColor = "#ffedc5";
    jbtn.style.backgroundColor = "#fff";
  }
  jbtn.onclick = function () {
    journal.style.display = "block";
    result.style.display = "none";
    rbtn.style.backgroundColor = "#fff";
    jbtn.style.backgroundColor = "#ffedc5";
  }

  // restart
  var restart = document.getElementById("restart");
  restart.onclick = function () {
    window.location.href = "..";
  }

  // get identity
  var ident = decodeURI(window.location.search).substring(1).split(",");
  console.log(ident);
  getIdent();

  function getIdent () {
    for (var i = 0; i < ident.length; i++) {
      result.value += (i + 1) + "号的身份是" + ident[i] + "\r\n";
    }
  }

}
