var game = {
    money: 0,
    dev: false,
    totalmoney: 0,
    navdrop: true,
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
        'salmon',
        'tuna',
        'shrimp',
        'brill'
    ],
    id: [
        0,
        1,
        2,
        3,
        4,
        5,
    ],
    pond: [ /* ponds.id */
        0,
        1,
        2,
        3,
        4,
        5,
    ],
    owned: [
        0,
        0,
        0,
        0,
        0,
        0,
    ],
    sellprice: [
        1,
        3,
        5,
        8,
        11,
        13,
    ],
    fishmulti: [
        1,
        1,
        1,
        1,
        1,
        1,
    ],
    set: [
        false,
        false,
        false,
        false,
        false,
        false,
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

var actionssearch = {
    name: [
        "searchforponds",
    ],
    activejob: [
        false,  
    ],
    timeleft: [ 
        0,
    ],
    price: [
        150,
    ],
    timeneeded: [ //* hours in game, minutes in real time *//
        5, // * change the time 1 lower then the time needed *//
    ],
    ajset: [
        false,
    ],
    nextpondid: 1,
}

var ponds = {
    name: [
        'shallow-pond',
        'calm-pond',
        'deep-pond',
        'groovy-pond',
        'cave-pond',
        'generic-pond',
    ],
    id: [
        0,
        1,
        2,
        3,
        4,
        5,
    ],
    active: [
        false,
        false,
        false,
        false,
        false,
        false,
    ],
    fishper: [
        1,
        1,
        1,
        1,
        1,
        1,
    ],
    unlocked: [
        true, /* DO NOT CHANGE */
        false,
        false,
        false,
        false,
        false,
    ],
    weatherboost: [
        0,
        3,
        2,
        0,
        2,
        1,
    ],


    activeponds: 0,
    pondslimit: 1,
    interval: 1,
    totalponds: 6,
}

var workers = {
    name: [
        'fishermen',
        'salesmen',
    ],
    id: [
        0,
        1,
    ],
    basecost: [
        150,
        500,
    ],
    newcost: [
        150,
        500,
    ],
    owned: [
        0,
        0,
    ],

    firemode: false,

}

var roboparts = {
    name: [
        "FMP", //* fish modifying part *//
        "CRP", //* chatoic reactive part *//
        "ARCP", //* anti reactive coolent part*//
        //* craftable ones past here *//
    ],
    owned: [
        0,
        0,
        0,
    ],
    unlocked: [
        false,
        false,
        false,
    ]
}

var craftable = {
    name: [
        "shallow-modifier",
        "calm-modifier",
        "deep-modifier",
        "groovy-modifier",
        "cave-modifier",
        "generic-modifier",
    ],
    modifier: [
        "pond",
        "pond",
        "pond",
        "pond",
        "pond",
        "pond",
    ],
    modsp: [
        0,
        1,
        2,
        3,
        4,
        5,
    ],
    modamnt: [
        2,
        2,
        2,
        2,
        2,
        2,
    ],
    FMP: [
        23,
    ],
    CRP: [
        20,
    ],
    ARCP: [
        18,
    ],
    pondset: false,
}