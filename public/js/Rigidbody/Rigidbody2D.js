class Rigidbody2D{
    constructor(_object){
        this.object = _object;
    };

    ExecuteAwake(){
        // Components
        this.collider = this.object.GetComponent("Collider2D");
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
        this.sprite.position.add(this.collider.velocity);
        
        //increase the acceleration
        this.collider.velocity.sub(new Vector2(0, -g));
    }
}