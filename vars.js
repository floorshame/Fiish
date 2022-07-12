var game = {
    
}

var gameTDM = {
    weatheroptions: [
        'sunny',
        'cloudy',
        'rainy',
        'night'
    ],
    currentweather: 0,
    hour: 6,
    minute: 00,
    displayminute: 00,
}

var fish = {
    name: [
        'cod',
        'bass',
    ],
    id: [
        0,
        1,
    ],
    pond: [ /* ponds.id */
        0,
        1,
    ],
    owned: [
        0,
        0,
    ]
}

var pondtab = {
    name: [
        'pond-select',
        'pond-fishing',
    ],
    active: [
        true,
        false,
    ],
}

var shoptab = {
    name: [
        'buy',
        'sell',
        'shipments',
    ],
    active: [
        true,
        false,
        false,
    ],
}

var ponds = {
    name: [
        'shallow-pond',
        'calm-pond',
    ],
    id: [
        0,
        1,
    ],
    active: [
        false,
        false,
    ],
    fishper: [
        1,
        1,
    ],
    activeponds: 0,
    pondslimit: 1,
    interval: 1,
}