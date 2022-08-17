function updatetabs() {
    for(tab = 0; tab < tabopened.opened.length; tab++) {
        if (tabopened.opened[tab] == true ) {
            document.getElementById('cont-' + tabopened.name[tab]).style.display = '';
        } else {
            document.getElementById('cont-' + tabopened.name[tab]).style.display = 'none';
        }
    }
}
function switchtabs(tabid) {
    for(tabs = 0; tabs < tabopened.opened.length; tabs++) {
        if (tabopened.opened[tabs] == true ) {
            tabopened.opened[tabs] = false;
            document.getElementById('cont-' + tabopened.name[tabs]).style.display = 'none';
        }

    }

            document.getElementById('cont-' + tabopened.name[tabid]).style.display = '';
            tabopened.opened[tabid] = true;

}

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!! PONDS !!!!!!!!!!!!!!!!!!!!!!!!!!!!! //

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
  for (v = 0; v < ponds.unlocked.length; v++) {
    if (ponds.unlocked[v] == false) {
      document.getElementById("pond-btn-" + ponds.id[v]).style.display = 'none';
      
      document.getElementById("pond-weather-" + ponds.id[v]).innerHTML =  gameTDM.weathericon[ponds.weatherboost[v]];

    } else if (ponds.unlocked[v] == true) {
      document.getElementById("pond-btn-" + ponds.id[v]).style.display = '';

      document.getElementById("pond-weather-" + ponds.id[v]).innerHTML =  gameTDM.weathericon[ponds.weatherboost[v]];
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
        document.getElementById("cur-weather-icon").innerHTML = gameTDM.weathericon[0]
        break;
      case 2:
        gameTDM.weatherset = true;
        gameTDM.currentweather = 1;
        document.getElementById("cur-weather-icon").innerHTML = gameTDM.weathericon[1]

      break;
      case 3:
        gameTDM.weatherset = true;
        gameTDM.currentweather = 2;
        document.getElementById("cur-weather-icon").innerHTML = gameTDM.weathericon[2]

      break;
  
    }
  }
  document.getElementById("cur-weather-icon").innerHTML = gameTDM.weathericon[gameTDM.currentweather]
}

setInterval(function() {
  for (lo = 0; lo < ponds.active.length; lo++) {

    if (ponds.active[lo] === true) {

      if (ponds.weatherboost[lo] == gameTDM.currentweather) {

        let xe = Math.floor((Math.random() * 10) + 1);
        if (xe == 5) {
          fish.owned[lo] += 1 * fish.fishmulti[lo] * 2;
          let gran = Math.floor((Math.random() * 3) + 0);

          roboparts.owned[gran] += 1; 
          roboparts.unlocked[gran] = true;
          updateInventory();

          
        } else {
          setfish(ponds.id[lo]);
        }
      } else {
        setfish(ponds.id[lo]);
      }
  }
  }
}, ponds.interval * 1000);

