/* POND CODE */

document.getElementById('command-bar').style.display = 'none';

const cmdbardiv = document.getElementById('command-bar');
const cmdbarinp = document.getElementById('cmd-bar-input');

document.addEventListener("keydown", function(event) {
  if (event.which == 191) { 
      event.preventDefault();
      commandbar();
  }
}, false);

function commandbar() {

  cmdbardiv.style.display = '';
  cmdbarinp.value = '';
  cmdbarinp.focus();

}

document.addEventListener('click', function handleClickOutsideBox(event) {
  if (!cmdbardiv.contains(event.target)) {
    cmdbardiv.style.display = 'none';
    cmdbarinp.value = '';

  }
});

cmdbarinp.addEventListener("keydown", function (e) {
    if (e.keyCode == 13) {
      cmdansw(e);
    }
});

function cmdansw(e) {
  var cmdtext = cmdbarinp.value;
  if(cmdtext == "discord") {
    window.open("https://discord.gg/mDyTKs63x7");
  } else if(cmdtext == "sex") {
    if (confirm("Are you over 18? (translation: do you wana see sex)")) {
      window.open("https://www.reddit.com/r/yiff/");
    }
  } 
  cmdbarinp.value = '';

}


function pondswitch(id) {
    if (ponds.active[id] == true) {
        ponds.activeponds -= 1;
        ponds.active[id] = false;
        document.getElementById("pond-btn-" + id).style = "border: var(--borderwith) solid rgba(255, 255, 255, 0);"
        updateponds();

    } else {
        if (ponds.pondslimit > ponds.activeponds) {
            ponds.activeponds += 1;
            ponds.active[id] = true;
            document.getElementById("pond-btn-" + id).style = "border: var(--borderwith) solid var(--color-1);"
            updateponds();


        }else if (ponds.pondslimit == ponds.activeponds) {
            updateponds();



        }
    }
}

function updateponds() {
  for (i = 0; i < ponds.unlocked.length; i++) {
    if (ponds.unlocked[i] == false) {
      document.getElementById("pond-btn-" + ponds.id[i]).style.display = 'none';
      
      document.getElementById("pond-weather-" + ponds.id[i]).innerHTML =  gameTDM.weathericon[ponds.weatherboost[i]];

    } else if (ponds.unlocked[i] == true) {
      document.getElementById("pond-btn-" + ponds.id[i]).style.display = '';

      document.getElementById("pond-weather-" + ponds.id[i]).innerHTML =  gameTDM.weathericon[ponds.weatherboost[i]];
    }
  }
  document.getElementById("pond-curactiv").innerHTML = ponds.activeponds; //* DO NOT SHORTEN THESE *//
  document.getElementById("pond-maxactiv").innerHTML = ponds.pondslimit; //* DO NOT SHORTEN THESE *//

}

function updateponds2() {
  for (i = 0; i < ponds.active.length; i++) {
    if (ponds.active[i] == true) {
      document.getElementById("pond-btn-" + i).style = "border: var(--borderwith) solid var(--color-1);"

    } else if (ponds.active[i] == false) {
      document.getElementById("pond-btn-" + i).style = "border: var(--borderwith) solid rgba(255, 255, 255, 0);"

    }
  }
}

