// Variables
let objects = [];

var g = -9.81;


// Main functions
function Awake(){ 
    // call the awake function in all the objects
    // then call start

    objects.forEach(object => {
        object.Awake();
    });

    Start();
}

function Start(){
    // call the start function in all the objects
    // then call Update - (50 FPS)
    
    objects.forEach(object => {
        object.Start();
    });

    setInterval(Update, 500);
}

function Update(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    objects.forEach(object => {
        object.Update();
    });
}

// Functions
function AddObject(object){
    objects.push(object);
}

function RemoveObject(object){
    objects.pop(object);
}

function UpdateObject(object, newObject){
    objects.find(object) = newObject;
}