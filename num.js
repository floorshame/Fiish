//*AAAAAAAAAAA *//

function shortennum(value, idname) {
    if (value >= 1000000) {
    newvalue = value.toExponential(1)
    document.getElementById(idname).innerText = newvalue;
    } else if (value >= 10000000000) {
        newvalue = value.toExponential(3)
        document.getElementById(idname).innerText = newvalue;
    }else {
        document.getElementById(idname).innerText = value;
    }
}

