

function playaudio(name) {
    if (name == 'error') {
        var error = new Audio('sdns/mouse-err.wav');
        error.play();
    
    } else if (name == 'good') {
        var error = new Audio('sdns/mouse-god.wav');
        error.play();

    } else if (name == 'popup') {
        var error = new Audio('sdns/popup-sound.wav');
        error.play();

    }
    else if (name == 'boom') {
        var error = new Audio('sdns/boom.mp3');
        error.play();

    }
    
}

var SOUNDrain = new Audio('sdns/rain.wav'); 
SOUNDrain.loop = true;
SOUNDrain.volume = 0.2;



