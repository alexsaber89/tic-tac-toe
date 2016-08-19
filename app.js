//create empty boxes
var wrapperDiv = document.getElementById("wrapper");
var boxes = "";
for (var i = 1; i <= 9; i++) {
  boxes += "<div class='box' id='box_" + i + "'>";
  boxes += "</div>";
}

wrapperDiv.innerHTML = boxes;

var theParent = document.querySelector("#wrapper");
theParent.addEventListener("click", defineTarget, false);

function defineTarget(e) {
    if (e.target !== e.currentTarget) {
        var clickedBox = e.target.id;
        displayXO(clickedBox);
    }
    e.stopPropagation();
}

function displayXO(clickedBox) {
  console.log(clickedBox);
}