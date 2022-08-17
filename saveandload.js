document.getElementById('loading-screen').style.display = '';
function saveGame() {
  var userset = document.getElementById('settings-usern')
  var pfpset = document.getElementById('settings-pfpli')

  if (userset.value !== '') {
    game.username = document.getElementById('settings-usern').value;

  }
  if (pfpset.value !== '') {
    game.pfp = document.getElementById('settings-pfpli').value;

  }


    var gamedata = {
        /* main vars*/
        money: game.money,
        totalmoney: game.totalmoney,
        dev: game.dev,
        gameNavSetting: game.navdrop,
        saveVersion: game.saveversion,
        username: game.username,
        pfplink: game.pfp,
        menuBTN: game.menukeycode,
        logMax: game.maxlog,

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
        fishLocked: fish.locked,
  
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
  

        /* workers data */
        workersNewCost: workers.newcost,
        workersOwned: workers.owned,
        workerstime: workers.timedown, 

        /* robo parts */
        robopOwned: roboparts.owned,
        robopUnlocked: roboparts.unlocked,
        robopLocked: roboparts.locked,

        craftFMP: craftable.FMP,
        craftCRP: craftable.CRP,
        craftARCP: craftable.ARCP,


    };
    localStorage.setItem("gamedata", JSON.stringify(gamedata));
    updatenav();
    addLog('game', 'you have saved');

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
        if (typeof gamedata.totalmoney !== "undefined") game.totalmoney = gamedata.totalmoney;    
        if (typeof gamedata.gameNavSetting !== "undefined") game.navdrop = gamedata.gameNavSetting;    
        if (typeof gamedata.workerstime !== "undefined") workers.timedown = gamedata.workerstime;    
        if (typeof gamedata.saveVersion !== "undefined") game.saveversion = gamedata.saveVersion;    
        if (typeof gamedata.username !== "undefined") game.username = gamedata.username;    
        if (typeof gamedata.pfplink !== "undefined") game.pfp = gamedata.pfplink;    
        if (typeof gamedata.menuBTN !== "undefined") game.menukeycode = gamedata.menuBTN;    
        if (typeof gamedata.logMax !== "undefined") game.maxlog = gamedata.logMax;    

  
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
  
    if (typeof gamedata.robopOwned !== "undefined") {
      for (i = 0; i < gamedata.robopOwned.length; i++) {
        roboparts.owned[i] = gamedata.robopOwned[i];
      }
    }

    if (typeof gamedata.robopUnlocked !== "undefined") {
      for (i = 0; i < gamedata.robopUnlocked.length; i++) {
        roboparts.unlocked[i] = gamedata.robopUnlocked[i];
      }
    }

    if (typeof gamedata.workersNewCost !== "undefined") {
      for (i = 0; i < gamedata.workersNewCost.length; i++) {
        workers.newcost[i] = gamedata.workersNewCost[i];
      }
    }

    if (typeof gamedata.workersOwned !== "undefined") {
      for (i = 0; i < gamedata.workersOwned.length; i++) {
        workers.owned[i] = gamedata.workersOwned[i];
      }
    }

    if (typeof gamedata.fishLocked !== "undefined") {
      for (i = 0; i < gamedata.fishLocked.length; i++) {
        fish.locked[i] = gamedata.fishLocked[i];
      }
    }

    if (typeof gamedata.robopLocked !== "undefined") {
      for (i = 0; i < gamedata.robopLocked.length; i++) {
        roboparts.locked[i] = gamedata.robopLocked[i];
      }
    }

    if (typeof gamedata.craftFMP !== "undefined") {
      for (i = 0; i < gamedata.craftFMP.length; i++) {
        craftable.FMP[i] = gamedata.craftFMP[i];
      }
    }
    if (typeof gamedata.craftCRP !== "undefined") {
      for (i = 0; i < gamedata.craftCRP.length; i++) {
        craftable.CRP[i] = gamedata.craftCRP[i];
      }
    }
      if (typeof gamedata.craftARCP !== "undefined") {
        for (i = 0; i < gamedata.craftARCP.length; i++) {
          craftable.ARCP[i] = gamedata.craftARCP[i];
        }
      }
  
        }
        updateall();


        if (game.saveversion !== game.version) {
          if (confirm("Fiish has detected your on an older/newer version, would you like to change the save file version?")) {
            game.saveversion = game.version;
            saveGame();
            window.location.reload(true);
          } else {
            alert('If you choose to change your mind please click the clear cache button!')
          }
        }
        game.loaded = true;
        document.getElementById('loading-screen').style.display = 'none'
        addLog('game', 'sev: ' + game.version + ' | sav:' + game.saveversion);

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
  function resetcache() {
    saveGame();
    window.location.reload(true);
  }
  
  setInterval(function() {
    saveGame();
  }, 30000);
loadGame();