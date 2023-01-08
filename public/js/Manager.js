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