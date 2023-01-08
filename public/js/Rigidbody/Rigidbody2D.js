class Rigidbody2D{
    constructor(_object){
        this.object = _object;
        this.acceleration = new Vector2(0, 0);
    };

    ExecuteAwake(){

    }

    ExecuteStart(){

    }

    ExecuteUpdate(){
        this.Simulate();
    }

    Simulate(){
        var sprite = this.object.components[0];
        var canvasHeight = document.getElementById("canvas").height;
        
        //change position
        sprite.position.add(this.acceleration);
        
        //increase the acceleration
        this.acceleration.sub(new Vector2(0, -g));

        //coliisions with top and bottom of canvas, only works with rectangle, remove later, it was just annoying to have the rectangle get out of the canvas
        if (sprite.position.y+sprite.h >= canvasHeight) {
            this.acceleration.set(0, 0);
            sprite.position.y = canvasHeight-sprite.h;
        }
        else if (sprite.position.y < 0) {
            this.acceleration.set(0, 0);
            sprite.position.y = 0;
        }
    }
}