function updateweather() {
  if (gameTDM.hour < 6 || gameTDM.hour > 18) {
    gameTDM.currentweather = 3;
    gameTDM.weatherset = false;
    document.getElementById("cur-weather-icon").innerHTML = gameTDM.weathericon[3]

  }else if (gameTDM.hour >= 6 && gameTDM.hour <= 18 && gameTDM.weatherset == false) {
    let x = Math.floor((Math.random() * 3) + 1);
    switch(x) {
      case 1:
        gameTDM.weatherset = true;
        gameTDM.currentweather = 0;
        createNotification('Todays weather is: ' + gameTDM.weatheroptions[gameTDM.currentweather], 10)
        document.getElementById("cur-weather-icon").innerHTML = gameTDM.weathericon[0]
        break;
      case 2:
        gameTDM.weatherset = true;
        gameTDM.currentweather = 1;
        createNotification('Todays weather is: ' + gameTDM.weatheroptions[gameTDM.currentweather], 10)
        document.getElementById("cur-weather-icon").innerHTML = gameTDM.weathericon[1]

      break;
      case 3:
        gameTDM.weatherset = true;
        gameTDM.currentweather = 2;
        createNotification('Todays weather is: ' + gameTDM.weatheroptions[gameTDM.currentweather], 10)
        document.getElementById("cur-weather-icon").innerHTML = gameTDM.weathericon[2]

      break;
  
    }
  }
  document.getElementById("weather-current").innerHTML = gameTDM.weatheroptions[gameTDM.currentweather]
  document.getElementById("cur-weather-icon").innerHTML = gameTDM.weathericon[gameTDM.currentweather]
}

setInterval(function() {
    if (ponds.activeponds >= 1) {
        for (i = 0; i < fish.pond.length; i++) { /* every fish */
            var fishpondactive = fish.pond[i] /* gets the fish pond */
            if (ponds.active[fishpondactive] == true) { /* need to check to see if that pond is active */
                if (ponds.weatherboost[fishpondactive] == gameTDM.currentweather) {
                  let x = Math.floor((Math.random() * 10) + 1);
                  if (x == 5) {
                    fish.owned[i] += 1 * fish.fishmulti[i] * 2;
                    updateInventory();
                    document.getElementById("fish-bar").value = 0;

                    
                  } else {
                    fish.owned[i] += 1 * fish.fishmulti[i];
                    updateInventory();  
                    document.getElementById("fish-bar").value = 0;

                  }
                } else {
                  fish.owned[i] += 1 * fish.fishmulti[i];
                  updateInventory();
                  document.getElementById("fish-bar").value = 0;

                }
            }
        }
    }
}, ponds.interval * 1000);

setInterval(function() {
  if (ponds.activeponds >= 1) {
  document.getElementById("fish-bar").value += 10;
  } else {
    document.getElementById("fish-bar").value = 0;

  }

}, ponds.interval * 10);

document.getElementById("pond-fishing-tab").style.display = 'none';


function pondtabswitch(id) {
  if (pondtab.active[id] == false) {
    if (id == 0) {
      document.getElementById("pond-fishing-tab").style.display = 'none';
      document.getElementById("pond-select-tab").style.display = '';
      pondtab.active[0] = true;
      pondtab.active[1] = false;

    }else if (id == 1) {
      document.getElementById("pond-select-tab").style.display = 'none';
      document.getElementById("pond-fishing-tab").style.display = '';
      pondtab.active[1] = true;
      pondtab.active[0] = false;


    }
  }
}
/*  INFO SYSTEM */

function updateInventory() {
  for (i = 0; i < fish.name.length; i++) {
    shortennum(fish.owned[i], fish.name[i] + "-inv-text");
  }
  for (i = 0; i < ponds.unlocked.length; i++) {
    if (ponds.unlocked[i] == false) {
      document.getElementById(fish.name[ponds.id[i]] + "-inv-text").style.display = 'none';
      document.getElementById(fish.name[ponds.id[i]] + "-outer-text").style.display = 'none';

    } else if (ponds.unlocked[i] == true) {
      document.getElementById(fish.name[ponds.id[i]] + "-inv-text").style.display = '';
      document.getElementById(fish.name[ponds.id[i]] + "-outer-text").style.display = '';

    }
  }
  shortennum(game.money, "money-inv-text")
}

