function saveGame() {
    var gamedata = {
        /* main vars*/
        money: game.money,
        totalmoney: game.totalmoney,
        dev: game.dev,
        gameNavSetting: game.navdrop,
  
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
  

        /* workers data */
        workersNewCost: workers.newcost,
        workersOwned: workers.owned,

        /* robo parts */
        robopOwned: roboparts.owned,
        robopUnlocked: roboparts.unlocked,

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
        if (typeof gamedata.totalmoney !== "undefined") game.totalmoney = gamedata.totalmoney;    
        if (typeof gamedata.gameNavSetting !== "undefined") game.navdrop = gamedata.gameNavSetting;    

  
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
loadGame();