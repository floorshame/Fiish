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
    window.open("https://pornhub.com/gay");
  } 
  cmdbarinp.value = '';

}


function pondswitch(id) {
    console.log('0')
    if (ponds.active[id] == true) {
        ponds.activeponds -= 1;
        ponds.active[id] = false;
        console.log(ponds.active[id])
        document.getElementById("pond-btn-" + id).style = "border: var(--borderwith) solid rgba(255, 255, 255, 0);"
        updateponds();

    } else {
        if (ponds.pondslimit > ponds.activeponds) {
            ponds.activeponds += 1;
            ponds.active[id] = true;
            console.log(ponds.active[id])
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

function updateweather() {
  if (gameTDM.hour < 6 || gameTDM.hour > 18) {
    gameTDM.currentweather = 3;
    console.log(gameTDM.currentweather);
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
    console.log(cssPropName);
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

function buyPond() {
  if (ponds.nextpondprice <= game.money) {
    game.money -= ponds.nextpondprice;
    ponds.unlocked[ponds.nextpondid] = true;
    ponds.nextpondid += 1;
    ponds.nextpondprice = ponds.nextpondprice * 4;
    updateshoptab();
    updateponds();
  }
}

function sellfish() {
  var fishownedtmp = fish.owned[document.getElementById("shop-sell-fish").value]
  if (fishownedtmp >= 1) {
    game.money = game.money + fishownedtmp * fish.sellprice[document.getElementById("shop-sell-fish").value] * fish.sellmulti
    createNotification('Sold: ' + fishownedtmp + ' Fish', 3)
    fish.owned[document.getElementById("shop-sell-fish").value] = 0;
    updateInventory();
  } else {
    createNotification("You don't have any fish!", 1)

  }
}

// * ACTIONS * //
function updateactions() {
  shortennum(ponds.nextpondprice, "actions-searchforpondp");

}

function actionSearch(searchitem, price, timehours) {

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
}), 100;


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
      pondsActive: ponds.active,
      pondsFishPer: ponds.fishper,
      pondsUnlocked: ponds.unlocked,
      pondsNPP: ponds.nextpondprice,
      pondsNPID: ponds.nextpondid,
      pondsActive: ponds.activeponds,
      pondsLimit: ponds.pondsLimit,
      pondsInterval: ponds.interval
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
      if (typeof gamedata.pondsNPP !== "undefined") ponds.nextpondprice = gamedata.pondsNPP;    
      if (typeof gamedata.pondsNPID !== "undefined") ponds.nextpondid = gamedata.pondsNPID;    
      if (typeof gamedata.pondsActive !== "undefined") ponds.activeponds = gamedata.pondsActive;    
      if (typeof gamedata.pondsLimit !== "undefined") ponds.pondslimit = gamedata.pondsLimit;    
      if (typeof gamedata.pondsInterval !== "undefined") ponds.interval = gamedata.pondsInterval;    
      if (typeof gamedata.dev !== "undefined") game.dev = gamedata.dev;    


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



      if (typeof gamedata.pondsActive !== "undefined") {
          for (i = 0; i < gamedata.pondsActive.length; i++) {
              ponds.active[i] = gamedata.pondsActive[i];
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
      }
      updateall();
      createNotification('game has loaded', 2)
}
function updateall() {
  updateshoptab(); ////
  updateponds(); ////
  updateinfotab(); ////
  updateweather();
  updateInventory();
  updateactions();
}

