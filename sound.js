

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



