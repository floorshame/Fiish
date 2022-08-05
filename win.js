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


function closewindow(id) {
    var localwindow = document.getElementById("win-" + id);
    if (windowsopened.active[id] == true) {
        localwindow.style.animation = 'windowfadeout var(--animationtime)'
        setTimeout(() => {
        localwindow.style.display = 'none';
        windowsopened.active[id] = false;

        console.log(windowsopened.active[id]);}, 300)

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

        console.log(windowsopened.active[id]);

    }

}/* 
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