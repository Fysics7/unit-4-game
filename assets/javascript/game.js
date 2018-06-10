
// At Start of Game, need to set up hero id's so they are can be draggable
function doFirst() {

    function allowDrop(ev) {
        ev.preventDefault();
    }

    function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
    }
};

// Making an object called Heroes and making objects of each hero
var heroes = {

    picHero1 = {

        name: Jensen,
        hitpoints: 200,
        attack: 35

    },

    picHero2 = {

        name: Arial,
        hitpoints: 150,
        attack: 40

    },

    picHero3= {

        name: Reggie,
        hitpoints: 185,
        attack: 30

    },

    picHero4 = {

        name: Eva,
        hitpoints: 165,
        attack: 30

    }
};

// Enemy object
var enemy = {

    name: UV657,
    hitpoints: 700,
    attack: 55
}


        


