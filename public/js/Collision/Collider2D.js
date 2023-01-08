class Collider2D{
    constructor(){
    }

    ExecuteAwake(){
       
    }

    ExecuteStart(){
        // Components
        //this.sprite = this.object.GetComponent("Sprite2D"); // need to fix this
        this.sprite = this.object.components[0];
        this.rb = this.object.GetComponent("Rigidbody2D");

        console.log(this.sprite);
    }

    ExecuteUpdate(){
        var canvasHeight = document.getElementById("canvas").height;
       
        //colisions with top and bottom of canvas
        if (this.sprite.name === 'rect') {
            if (this.sprite.position.y+this.sprite.h >= canvasHeight && g >= 0) {
                this.velocity.set(0, 0);
                this.sprite.position.y = canvasHeight-this.sprite.h;
            }
            else if (this.ExecuteAwakesprite.position.y < 0 && g <= 0) {
                this.velocity.set(0, 0);
                this.sprite.position.y = 0;
            }
        }
        else if (this.sprite.name === "circle") {
            if (this.sprite.position.y + this.sprite.d >= canvasHeight) {
                this.rb.velocity.set(0, 0);
                this.sprite.position.y = canvasHeight-this.sprite.d;
            }
            else if (this.sprite.position.y-this.sprite.d < 0) {
                this.rb.velocity.set(0, 0);
                this.sprite.position.y = 0;
            }
        }
    }
}