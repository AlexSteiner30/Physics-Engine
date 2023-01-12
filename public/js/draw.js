//get the canvas so that you can draw, you can override the canvas you get using the id of that canvas(optional)
function getCanvas(canvasId="canvas") {
    var c = document.getElementById(canvasId);
    return c.getContext("2d");
}


function Draw(sprite, position, w, h, color, fill, thickness, obj=null){
    if(sprite === 'rect'){
        DrawRectangle(position, w, h, color, fill, thickness);
    }
    else if(sprite === 'circle'){
        var d = w;
        DrawCircle(position, d, color, fill, thickness);
    }
    else if(sprite === "spring") {
        DrawSpring(position, obj, color);
    }
}

function DrawRectangle(position, w, h, color, fill, thickness){
    var ctx = getCanvas();

    ctx.lineWidth = thickness;
    ctx.strokeStyle = color;

    ctx.beginPath();

    if(fill){
        ctx.fillStyle = color;
        ctx.fillRect(position.x, position.y, w, h);
    }
    else{
        ctx.rect(position.x, position.y, w, h);
    }

    ctx.stroke();
}

function DrawCircle(position, d, color, fill, thickness){
    var ctx = getCanvas();

    ctx.lineWidth = thickness;
    ctx.strokeStyle = color;

    ctx.beginPath();

    if(fill){
        ctx.fillStyle = color;
        ctx.arc(position.x, position.y, d, 0, 2 * Math.PI);
        ctx.fill();
    }
    else{
        ctx.arc(position.x, position.y, d, 0, 2 * Math.PI);
    }

    ctx.stroke();
}

function DrawSpring(position, connectedObject, color) {
    //improve drawing later
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(position.x, position.y);
    ctx.lineTo(connectedObject.position.x, connectedObject.position.y);
    ctx.stroke();
}

function DrawForceArrow(position, vector, w, h, color) {
    var ctx = getCanvas();
    ctx.beginPath();

    ctx.lineWidth = 3;
    ctx.strokeStyle = color;

    ctx.moveTo(position.x + (w/2), position.y + (h/2));
    ctx.lineTo(position.x + vector.x + (w/2), position.y + vector.y + (h/2));

    ctx.stroke();
}