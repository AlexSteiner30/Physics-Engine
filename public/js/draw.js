
function DrawRectangle(w, h, x, y, color, fill, thickness){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");

    ctx.lineWidth = thickness;
    ctx.strokeStyle = color;

    ctx.beginPath();

    if(fill){
        ctx.fillRect(x, y, w, h);
    }
    else{
        ctx.rect(x, y, w, h, color);
    }

    ctx.stroke();
}

function DrawCircle(x, y, r, color, fill, thickness){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");

    ctx.lineWidth = thickness;
    ctx.strokeStyle = color;

    ctx.beginPath();

    if(fill){
        ctx.arc(x, y, r, 0, 2 * Math.PI);
    }
    else{
        ctx.arc(x, y, r, 0, 2 * Math.PI);
    }

    ctx.stroke();
}