function infotabswitch(id) {
  if (infotab.active[id] == false) {
    for (i = 0; i < infotab.active.length; i++) {
      if (infotab.active[i] == true) {
        document.getElementById("info-tab-" + infotab.name[i]).style.display = 'none';
        infotab.active[i] = false;
        document.getElementById("info-tab-" + infotab.name[i]).style.animation = 'windowfadeout var(--animationtime)'

      } else if (infotab.active[i] == false & infotab.name[i] == infotab.name[id]) {
        document.getElementById("info-tab-" + infotab.name[id]).style.display = '';
        infotab.active[id] = true;
        document.getElementById("info-tab-" + infotab.name[id]).style.animation = 'windowfadein var(--animationtime)'
      }
    }
  }
}

function updateinfotab() {
  for (i = 0; i < infotab.active.length; i++) {
    if (infotab.active[i] == false) {
      document.getElementById("info-tab-" + infotab.name[i]).style.display = 'none';
    }
    
  }
}


/* time */

setInterval(function() {
  if (gameTDM.minute < 59) {
    gameTDM.minute += 1;
    displayclock();
    updateweather();
  }else if (gameTDM.minute == 59 || gameTDM.minute > 59) {
    if (gameTDM.hour < 24) {
      gameTDM.minute = 0;
      gameTDM.hour += 1;
      displayclock()
      updateweather();
    }else if (gameTDM.hour == 24 & gameTDM.minute == 59) {
      gameTDM.hour = 0;
      gameTDM.minute = 0;
      displayclock();
      updateweather();
    }
  }
}, 1000);


function displayclock() {
  var clockidtext = document.getElementById("clock-text");
  if (gameTDM.minute < 10) {
    var displayminute = '0' + gameTDM.minute
    document.getElementById("clock-text").innerText = gameTDM.hour + ':' + displayminute;
  } else {
    document.getElementById("clock-text").innerText = gameTDM.hour + ':' + gameTDM.minute;

  }
}

/* COLOR PICKER */
const colorPicker = document.querySelectorAll("input.input-color-picker");

const colorUpdate = (cssVars) => {
  const root = document.querySelector(":root");
  const keys = Object.keys(cssVars);
  keys.forEach((key) => {
    root.style.setProperty(key, cssVars[key]);
  });
};

colorPicker.forEach((item) => {
  item.addEventListener("input", (e) => {
    const cssPropName = `--color-${e.target.getAttribute("data-id")}`;
    colorUpdate({
      [cssPropName]: e.target.value
    });
  });
});



/* NOTIFCATIONS */

const NotificationConst = document.querySelector('.Notification')


function createNotification(text, seconds){
  const NotificationN = document.createElement('div')
  document.getElementById('Noti').style.animation = 'slidenotifaction 0.3s forwards'
  NotificationN.classList.add('toast')
  NotificationN.innerText = text
  NotificationN.style = 'padding: 10px; backdrop-filter: blur(8px); border-bottom-left-radius: var(--borderradius); border-bottom-right-radius: var(--borderradius);';
  NotificationConst.appendChild(NotificationN);

  setTimeout(() => {NotificationN.remove(); }, seconds * 1000)

  
}


/* SHOP SYSTEM */

function shoptabswitch(id) {
  if (shoptab.active[id] == false) {
    for (i = 0; i < shoptab.active.length; i++) {
      if (shoptab.active[i] == true) {
        document.getElementById("shop-tab-" + shoptab.name[i]).style.display = 'none';
        shoptab.active[i] = false;
        document.getElementById("shop-tab-" + shoptab.name[i]).style.animation = 'windowfadeout var(--animationtime)'

      } else if (shoptab.active[i] == false & shoptab.name[i] == shoptab.name[id]) {
        document.getElementById("shop-tab-" + shoptab.name[id]).style.display = '';
        shoptab.active[id] = true;
        document.getElementById("shop-tab-" + shoptab.name[id]).style.animation = 'windowfadein var(--animationtime)'
      }
    }
  }
}

