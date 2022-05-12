var model = {
    boardSize: 7,
    numShips: 10,
    shipLength: 4,
    shipsSunk: 0,

    ships: [
        { locations: [0, 0, 0, 0], hits: ["", "", "", ""] },
        { locations: [0, 0, 0], hits: ["", "", ""] },
        { locations: [0, 0, 0], hits: ["", "", ""] },
        { locations: [0, 0], hits: ["", ""] },
        { locations: [0, 0], hits: ["", ""] },
        { locations: [0, 0], hits: ["", ""] },
        { locations: [0], hits: [""] },
        { locations: [0], hits: [""] },
        { locations: [0], hits: [""] },
        { locations: [0], hits: [""] },
    ],

}

fire: function(guess) {
    for (var i = 0; i < this.numShips; i++) {
        var ship = this.ships[i];
        locations = ship.locations;
        var index = locations.indexOf(guess);
        if (index >= 0) {

        }
    }
}


var view = {
    displayMessage: function (m) {
        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = m;
    },
    displayHit: function (location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    },
    displayMiss: function (location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "miss");

    }
};

view.displayMiss("00");
view.displayHit("34");
view.displayMiss("55");
view.displayHit("12");
view.displayMiss("25");
view.displayHit("26");

view.displayMessage("New");



