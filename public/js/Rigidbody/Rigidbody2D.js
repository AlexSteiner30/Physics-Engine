class Rigidbody2D{
    constructor(_useGravity = true, _mass = 1){
        this.velocity = new Vector2(0, 0);

        this.useGravity = _useGravity;
        this.mass = _mass;

        this.force = new Vector2(1, 0);
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

    AddForce(force){
        this.velocity.add(force);
    }
}