function updateshoptab() {
  for (i = 0; i < shoptab.active.length; i++) {
    if (shoptab.active[i] == false) {
      document.getElementById("shop-tab-" + shoptab.name[i]).style.display = 'none';
    }
    
  }
  shortennum(ponds.nextpondprice, "shop-ponds-buynextpond");

}

function sellfish() {
  var fishownedtmp = fish.owned[document.getElementById("shop-sell-fish").value]
  if (fishownedtmp >= 1) {
    game.money = game.money + fishownedtmp * fish.sellprice[document.getElementById("shop-sell-fish").value] * fish.sellmulti;
    game.totalmoney += fishownedtmp * fish.sellprice[document.getElementById("shop-sell-fish").value] * fish.sellmulti;
    createNotification('Sold: ' + fishownedtmp + ' Fish', 3)
    fish.owned[document.getElementById("shop-sell-fish").value] = 0;
    updateInventory();
  } else {
    createNotification("You don't have any fish!", 1)

  }
}

// * ACTIONS * //
function updateactions() {
  shortennum(actionssearch.price[0], "actions-searchforponds");
  for (i = 0; i < actiontab.active.length; i++) {
    if (actiontab.active[i] == false) {
      document.getElementById("action-tab-" + actiontab.name[i]).style.display = 'none';
    }
    if (actionssearch.activejob[i] == true && actionssearch.ajset[i] == false) {
      actAJ("create", actionssearch.name[i] + "ajTEMP", i, actionssearch.name[i]);
    }
    if (actionssearch.activejob[i] == false && actionssearch.ajset[i] == true) {
      actAJ("destroy", actionssearch.name[i] + "ajTEMP", i, actionssearch.name[i]);
    }
  }
}

function actAJ(createordestroy, nameofaction, id, actionanme) {
  if (createordestroy == "create") {
    var eleeement = document.createElement("p");
    eleeement.id = nameofaction;
    eleeement.className = "action-aj";
    var text = document.createTextNode(actionanme);
    eleeement.appendChild(text);
    var element = document.getElementById("action-tab-activejobs");
    element.appendChild(eleeement);

    actionssearch.ajset[i] = true;
  } else if (createordestroy == "destroy") {
    var deeeestroy = document.getElementById(nameofaction);
    deeeestroy.remove();
    actionssearch.ajset[i] = false;

  }
}

function actionSearch(searchid) {
  if (searchid == 0) {
    if (game.money >= actionssearch.price[searchid] && actionssearch.activejob[searchid] == false) {
      actionssearch.activejob[searchid] = true;
      game.money -= actionssearch.price[searchid];
      actionssearch.price[searchid] *= 6;
      updateInventory();
      updateactions();
    } else {
      createNotification("Your unable to search", 3);
      updateactions();

    }
  }
}


setInterval(function() {
  for (i = 0; i < actionssearch.activejob.length; i++) {
    if (actionssearch.activejob[i] == true && actionssearch.timeleft[i] !== actionssearch.timeneeded[i]) {
      actionssearch.timeleft[i] += 1;
    console.log(actionssearch.timeleft[i])
    } else if (actionssearch.timeleft[i] == actionssearch.timeneeded[i]) {
      if (i == 0) {
        ponds.unlocked[actionssearch.nextpondid] = true;
        actionssearch.nextpondid += 1;
        actionssearch.activejob[i] = false;
        actionssearch.timeleft[i] = 0;
        updateactions();
        updateponds();
      }
    }
  }
}, 60000);

function actiontabswitch(id) {
  if (actiontab.active[id] == false) {
    for (i = 0; i < actiontab.active.length; i++) {
      if (actiontab.active[i] == true) {
        document.getElementById("action-tab-" + actiontab.name[i]).style.display = 'none';
        actiontab.active[i] = false;
        document.getElementById("action-tab-" + actiontab.name[i]).style.animation = 'windowfadeout var(--animationtime)'

      } else if (actiontab.active[i] == false & actiontab.name[i] == actiontab.name[id]) {
        document.getElementById("action-tab-" + actiontab.name[id]).style.display = '';
        actiontab.active[id] = true;
        document.getElementById("action-tab-" + actiontab.name[id]).style.animation = 'windowfadein var(--animationtime)'
      }
    }
  }
}


