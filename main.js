/* POND CODE */
function pondswitch(id) {
    console.log('0')
    if (ponds.active[id] == true) {
        ponds.activeponds -= 1;
        ponds.active[id] = false;
        console.log(ponds.active[id])
        document.getElementById("ponds-active-span").innerHTML = ponds.activeponds;
        document.getElementById("pond-btn-" + id).style = "border: 1px solid rgba(255, 255, 255, 0);"
    
    } else {
        if (ponds.pondslimit > ponds.activeponds) {
            ponds.activeponds += 1;
            ponds.active[id] = true;
            console.log(ponds.active[id])
            document.getElementById("ponds-active-span").innerHTML = ponds.activeponds;
            document.getElementById("pond-btn-" + id).style = "border: 1px solid rgba(255, 255, 255, 0); border-image: linear-gradient(90deg, var(--color-1), var(--color-2)) 1;"



        }else if (ponds.pondslimit == ponds.activeponds) {
            document.getElementById("ponds-active-span").innerHTML = ponds.activeponds;



        }
    }
}



setInterval(function() {
    if (ponds.activeponds >= 1) {
        for (i = 0; i < fish.pond.length; i++) { /* every fish */
            var fishpondactive = fish.pond[i] /* gets the fish pond */
            if (ponds.active[fishpondactive] == true) { /* need to check to see if that pond is active */
                fish.owned[i] += 1;
                updateInventory();
            }
        }
    }
}, ponds.interval * 1000);


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
/*  INVENTORY SYSTEM */

function updateInventory() {
  for (i = 0; i < fish.name.length; i++) {
    var idfishthingmlg = document.getElementById(fish.name[i] + "-inv-text");
    idfishthingmlg.innerHTML = fish.owned[i];
  }
}

/* time */

setInterval(function() {
  if (gameTDM.minute < 59) {
    gameTDM.minute += 1;
    console.log(gameTDM.hour + ':' + gameTDM.minute)
    displayclock()
  }else if (gameTDM.minute == 59 || gameTDM.minute > 59) {
    if (gameTDM.hour < 24) {
      gameTDM.minute = 0;
      gameTDM.hour += 1;
      console.log(gameTDM.hour + ':' + gameTDM.minute)
      displayclock()
    }else if (gameTDM.hour == 24 & gameTDM.minute == 59) {
      gameTDM.hour = 0;
      gameTDM.minute = 0;
      console.log(gameTDM.hour + ':' + gameTDM.minute)
      displayclock()
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
  document.getElementById('Noti').style.animation = 'slidenotifaction var(--animationtime) forwards'
  NotificationN.classList.add('toast')
  NotificationN.innerText = text
  NotificationN.style = 'padding: 10px; backdrop-filter: blur(8px); border-bottom-left-radius: var(--borderradius); border-bottom-right-radius: var(--borderradius);';
  NotificationConst.appendChild(NotificationN);
  
  setTimeout(() => {NotificationN.remove();}, seconds * 1000)

  
}
createNotification('game has loaded', 2)


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
}
updateshoptab()