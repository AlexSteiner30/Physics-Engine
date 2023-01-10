class Rigidbody2D{
    constructor( _mass = 1, _useGravity = true){
        this.acceleration = new Vector2(0, 0);
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

            this.AddForce(new Vector2(.1, 0));
            this.AddForce(new Vector2(.1, 0));
       }
    }

    Gravity(){
        //increase the acceleration
        this.AddForce(new Vector2(0, -g));

        //add to the velocity
        this.velocity.add(this.acceleration);

        // set acceleration to 0, 0
        this.acceleration.mult(0);

        //change position
        this.sprite.position.add(this.velocity);
    }

    AddForce(force){
        var tempForce = force.get();
        tempForce.div(this.mass);
        this.acceleration.add(tempForce);
    }
}