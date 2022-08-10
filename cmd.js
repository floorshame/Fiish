function addLog(catagory, innertext) {
  var current = new Date();

  var hour = current.getHours();
  var minute = current.getMinutes();

  game.logamn += 1;
  if (game.logamn >= 13) {
    for (lm = 0; lm < game.logamn; lm++) {
      var leem = document.getElementById(lm + "-log");
      if (typeof(leem) != 'undefined' && leem != null) {
        document.getElementById(lm + "-log").remove();
        game.logamn -= 1;
        break;       
  
      }
    }

  } 
  var logelement = document.createElement("p");
  logelement.className = "log-text";
  logelement.id = game.logamn + "-log";
  var logtext = document.createTextNode(hour + ':' + minute + '|' + catagory + ' - ' + innertext);
  logelement.appendChild(logtext);
  var loogelement = document.getElementById("info-log-div");
  loogelement.appendChild(logelement);  

}
const cmdbarinp = document.getElementById('log-input');

cmdbarinp.addEventListener("keydown", function (e) {
  if (e.keyCode == 13) {
    cmd(e);
  }
});

function cmd(inputvalue) {
  var cmdinput = document.getElementById('log-input').value;
  const result = cmdinput.split(" ");
  if (result[0] == "echo") {
    addLog('echo', result[1])

  } else if (result[0] == "dev") {
    if (result[1] == undefined || result[1] == "") {
      addLog("err", "add -y after dev !!")
    } else if (result[1] == "-y" && game.dev == false) {
      game.dev = true;
      addLog("dev", "you're now a dev")
    } else if (game.dev == true) {
      addLog("err", "you're already a dev")
    }
  }  else if (result[0] == "sex") {
    if (result[1] == undefined || result[1] == "") {
      addLog("err", "add -y after sex !!")
    } else if (result[1] == "-y") {
      window.open("https://www.pornhub.com/gay/");
      addLog("sex", "enjoy sex")
    } 

  } else {
    addLog("err", "invalid command")

  }
}
