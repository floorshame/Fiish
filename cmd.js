function addLog(catagory, innertext) {
  var current = new Date();

  var hour = current.getHours();
  var minute = current.getMinutes();

  game.logamn += 1;
  if (game.logamn >= game.maxlog) {
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
      playaudio('error')

    } else if (result[1] == "-y" && game.dev == false) {
      game.dev = true;
      addLog("dev", "dev = " + game.dev)
    } else if (game.dev == true) {
      addLog("err", "you're already a dev")
      playaudio('error')

    }
  }  else if (result[0] == "sex") {
    if (result[1] == undefined || result[1] == "") {
      addLog("err", "add -y after sex !!")
      playaudio('error')

    } else if (result[1] == "-y") {
      window.open("https://www.pornhub.com/gay/");
      addLog("sex", "enjoy sex")
    } 

  } else if (result[0] == "max-log") {
    if (result[1] == undefined || result[1] == "") {
    } else {
      addLog("set", "set max log to" + result[1])
      game.maxlog = result[1];

    }
  }  else if (result[0] == "weather") {
    if (result[1] == undefined || result[1] == "") {
      errorcmd()

    } else {
      if (result[1] == "set" && result[2] <= 3 && result[2] >= 0 && game.dev == true) {
        gameTDM.currentweather = parseInt(result[2]);
        addLog("set", "weather has been set to : " + gameTDM.weatheroptions[result[2]]);

        updateweather();
      } else {
        errorcmd()
      } 
    }
  } else if (result[0] == "ponds") {
    if (result[1] == "unlock-all" && game.dev == true) {
      for (pod = 0; pod < ponds.unlocked.length; pod++) {
        addLog("ponds", "unlocked all ponds")

        ponds.unlocked[pod] = true;
        updateponds();

      }
    } else if (result[1] == "unlock" && game.dev == true && result[2] >= 0 && result[2] <= ponds.unlocked.length) {
      ponds.unlocked[result[2]] = true;
      addLog("ponds", "unlocked pond: " + ponds.name[result[2]])

      updateponds();
    } else {
      errorcmd()

    }
  } else if (result[0] == "set") {
    if (result[1] == "robo" && game.dev == true ) {
      roboparts.owned[result[2]] = parseInt(result[3]);
      roboparts.unlocked[result[2]] = true; 
      updateall();
      addLog("give", "given")

    } else if (result[1] == "money" && game.dev == true) {
     game.money = parseInt(result[2]);
     updateInventory();
    }else {
      errorcmd()
    }
  }
  else {
    errorcmd()
    }
}
function errorcmd() {
  addLog("err", "invalid command / no dev perms")
  playaudio('error')

}

window.setInterval(function() {
  var elem = document.getElementById('info-log-div');
  elem.scrollTop = elem.scrollHeight;
}, 5000);