// * SOUNDS * //

var SOUNDrain = new Audio('sdns/rain.wav'); 
SOUNDrain.loop = true;


setInterval(function() {
  if (document.getElementById("settings-ESounds").checked == true) {
    if (gameTDM.currentweather == 2) {
      
      SOUNDrain.addEventListener('ended', function() {
        SOUNDrain.currentTime = 0;
        SOUNDrain.play();
      }, true);
      SOUNDrain.play();

    }

  } else   if (document.getElementById("settings-ESounds").checked == false) {
    SOUNDrain.pause();
    SOUNDrain.currentTime = 0;
    
  }
}, 100);


// * WORKERS * //

function updateworkers() {

  for (i = 0; i < workers.basecost.length; i++) {
    if (workers.owned >= 1) {
      workers.newcost[i] = workers.basecost[i] * ponds.nextpondid * workers.owned[i]; //* NEEDS TO BE CHANGED IN THE FUTURE FOR BALANCING
      shortennum(workers.newcost[i], "workprice-" + workers.id[i]);
    }
  }
  shortennum(workers.newcost[i], "workprice-" + workers.id[i]);


}

function workeraction(workerid) {
  if (workers.firemode == false && game.money >= workers.newcost[workerid]) {
    workers.owned[workerid] += 1;
    game.money -= workers.newcost[workerid];
    updateInventory();
  }
}

setInterval(function() {
  if (workers.owned >= 1) {
    for (i = 0; i < workers.newcost.length; i++) {
      if (game.money >= workers.newcost[i] * workers.owned[i]) {
        game.money -= workers.newcost[i] * workers.owned[i];
        updateInventory();
        createNotification("Your workers have been paid for!", 1)
      } else {
        workers.owned[i] = 0;
        createNotification("You didn't have enough money to pay for your workers!", 5);
        updateInventory();
      }
    }
  }
}, 60000);


function workerfiretoggle() {
  if (workers.firemode) {
    document.getElementById('worker-fire-btn').style = ';'

    workers.firemode = false;

  } else if (workers.firemode == false) {
    document.getElementById('worker-fire-btn').style = 'border: 2px solid red;'
    workers.firemode = true;

  }
}

