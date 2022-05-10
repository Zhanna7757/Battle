var view = {
    displayMessage: function (m) {
        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = m;
    },
    displayHit: function (location) {
        var cell = document.getElementById(Location);
        cell.setAttribute("class", "hit");
    },
    displayMiss: function (location) {
        var cell = document.getElementById(Location);
        cell.setAttribute("class", "miss");

    }
};

view.displayMiss("00");
view.displayHit("34");
view.displayMiss("55");
view.displayHit("12");
view.displayMiss("25");
view.displayHit("26");

view.displayMessage("Tap tap, is this thing on?");



