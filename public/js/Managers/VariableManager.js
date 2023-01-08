var g = 9.81;

function UpdateVariables(){
    
    g = document.getElementById('gravity-slider').value;
    document.getElementById('g').innerText = 'g costant: ' + g;
}