function setfish(fishid) {
  fish.owned[ponds.id[fishid]] += 1 * fish.fishmulti[fishid] * ponds.fishper[fishid];
  updateInventory();

}

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!! INFO !!!!!!!!!!!!!!!!!!!!!!!!!!!!! //


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
    for (r = 0; r < roboparts.name.length; r++) {
      if (roboparts.unlocked[r] == false) {
        document.getElementById(roboparts.name[r] + "-inv-text").style.display = 'none';
        document.getElementById(roboparts.name[r] + "-outer-text").style.display = 'none';
  
      } else if (roboparts.unlocked[r] == true) {
        document.getElementById(roboparts.name[r] + "-inv-text").style.display = '';
        document.getElementById(roboparts.name[r] + "-outer-text").style.display = '';
  
      }
      shortennum(roboparts.owned[r], roboparts.name[r] + "-inv-text");
    }
  
  }
  

  function updateinfotab() {
      for (j = 0; j < fish.locked.length; j++) {
        if (fish.locked[j] == false ) {
          document.getElementById(fish.name[j] + "-icon").innerHTML = "&#xe502;"
          document.getElementById(fish.name[j] + "-icon").style = "color: white;"
  
        } else {
          document.getElementById(fish.name[j] + "-icon").innerHTML = "&#xe63f;"
          document.getElementById(fish.name[j] + "-icon").style = "color: red;"
  
        }  
      }
      for (jk = 0; jk < roboparts.locked.length; jk++) {
        if (roboparts.locked[jk] == false ) {
          document.getElementById(roboparts.name[jk] + "-icon").innerHTML = "&#xf06c;"
          document.getElementById(roboparts.name[jk] + "-icon").style = "color: white;"
          roboparts.locked[jk] = false;
        } else {
          document.getElementById(roboparts.name[jk] + "-icon").innerHTML = "&#xe63f;"
          document.getElementById(roboparts.name[jk] + "-icon").style = "color: red;"
          roboparts.locked[jk] = true;
    
        }  
      }
  }
  
  function lockswitch(id, type) {
    if (type == "fish") {
      if (fish.locked[id] == true ) {
        document.getElementById(fish.name[id] + "-icon").innerHTML = "&#xe502;"
        document.getElementById(fish.name[id] + "-icon").style = "color: white;"
  
        fish.locked[id] = false;
      } else {
        document.getElementById(fish.name[id] + "-icon").innerHTML = "&#xe63f;"
        document.getElementById(fish.name[id] + "-icon").style = "color: red;"
  
        fish.locked[id] = true;
  
      }
    } else if (type == "robo") {
      if (roboparts.locked[id] == true ) {
        document.getElementById(roboparts.name[id] + "-icon").innerHTML = "&#xf06c;"
        document.getElementById(roboparts.name[id] + "-icon").style = "color: white;"
        roboparts.locked[id] = false;
      } else {
        document.getElementById(roboparts.name[id] + "-icon").innerHTML = "&#xe63f;"
        document.getElementById(roboparts.name[id] + "-icon").style = "color: red;"
        roboparts.locked[id] = true;
  
      }
    }
  }

  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!! TIME !!!!!!!!!!!!!!!!!!!!!!!!!!!!! //

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
  
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!! SETTINGS !!!!!!!!!!!!!!!!!!!!!!!!!!!!! //

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


  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!! SHOP !!!!!!!!!!!!!!!!!!!!!!!!!!!!! //


  
    var fishvaluediv = document.getElementById("shop-sell-fish");
    for (k = 0; k < fish.set.length; k++)
      if (fish.set[k] == false) {
        var fishvaluedropdown = document.createElement("option");
        document.getElementById("shop-sell-fish").appendChild(fishvaluedropdown);
        fishvaluedropdown.value = k;
        fishvaluedropdown.innerText = fish.name[k];
        fish.set[k] = true;
      }
  
  
  
  
  function sellfish() {
    var fishownedtmp = fish.owned[document.getElementById("shop-sell-fish").value]
    if (fishownedtmp >= 1 && fish.locked[document.getElementById("shop-sell-fish").value] == false) {
      game.money = game.money + fishownedtmp * fish.sellprice[document.getElementById("shop-sell-fish").value] * fish.sellmulti;
      game.totalmoney += fishownedtmp * fish.sellprice[document.getElementById("shop-sell-fish").value] * fish.sellmulti;
      addLog('fish', 'Sold: ' + fishownedtmp + ' Fish');
  
      fish.owned[document.getElementById("shop-sell-fish").value] = 0;
      updateInventory();
    } else {
      if (fishownedtmp <= 1) {
        addLog('fish', "you don't have any fish");
        playaudio('error');
      } else if (fish.locked[document.getElementById("shop-sell-fish").value] == true) {
        addLog('fish', 'this fish is locked');
        playaudio('error')
      }
  
  
    }
  }
  
  function sellallfish() {
    var tempholder = 0;
    for (m = 0; m < fish.owned.length; m++) {
      if (fish.owned[m] >=1 && fish.locked[m] == false) {
        game.money = game.money + fish.owned[m] * fish.sellprice[m] * fish.sellmulti;
        game.totalmoney += fish.owned[m] * fish.sellprice[m] * fish.sellmulti;
        tempholder += fish.owned[m] * fish.sellprice[m] * fish.sellmulti;
        fish.owned[m] = 0;
        updateInventory();
    
      }
    }
    addLog('fish', 'Sold: $' + tempholder + ' Fish');
  
  }
  
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!! ACTIONS !!!!!!!!!!!!!!!!!!!!!!!!!!!!! //

    function updateactions() {
        shortennum(actionssearch.price[0], "actions-searchforponds");
        for (i = 0; i < actionssearch.activejob.length; i++) {
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
          if (game.money >= actionssearch.price[searchid] && actionssearch.activejob[searchid] == false && actionssearch.nextpondid <= ponds.totalponds) {
            actionssearch.activejob[searchid] = true;
            game.money -= actionssearch.price[searchid];
            actionssearch.price[searchid] *= 6;
            addLog('search', 'you have started searching');
      
            updateInventory();
            updateactions();
          } else {
            addLog('search', 'your unable to search');
            playaudio('error');
            updateactions();
      
          }
        }
      }
      
      
      setInterval(function() {
        for (i = 0; i < actionssearch.activejob.length; i++) {
          if (actionssearch.activejob[i] == true && actionssearch.timeleft[i] !== actionssearch.timeneeded[i]) {
            actionssearch.timeleft[i] += 1;
          } else if (actionssearch.timeleft[i] == actionssearch.timeneeded[i]) {
            if (i == 0) {
              ponds.unlocked[actionssearch.nextpondid] = true;
              actionssearch.nextpondid += 1;
              actionssearch.activejob[i] = false;
              actionssearch.timeleft[i] = 0;
              addLog('search', 'you have completed searching');
              playaudio('good');
      
              updateactions();
              updateponds();
              updateCraftable();
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
      
          // !!!!!!!!!!!!!!!!!!!!!!!!!!!!! WOPRKERS !!!!!!!!!!!!!!!!!!!!!!!!!!!!! //

          function updateworkers() {

            for (i = 0; i < workers.id.length; i++) {
              if (workers.owned[i] >= 1) {
                workers.newcost[i] = workers.basecost[i] * actionssearch.nextpondid * workers.owned[i] * 3; //* NEEDS TO BE CHANGED IN THE FUTURE FOR BALANCING
              } else {
                workers.newcost[i] = workers.basecost[i];
              }
              
              if (i == 0) {
                ponds.pondslimit = 1 + workers.owned[i];
                updateponds();
          
              }
          
              shortennum(workers.basecost[i], "workprice-" + workers.id[i]);
              shortennum(workers.newcost[i], "workerupfront-" + workers.id[i]);
              shortennum(workers.owned  [i], "workerowned-" + workers.id[i]);
          
            }
            document.getElementById('workers-paytext').innerHTML = workers.timedown / 1000;
          }
          
          function workeraction(workerid) {
            if (workers.firemode == false && game.money >= workers.newcost[workerid]) {
              workers.owned[workerid] += 1;
              game.money -= workers.newcost[workerid];
              updateInventory();
              updateworkers();
            } else if (workers.firemode == true && workers.owned[workerid] >= 1) {
              workers.owned[workerid] -= 1;
              updateInventory();
              updateworkers();
          
            }
          }
          
          function workersTime() {
            for (i = 0; i < workers.newcost.length; i++) {
              if (workers.owned[i] >= 1) {
                var tempcost = workers.basecost[i] * workers.owned[i];
                if (game.money >= tempcost) {
                  game.money -= tempcost;
                  updateInventory();
                  addLog('workers', 'you have paid $' + tempcost + " for your workers");
                  updateworkers();
                  workers.timedown = workers.timedownmax;
                } else {
                  workers.owned[i] = 0;
                  addLog('workers', "you couldn't pay for your workers");
                  playaudio('error');
                  updateInventory();
                  updateworkers();
                  workers.timedown = workers.timedownmax;
          
                }
              }
            }
          
          }
          setInterval(function() {
            for (wox = 0; wox < workers.owned.length; wox++) {
            if (workers.owned[wox] >= 1) {
              if (workers.timedown == 0) {
                workersTime()
                break;
              } else {
                workers.timedown -= 1000;
                updateworkers();
                break;
          
              }
            
            }
            }
          }, 1000);
          
          setInterval(function() {
            if (workers.owned[1] >= 1) {
              for (c = 0; c < fish.owned.length; c++) {
                if (fish.owned[c] >= 1 && fish.locked[c] == false) {
                  game.money = game.money + fish.owned[c] * fish.sellprice[c] * fish.sellmulti;
                  game.totalmoney = game.money + fish.owned[c] * fish.sellprice[c] * fish.sellmulti;
                  fish.owned[c] = 0;
          
                  updateInventory();
                  updateponds();
                }
              }
          }
          
          }, 10000);
          
          
          function workerfiretoggle() {
            if (workers.firemode) {
              document.getElementById('worker-fire-btn').style = ';'
          
              workers.firemode = false;
          
            } else if (workers.firemode == false) {
              document.getElementById('worker-fire-btn').style = 'border: 2px solid red;'
              workers.firemode = true;
          
            }
          }
          
        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!! CRAFT !!!!!!!!!!!!!!!!!!!!!!!!!!!!! //

        function updateCraftable() {
            $('#action-craft-dropdown').empty();
          
              for (ik = 0; ik < craftable.name.length; ik++) {
                if (ponds.unlocked[craftable.modsp[ik]] == true && craftable.modifier[ik] == "pond") {
                  var craftabledrpdwn = document.createElement("option");
                  document.getElementById("action-craft-dropdown").appendChild(craftabledrpdwn);
                  craftabledrpdwn.value = ik;
                  craftabledrpdwn.innerText = craftable.name[ik] + " " + craftable.modifier[ik];
                  craftable.set = true;
              
                }
              }
          
          }
          
          function craftabledrp() {
            dropdown = document.getElementById("action-craft-dropdown")
          
            document.getElementById("craft-FMP").innerHTML = craftable.FMP[dropdown.value];
            document.getElementById("craft-CRP").innerHTML = craftable.CRP[dropdown.value];
            document.getElementById("craft-ARCP").innerHTML = craftable.ARCP[dropdown.value];
          
          }
          
          function updateversion() {
            document.getElementById("version-text").innerHTML = game.version + game.versiontype;
          }
          
          function craft(craftitem) {
            if (craftitem == 'modifier') {
              dropdown = document.getElementById("action-craft-dropdown");
              if (roboparts.owned[0] >= craftable.FMP[dropdown.value] && roboparts.owned[1] >= craftable.CRP[dropdown.value] && roboparts.owned[2] >= craftable.ARCP[dropdown.value]) {
                roboparts.owned[0] -= craftable.FMP[dropdown.value];
                roboparts.owned[1] -= craftable.CRP[dropdown.value];
                roboparts.owned[2] -= craftable.ARCP[dropdown.value];
                if (craftable.modifier[dropdown.value] == "pond") {
                  ponds.fishper[dropdown.value] += 1;
                  addLog("craft", "crafted: " + craftable.name[dropdown.value]);
                  craftable.FMP[dropdown.value] *= 2;
                  craftable.CRP[dropdown.value] *= 2;
                  craftable.ARCP[dropdown.value] *= 2;
                  craftabledrp();
                  updateInventory();
                  playaudio('good')
                }
              } else {
                addLog("err", "don't have enough roboparts")
                playaudio('error')
          
              }
            }
          }
          
          function updatenav() {
            document.getElementById('menu-usrid').innerHTML = game.username;
             document.getElementById('menu-pfpid').src = game.pfp;
          
        }
        

          function updateall() {
            updateponds(); ////
            updateinfotab(); ////
            updateweather();
            updateInventory();
            updateactions();
            updateworkers();
            updateversion();
            updateCraftable();
            craftabledrp();
            updatetabs();
            updatenav();
          }
          
                    
          function termopen() {
            if (tabopened.extraopened[0] == true) {
              document.getElementById('div-terminal').style.display = 'none';
              document.getElementById('div-termouter').style = 'height: 2%';
          
              tabopened.extraopened[0] = false;
            } else {
              document.getElementById('div-terminal').style.display = '';
              document.getElementById('div-termouter').style = 'height: 20%';
          
              tabopened.extraopened[0] = true;
            }
          }
          