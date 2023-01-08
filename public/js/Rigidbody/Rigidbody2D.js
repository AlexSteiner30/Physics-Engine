class Rigidbody2D{
    constructor(_object){
        this.velocity = new Vector2(0, 0);
    };

    ExecuteAwake(){

    }

    ExecuteStart(){
        // Components
        this.sprite = this.object.GetComponent("Sprite2D");
    }

    ExecuteUpdate(){
        this.Simulate();
    }

    Simulate(){ 
        //change position
        this.sprite.position.add(this.velocity);
        
        //increase the acceleration
        this.velocity.sub(new Vector2(0, -g));
    }
}