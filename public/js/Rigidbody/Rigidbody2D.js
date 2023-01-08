class Rigidbody2D{
    constructor(_object){
        this.velocity = new Vector2(0, 0);
    };

    ExecuteAwake(){

    }

    ExecuteStart(){
        // Components
        this.sprite = this.object.GetComponent("Sprite2D");

        this.object.components.forEach(element => {
            console.log(element);
        });
        
        console.log(this.sprite);
    }

    ExecuteUpdate(){
        this.Simulate();
    }

    Simulate(){
        var canvasHeight = document.getElementById("canvas").height;
        
        //change position
        this.sprite.position.add(this.velocity);
        
        //increase the acceleration
        this.acceleration.sub(new Vector2(0, -g));
    }
}