var windowsopened = {
    id: [
        0,
        1,
        2,
        3,
        4,
        5,
    ],
    active: [
        true,
        false,
        false,
        false,
        false,
        false,
    ],
    taskbar: [
        false,
        false,
        false,
        false,
        false,
        false,
    ],
    winname: [
        "welcome",
        "ponds",
        "settings",
        "info",
        "market",
        "actions",

    ],
    /*minimised: [
        false,
    ],*/
}
function makeDraggable (elmnt) {
    let currentPosX = 0, currentPosY = 0, previousPosX = 0, previousPosY = 0;
    if (elmnt.querySelector('.windowbar')) {
        elmnt.querySelector('.windowbar').onmousedown = dragMouseDown;
    } 
    else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown (e) {
        e.preventDefault();
        previousPosX = e.clientX;
        previousPosY = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag (e) {
        e.preventDefault();
        currentPosX = previousPosX - e.clientX;
        currentPosY = previousPosY - e.clientY;
        previousPosX = e.clientX;
        previousPosY = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - currentPosY) + 'px';
        elmnt.style.left = (elmnt.offsetLeft - currentPosX) + 'px';
    }

    function closeDragElement () {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

for (i = 0; i < windowsopened.id.length; i++) {
    makeDraggable(document.querySelector('#win-' + i));
    if (windowsopened.active[i] == false) {
        var localwindow = document.getElementById("win-" + i);
        localwindow.style.display = 'none';
    }if (windowsopened.active[i] == false) { 

    }
}

$("#win-0").mousedown(function(evt) {
    winChangeFocus(0)
});
$("#win-1").mousedown(function(evt) {
    winChangeFocus(1)
});
$("#win-2").mousedown(function(evt) {
    winChangeFocus(2)
});
$("#win-3").mousedown(function(evt) {
    winChangeFocus(3)
});
$("#win-4").mousedown(function(evt) {
    winChangeFocus(4)
});
$("#win-5").mousedown(function(evt) {
    winChangeFocus(5)
});


function winChangeFocus(focusedwin) {
    console.log("his")
    for (h = 0; h < windowsopened.id.length; h++) {
        if (h !== focusedwin) {
            document.getElementById('win-' + h).style.zIndex = 1;

        } else if (h == focusedwin) {
            document.getElementById('win-' + focusedwin).style.zIndex = 998;
            
        }
    }
    document.getElementById('menu-popup').style.display = 'none';
    game.menutoggled = false;

}
var boxdigi = document.getElementById("log-input");

document.addEventListener("keydown", function(event) {
    if (event.which == game.menukeycode && boxdigi !== document.activeElement) { 
    toggleMenu();
    }
}, false);

document.addEventListener("keydown", function(event) {
    if (game.menubinding == true) {

        game.menukeycode = event.keyCode;
        game.menubinding = false;
        document.getElementById('settings-menbind').innerHTML = 'click to bind';
    }
}, false);
  document.addEventListener("keydown", function(event) {
    if (event.which == 49 && game.menutoggled == true) { 
        event.preventDefault();
        if (windowsopened.active[1] == true) {
            closewindow(1);
            toggleMenu();

        } else {
            openwindow(1);

        }
    }
  }, false);

  function bindmenu() {
    game.menubinding = true;
    document.getElementById('settings-menbind').innerHTML = 'listening for bind';

  }
  document.addEventListener("keydown", function(event) {
    if (event.which == 50 && game.menutoggled == true) { 
        event.preventDefault();

        if (windowsopened.active[3] == true) {
            closewindow(3);
            toggleMenu();

        } else {
            openwindow(3);

        }
    }
  }, false);
  document.addEventListener("keydown", function(event) {
    if (event.which == 51 && game.menutoggled == true) { 
        event.preventDefault();

        if (windowsopened.active[4] == true) {
            closewindow(4);
            toggleMenu();

        } else {
            openwindow(4);

        }
    }
  }, false);
  document.addEventListener("keydown", function(event) {
    if (event.which == 52 && game.menutoggled == true) { 
        event.preventDefault();

        if (windowsopened.active[5] == true) {
            closewindow(5);
            toggleMenu();
        } else {
            openwindow(5);

        }
    }
  }, false);

function closewindow(id) {
    var localwindow = document.getElementById("win-" + id);
    if (windowsopened.active[id] == true) {
        localwindow.style.animation = 'windowfadeout var(--animationtime)'
        setTimeout(() => {
        localwindow.style.display = 'none';
        windowsopened.active[id] = false;

        console.log(windowsopened.active[id]);}, 250)

    }else {

        localwindow.style.display = '';
        windowsopened.active[id] = true;

        console.log(windowsopened.active[id]);

    }
}
function openwindow(id) {
    var localwindow = document.getElementById("win-" + id);
    if (windowsopened.active[id] == false) {
        
        localwindow.style.display = '';
        localwindow.style.animation = 'windowfadein var(--animationtime)'

        windowsopened.active[id] = true;

        game.menutoggled = false;
        document.getElementById('menu-popup').style.display = 'none';

    }

}

document.getElementById('menu-popup').style.display = 'none';

function toggleMenu() {
    if (game.menutoggled == false) {
        
        game.menutoggled = true;
        document.getElementById('menu-popup').style.animation = 'windowfadein var(--animationtime)'
        document.getElementById('menu-popup').style.display = '';

    } else {
        document.getElementById('menu-popup').style.animation = 'windowfadeout var(--animationtime)'

        setTimeout(() => {
        document.getElementById('menu-popup').style.display = 'none';
        game.menutoggled = false;
        }, 250);
    }
}
/* 
function minimisewindow(id) {
    var basewindow = document.getElementById("win-" + id);
    var localwindow = document.getElementById("win-cont-" + id);
    if (windowsopened.minimised[id] == false) {
        
        basewindow.style = 'background-color: transparent; box-shadow: 0px 0px;';
        localwindow.style.display = 'none';
        windowsopened.minimised[id] = false;

        console.log(windowsopened.minimised[id]);

    }else {

        localwindow.style.display = '';
        windowsopened.minimised[id] = true;
        basewindow.style = 'background-color: var(--divback); box-shadow: 0px 0px var(--shadowwidth) var(--shadowcolor);';

        console.log(windowsopened.minimised[id]);

    }

}*/

function minimisewindow(id) {
    var windowneeded = document.getElementById("win-" + id);

    if (windowsopened.taskbar[id] == false) {

        var taskbarwin = document.createElement("button");
        taskbarwin.id = id + "-menu-wintask";
        taskbarwin.className = "menu-wintask";
        taskbarwin.onclick = function() {taskbarmin(id);};
        taskbarwin.href = "#";

        var textinside = document.createTextNode(windowsopened.winname[id]);
        taskbarwin.appendChild(textinside);
        var taskbarmenu = document.getElementById("menu-bartask");
        taskbarmenu.appendChild(taskbarwin);

        windowneeded.style.animation = 'windowfadeout var(--animationtime)'

        setTimeout(() => {
        windowneeded.style.display = 'none';
        windowsopened.taskbar[id] = true;

        }, 250)

    
    } else {
        taskbarmin(id);
    } 
}

function taskbarmin(id) {
    var windowneeded = document.getElementById("win-" + id);

    if (windowsopened.taskbar[id] == true) {
        var idwin = document.getElementById(id + "-menu-wintask")

        windowneeded.style.animation = 'windowfadein var(--animationtime)'
        windowneeded.style.display = '';
        document.getElementById(id + "-menu-wintask").remove();
        windowsopened.taskbar[id] = false;

    }
}

function updatenav() {
    document.getElementById('menu-usrid').innerHTML = game.username;
     document.getElementById('menu-pfpid').src = game.pfp;
  
}

function navwin(createordestroy, id) {

}

