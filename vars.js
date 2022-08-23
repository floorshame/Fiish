var tabopened = {
    name: [
        'ponds',
        'actions',
        'info',
        'market',
        'settings',
    ],
    opened: [
        true,
        false,
        false,
        false,
        false,
    ],
    extraname: [
        'terminal',
    ],
    extraopened: [
        true,
    ],
    quicksellinfo: false,

}

var popup = {
    ispopup: false,
    whichpopup: 'money',
}

var game = {
    money: 0,
    roboparts: 0,
    robolocked: false,
    dev: false,
    totalmoney: 0,
    navdrop: true,
    saveversion: "0.3.1.1",
    version: "0.3.1.1",
    versiontype: "beta",
    menutoggled: false,
    username: "fish-fan",
    pfp: "img/fiish.png",
    loaded: false,
    logamn: 0,
    menukeycode: 69,
    menubinding: false,
    maxlog: 8,
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
    popupanswerone: 0,
    popupanswertwo: 0,
    popup: false,
}

var fish = {
    name: [
        'cod',
        'bass',
        'salmon',
        'tuna',
        'shrimp',
        'brill',

        'koi',
        'piranha',
        'shark',
    ],
    id: [
        0,
        1,
        2,
        3,
        4,
        5,

        6,
        7,
        8,
    ],
    pond: [ /* ponds.id */
        0,
        1,
        2,
        3,
        4,
        5,

        6,
        7,
        8,
    ],
    owned: [
        0,
        0,
        0,
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

        15,
        17,
        19,
    ],
    fishmulti: [
        1,
        1,
        1,
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

        false,
        false,
        false,
    ],
    locked: [
        false,
        false,
        false,
        false,
        false,
        false,

        false,
        false,
        false,
    ],
    sellmulti: 1,
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
        1, // * change the time 1 lower then the time needed *//
    ],
    ajset: [
        false,
    ],
    nextpondid: 1,
    moneyset: false,
}

var ponds = {
    name: [
        'shallow-pond',
        'calm-pond',
        'deep-pond',
        'groovy-pond',
        'cave-pond',
        'generic-pond',

        'fresh-pond',
        'hidden-pond',
        'ice-pond'
    ],
    id: [
        0,
        1,
        2,
        3,
        4,
        5,

        6,
        7,
        8,
    ],
    active: [
        false,
        false,
        false,
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

        1,
        3,
        2,
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
        150,
    ],
    newcost: [
        150,
        300,
    ],
    owned: [
        0,
        0,
    ],

    firemode: false,
    timedownmax: 60000,
    timedown: 60000,

}

var craftable = {
    name: [
        "shallow-modifier",
        "calm-modifier",
        "deep-modifier",
        "groovy-modifier",
        "cave-modifier",
        "generic-modifier",
        
        "fresh-modifier",
        "hidden-modifier",
        "ice-modifier",

    ],
    modifier: [
        "pond",
        "pond",
        "pond",
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

        6,
        7,
        8,
    ],
    modamnt: [
        2,
        2,
        2,
        2,
        2,
        2,

        2,
        2,
        2,
    ],
    roboparts: [
        23,
        46,
        92,
        184,
        368,
        736,

        1472,
        2944,
        5888,
    ],
    set: false,
    pondset: false,
}

