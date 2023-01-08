// Variables
let objects = [];

var g = -9.81;

// Functions
function AddToCanvas(item){
    objects.push(item);
}

function RemoveFromCanvas(item){
    objects.pop(item);
}

function UpdateItemInCanvas(item, newItem){
    objects.find(item) = newItem;
}

// Main function
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
}

function Update(){

}