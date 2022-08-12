

function playaudio(name) {
    if (name == 'error') {
        var error = new Audio('sdns/mouse-err.wav');
        error.play();
    
    } else if (name == 'good') {
        var error = new Audio('sdns/mouse-god.wav');
        error.play();

    }
}

var SOUNDrain = new Audio('sdns/rain.wav'); 
SOUNDrain.loop = true;
SOUNDrain.volume = 0.2;



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
