var g = DEFAULTS.g;

function UpdateVariables(){
    
    g = document.getElementById('gravity-slider').value;
    document.getElementById('g').innerText = 'g costant: ' + g;
}