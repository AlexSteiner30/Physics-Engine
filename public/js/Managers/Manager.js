// Variables
let objects = [];
let isSimulating = false;

let collisions = [];

var mouseX = 0;
var mouseY = 0;

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
    // then call Update
    
    objects.forEach(object => {
        if(object.GetComponent("Collider2D")){
            collisions.push(object);
        }
        object.Start();
    });

    setTimeout(FixedUpdate, 1/100);
    setInterval(Update, 30);
}

function Update(){
    if(isSimulating){
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    
        objects.forEach(object => {
            object.Update();
        });
    }
}

function FixedUpdate(){
    if(isSimulating){
        collisions.forEach(object => {
            object.Update();
        });
    }
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

function GetAllObjects(){
    return objects;
}

function mouseCoordinates(event) {
    var rect = document.getElementById("canvas").getBoundingClientRect();
    mouseX = event.clientX - rect.left;
    mouseY = event.clientY - rect.top;
}

function clicked() {
    GetAllObjects().forEach(obj =>{ 
        obj.components.forEach(comp =>{
            if(comp.constructor.name === 'Draggable'){ 
                comp.Check();
            }
        });
    });
}