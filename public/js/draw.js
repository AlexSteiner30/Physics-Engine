
export function DrawRectangle(position, w, h, color, fill, thickness){
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

    console.log("A");
}

function DrawCircle(position, r, color, fill, thickness){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");

    ctx.lineWidth = thickness;
    ctx.strokeStyle = color;

    ctx.beginPath();

    if(fill){
        ctx.arc(position.x, position.y, r, 0, 2 * Math.PI);
    }
    else{
        ctx.arc(position.x, position.y, r, 0, 2 * Math.PI);
    }

    ctx.stroke();
}