function saveGame() {
  var gamedata = {
      /* main vars*/
      money: game.money,
      dev: game.dev,

      /* weather time */
      currentWeather: gameTDM.currentweather,
      currentHour: gameTDM.hour,
      currentMinute: gameTDM.minute,
      currentWeatherSet: gameTDM.weatherset,
      currentWeatherNotications: gameTDM.weathernotifactions,

      /* fish data */
      fishOwned: fish.owned,
      fishSellPrice: fish.sellprice,
      fishMulti: fish.fishmulti,
      fishSellMulti: fish.sellmulti,

      /* ponds data */
      pondsFishPer: ponds.fishper,
      pondsUnlocked: ponds.unlocked,
      pondsNPID: ponds.nextpondid,
      pondsLimit: ponds.pondsLimit,
      pondsInterval: ponds.interval,

      /* action search */
      actionsSearchPrice: actionssearch.price,
      actionsSearchTimeL: actionssearch.timeleft,
      actionsSearchActive: actionssearch.activejob,
      actionsNextPondID: actionssearch.nextpondid,


  };
  localStorage.setItem("gamedata", JSON.stringify(gamedata));
  createNotification('Game has been saved', 3)

}
function loadGame() {
  var gamedata =  JSON.parse(localStorage.getItem("gamedata"));
  if (localStorage.getItem("gamedata") !== null) {
      if (typeof gamedata.money !== "undefined") game.money = gamedata.money;    
      
      if (typeof gamedata.currentWeather !== "undefined") gameTDM.currentweather = gamedata.currentWeather;    
      if (typeof gamedata.currentHour !== "undefined") gameTDM.hour = gamedata.currentHour;    
      if (typeof gamedata.currentMinute !== "undefined") gameTDM.minute = gamedata.currentMinute;    
      if (typeof gamedata.currentWeatherSet !== "undefined") gameTDM.weatherset = gamedata.currentWeatherSet;    
      if (typeof gamedata.currentWeatherNotications !== "undefined") gameTDM.weathernotifactions = gamedata.currentWeatherNotications;    
      if (typeof gamedata.fishSellMulti !== "undefined") fish.sellmulti = gamedata.fishSellMulti;    
      if (typeof gamedata.pondsNPID !== "undefined") ponds.nextpondid = gamedata.pondsNPID;    
      if (typeof gamedata.pondsLimit !== "undefined") ponds.pondslimit = gamedata.pondsLimit;    
      if (typeof gamedata.pondsInterval !== "undefined") ponds.interval = gamedata.pondsInterval;    
      if (typeof gamedata.dev !== "undefined") game.dev = gamedata.dev;    
      if (typeof gamedata.actionsNextPondID !== "undefined") actionssearch.nextpondid = gamedata.actionsNextPondID;    


      if (typeof gamedata.fishOwned !== "undefined") {
          for (i = 0; i < gamedata.fishOwned.length; i++) {
              fish.owned[i] = gamedata.fishOwned[i];
          }
      }

      if (typeof gamedata.fishSellPrice !== "undefined") {
          for (i = 0; i < gamedata.fishSellPrice.length; i++) {
              fish.sellprice[i] = gamedata.fishSellPrice[i];
          }
      }

      if (typeof gamedata.fishMulti !== "undefined") {
          for (i = 0; i < gamedata.fishMulti.length; i++) {
              fish.fishmulti[i] = gamedata.fishMulti[i];
          }
      }

      if (typeof gamedata.pondsFishPer !== "undefined") {
          for (i = 0; i < gamedata.pondsFishPer.length; i++) {
              ponds.fishper[i] = gamedata.pondsFishPer[i];
          }
      }

      if (typeof gamedata.pondsUnlocked !== "undefined") {
          for (i = 0; i < gamedata.pondsUnlocked.length; i++) {
              ponds.unlocked[i] = gamedata.pondsUnlocked[i];
          }
      }

      if (typeof gamedata.actionsSearchPrice !== "undefined") {
        for (i = 0; i < gamedata.actionsSearchPrice.length; i++) {
          actionssearch.price[i] = gamedata.actionsSearchPrice[i];
        }
    }

    if (typeof gamedata.actionsSearchTimeL !== "undefined") {
      for (i = 0; i < gamedata.actionsSearchTimeL.length; i++) {
        actionssearch.timeleft[i] = gamedata.actionsSearchTimeL[i];
      }
   }

   if (typeof gamedata.actionsSearchActive !== "undefined") {
    for (i = 0; i < gamedata.actionsSearchActive.length; i++) {
      actionssearch.activejob[i] = gamedata.actionsSearchActive[i];
    }
  }


      }
      updateall();
      createNotification('game has loaded', 2)
}

document.addEventListener("keydown", function(event) {
  if (event.ctrlKey && event.which == 83) { //ctrl + s //
      event.preventDefault();
      saveGame();
  }
}, false);

function resetGame() {
  if (confirm("Are you sure!")) {
    var gamedata = {} ;
    localStorage.setItem("gamedata", JSON.stringify(gamedata));
    location.reload();
}
}

setInterval(function() {
  saveGame();
}, 30000);
function updateall() {
  updateshoptab(); ////
  updateponds(); ////
  updateinfotab(); ////
  updateweather();
  updateInventory();
  updateactions();
}

