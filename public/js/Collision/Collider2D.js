class Collider2D{
    constructor(){
    }

    ExecuteAwake(){
        // Components
        this.sprite = this.object.GetComponent("Sprite2D");
        this.rb = this.object.GetComponent("Rigidbody2D");
    }

    ExecuteStart(){
        
    }

    ExecuteUpdate(){

        //colisions with top and bottom of canvas
        if (this.sprite.position.y+sprite.h >= canvasHeight) {
            this.rb.velocity.set(0, 0);
            sprite.position.y = canvasHeight-sprite.h;
        }
        else if (sprite.position.y < 0) {
            this.rb.velocity.set(0, 0);
            sprite.position.y = 0;
        }
    }
}