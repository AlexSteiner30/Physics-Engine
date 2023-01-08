class Rigidbody2D{
    constructor(_object){
        this.object = _object;
        this.velocity = new Vector2(0, 0);
    };

    ExecuteAwake(){
        // Components
        this.sprite = this.object.GetComponent("Sprite2D");
    }

    ExecuteStart(){

    }

    ExecuteUpdate(){
        this.Simulate();
    }

    Simulate(){
        var canvasHeight = document.getElementById("canvas").height;
        
        //change position
        this.sprite.position.add(this.velocity);
        
        //increase the acceleration
        this.velocity.sub(new Vector2(0, -g));
    }
}