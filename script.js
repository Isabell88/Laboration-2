const mobilMenu = document.querySelector(".mobilMenu");
const dropdownBars = document.getElementById("dropdown");

dropdownBars.onclick = function() {
    if (mobilMenu.style.height == "50%") {
        mobilMenu.style.height = null;
    } else {
        mobilMenu.style.height = "50%";
    }
}

var nameText = "ISABELL BETAR";
var nameArray = nameText.split("");
var loopTimer;
function frameLooper( ) {
    if(nameArray.length > 0) {
document.getElementById("type-name").innerHTML += nameArray.shift();
    } else {
        clearTimeout(loopTimer);
        return false;
    }
    loopTimer = setTimeout("frameLooper()",100);
}
frameLooper();

