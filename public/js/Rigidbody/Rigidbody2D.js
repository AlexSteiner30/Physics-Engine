class Rigidbody2D{
    constructor(_useGravity = true){
        this.velocity = new Vector2(0, 0);

        this.useGravity = _useGravity;
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
       if(this.useGravity){
            this.Gravity();
       }
    }

    Gravity(){
        //change position
        this.sprite.position.add(this.velocity);
        
        //increase the acceleration
        this.velocity.sub(new Vector2(0, -g));
    }
}