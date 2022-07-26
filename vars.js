var game = {
    money: 0,
    dev: false,
}

var gameTDM = {
    weatheroptions: [
        'Sunny', /* 0 */
        'Cloudy',
        'Rainy',
        'Night' /* 3 */
    ],
    weathericon: [
        "&#xe518",
        "&#xe2bd",
        "&#xf176",
        "&#xe51c",

    ],
    weatherid: [
        0,
        1,
        2,
        3,
    ],
    currentweather: 0,
    hour: 6,
    minute: 00,
    displayminute: 00,
    weatherset: false,
    weathernotifactions: true,
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
    ],
    sellprice: [
        1,
        3,
    ],
    fishmulti: [
        1,
        1,
    ],
    sellmulti: 1,
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

var infotab = {
    name: [
        'inventory',
        'weather',
        'stats',
    ],
    active: [
        true,
        false,
        false,
    ]
}
var actiontab = {
    name: [
        'ponds',
        'workers',
        'science',
        'activejobs',
    ],
    active: [
    true,
    false,
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
    unlocked: [
        true, /* DO NOT CHANGE */
        false,
    ],
    weatherboost: [
        0,
        3
    ],

    nextpondprice: 150,
    nextpondid: 1,

    activeponds: 0,
    pondslimit: 1,
    interval: 1,
}

