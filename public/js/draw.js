
function Draw(sprite, position, w, h, color, fill, thickness){
    if(sprite === 'rect'){
        DrawRectangle(position, w, h, color, fill, thickness);
    }
    else if(sprite === 'circle'){
        var d = w;
        DrawCircle(position, d, color, fill, thickness);
    }
}

function DrawRectangle(position, w, h, color, fill, thickness){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");

    ctx.lineWidth = thickness;
    ctx.strokeStyle = color;

    ctx.beginPath();

    if(fill){
        ctx.fillRect(position.x, position.y, w, h);
    }
    else{
        ctx.rect(position.x, position.y, w, h, color);
    }

    ctx.stroke();
}

function DrawCircle(position, d, color, fill, thickness){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");

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