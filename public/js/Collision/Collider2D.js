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
        if (this.sprite.sprite === 'rect') {
            if (this.sprite.position.y+sprite.h >= canvasHeight) {
                this.rb.velocity.set(0, 0);
                sprite.position.y = canvasHeight-sprite.h;
            }
            else if (sprite.position.y < 0) {
                this.rb.velocity.set(0, 0);
                sprite.position.y = 0;
            }
        }
        else if (this.sprite.sprite === "circle") {
            if (this.sprite.position.y+this.sprite.d >= canvasHeight) {
                this.rb.velocity.set(0, 0);
                sprite.position.y = canvasHeight-sprite.d;
            }
            else if (this.sprite.position.y-this.sprite.d < 0) {
                this.rb.velocity.set(0, 0);
                sprite.position.y = 0;
            }
        }
    }
}