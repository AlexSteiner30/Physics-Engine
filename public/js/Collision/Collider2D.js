class BoxCollider2D{
    constructor(_obj){
        this.obj = _obj;
        this.velocity = new Vector2(0, 0);
    }

    ExecuteAwake(){
        // Components
        this.sprite = this.object.GetComponent("Sprite2D");
    }

    ExecuteStart(){
        
    }

    ExecuteUpdate(){

        //colisions with top and bottom of canvas
        if (this.sprite.position.y+sprite.h >= canvasHeight) {
            this.velocity.set(0, 0);
            sprite.position.y = canvasHeight-sprite.h;
        }
        else if (sprite.position.y < 0) {
            this.velocity.set(0, 0);
            sprite.position.y = 0;
        }
    }
}