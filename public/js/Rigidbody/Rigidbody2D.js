class Rigidbody2D{
    constructor( _mass = 1, _useGravity = true){
        this.acceleration = new Vector2(0, 0);
        this.velocity = new Vector2(0, 0);

        this.useGravity = _useGravity;
        this.mass = _mass;

        this.mouseDragging = false;
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
        if (!this.mouseDragging) {
            if(this.useGravity) {
                this.Gravity()
            }

            this.ApplyForces();
        }
        else {
            this.sprite.position.set(mouseX-this.sprite.w/2, mouseY-this.sprite.h/2);
            this.acceleration.mult(0);
            this.velocity.mult(0);
        }
    }

    Gravity() {
        this.AddForce(new Vector2(0, g));
    }

    ApplyForces(){
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
        if (document.getElementById("force-arrows").checked) DrawForceArrow(this.sprite.position, this.velocity.get().mult(10), this.sprite.w, this.sprite.h, 'black');
    }
}