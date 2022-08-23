function addLog(catagory, innertext, color) {
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
  if (color == "green") {
    logelement.style.color = "#b3ffc1";
  } else if (color == "fiish") {
    logelement.style = "    background: -webkit-linear-gradient(360deg, var(--color-2), var(--color-3)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;     width: fit-content; text-shadow: 0px 0px transparent !important ;    "
  }
  else if (color == "red") {
    logelement.style.color = "#ffb3b3";

  } else if (color == "popup") {
    logelement.style.color = "var(--color-2)";

  }
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
      addLog("err", "add -y after dev !!", "red")
      playaudio('error')

    } else if (result[1] == "-y" && game.dev == false) {
      game.dev = true;
      addLog("dev", "dev = " + game.dev, "green")
    } else if (game.dev == true) {
      addLog("err", "you're already a dev", "red")
      playaudio('error')

    }
  }  else if (result[0] == "sex") {
    if (result[1] == undefined || result[1] == "") {
      addLog("err", "add -y after sex !!", "red")
      playaudio('error')

    } else if (result[1] == "-y") {
      window.open("https://www.pornhub.com/gay/");
      addLog("sex", "enjoy sex", "fiish")
    } 

  } else if (result[0] == "max-log") {
    if (result[1] == undefined || result[1] == "") {
    } else {
      addLog("set", "set max log to" + result[1], "green")
      game.maxlog = result[1];

    }
  }  else if (result[0] == "weather") {
    if (result[1] == undefined || result[1] == "") {
      errorcmd()

    } else {
      if (result[1] == "set" && result[2] <= 3 && result[2] >= 0 && game.dev == true) {
        gameTDM.currentweather = parseInt(result[2]);
        addLog("set", "weather has been set to : " + gameTDM.weatheroptions[result[2]], "green");

        updateweather();
      } else {
        errorcmd()
      } 
    }
  } else if (result[0] == "ponds") {
    if (result[1] == "unlock-all" && game.dev == true) {
      for (pod = 0; pod < ponds.unlocked.length; pod++) {
        addLog("ponds", "unlocked all ponds", "green")

        ponds.unlocked[pod] = true;
        updateponds();

      }
    } else if (result[1] == "unlock" && game.dev == true && result[2] >= 0 && result[2] <= ponds.unlocked.length) {
      ponds.unlocked[result[2]] = true;
      addLog("ponds", "unlocked pond: " + ponds.name[result[2]], "green")

      updateponds();
    } else {
      errorcmd()

    }
  } else if (result[0] == "set") {
    if (result[1] == "robo" && game.dev == true ) {
      game.roboparts = parseInt(result[2]);
      updateall();
      addLog("give", "given", "green")

    } else if (result[1] == "money" && game.dev == true) {
     game.money = parseInt(result[2]);
     updateInventory();
    }else {
      errorcmd()
    }
  } else if (result[0] == "") {
    
  } else if (gameTDM.popup == true) {
    randompopup(parseInt(result[0]));
  }
  else if (result[0] == "cls" || result[0] == "clear") {
    $('#info-log-div').empty();
    game.logamn = 0;
  }
  else {
    errorcmd()
    }
    document.getElementById('log-input').value = '';

}
function errorcmd() {
  addLog("err", "invalid command / no dev perms", "red")
  playaudio('error')

}

window.setInterval(function() {
  var elem = document.getElementById('info-log-div');
  elem.scrollTop = elem.scrollHeight;
}, 5000);

if (document.addEventListener) {
  document.addEventListener('contextmenu', function(e) {

    e.preventDefault();
  }, false);

}


function boompfp() {
  playaudio("boom")
  setTimeout(() => {
    document.getElementById('menu-pfpid').src = "img/fiishfake.png";
    addLog('!!!', 'boom', 'fiish')
  }, 150);
  setTimeout(() => {
    document.getElementById('menu-pfpid').src = game.pfp;

  }, 1500);
}

