var g = DEFAULTS.g;
const dynamicFriction = 150;

function UpdateVariables(){
    g = document.getElementById('gravity-slider').value;
    document.getElementById('g').innerText = 'g costant: ' + g;
}

function mouseCoordinates(event) {
    var rect = document.getElementById("canvas").getBoundingClientRect();
    mouseX = event.clientX - rect.left;
    mouseY = event.clientY - rect.top;
}