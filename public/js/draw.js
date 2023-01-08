//get the canvas so that you can draw, you can override the canvas you get using the id of that canvas(optional)
function getCanvas(canvasId="canvas") {
    var c = document.getElementById(canvasId);
    return c.getContext("2d");
}


function Draw(sprite, position, w, h, color, fill, thickness){
    if(sprite === 'rect'){
        DrawRectangle(position, w, h, color, fill, thickness);
    }
    else if(sprite === 'circle'){
        var d = w;

        DrawCircle(position, w, color, fill, thickness);
    }
}

function DrawRectangle(position, w, h, color, fill, thickness){
    var ctx = getCanvas();

    ctx.lineWidth = thickness;
    ctx.strokeStyle = color;

    ctx.beginPath();

    if(fill){
        ctx.fillRect(position.x, position.y, w, h, color);
    }
    else{
        ctx.rect(position.x, position.y, w, h, color);
    }

    ctx.stroke();
}

function DrawCircle(position, d, color, fill, thickness){
    var ctx = getCanvas();

    ctx.lineWidth = thickness;
    ctx.strokeStyle = color;

    ctx.beginPath();

    if(fill){
        ctx.arc(position.x, position.y, d, 0, 2 * Math.PI);
    }
    else{
        ctx.arc(position.x, position.y, d, 0, 2 * Math.PI);
    }

    ctx.stroke();
}

function drawForceArrow(position, vector, color) {
    var ctx = getCanvas();
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(position.x, position.y);
    ctx.lineTo(vector.x, vector.y);
    ctx.stroke();
}