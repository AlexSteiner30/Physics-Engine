class Collider2D{
    constructor(){
        this.colliders = [];
    }

    ExecuteAwake(){
       
    }

    ExecuteStart(){
        // Components
        this.sprite = this.object.GetComponent("Sprite2D"); 
        this.rb = this.object.GetComponent("Rigidbody2D");

        this.GetAllColliders();
    }

    ExecuteUpdate(){
        this.DetectCollisions();
    }

    DetectCollisions(){
        if(this.sprite.name === 'rect') {
            this.colliders.forEach(collider => {
                var rect1Y = this.sprite.position.y;
                var rect1H = this.sprite.h;

                var rect2Y = collider.object.GetComponent("Sprite2D").position.y;
                var rect2H = collider.object.GetComponent("Sprite2D").h;

                var rect1X = this.sprite.position.x;
                var rect1W = this.sprite.w;

                var rect2X = collider.object.GetComponent("Sprite2D").position.x;
                var rect2W = collider.object.GetComponent("Sprite2D").w;
      
                if (rect1Y < rect2Y + rect2H && rect1H + rect1Y > rect2Y && this.rb.velocity.y > 0 && rect1X + rect1W >= rect2X && rect1X <= rect2X + rect2W) {
                    this.rb.velocity.y = 0;
                    this.sprite.position.y = collider.object.GetComponent("Sprite2D").position.y - this.sprite.h;
                }
                else if (rect1Y <= rect2Y + rect2H && rect1Y >= rect2Y && this.rb.velocity.y < 0 && rect1X + rect1W >= rect2X && rect1X <= rect2X + rect2W) {
                    this.rb.velocity.y = 0;
                    this.sprite.position.y = rect2Y+rect2H;
                }
                else if (rect1X <= rect2X + rect2W && rect1X >= rect2X && rect1Y <= rect2Y + rect2H && rect1Y+rect1H >= rect2Y) {
                    this.rb.velocity.x = 0;
                    this.sprite.position.x = rect2X + rect2W;
                }
                else if (rect1X + rect1W >= rect2X && rect1X + rect1W <= rect2X + rect2W && rect1Y <= rect2Y + rect2H && rect1Y+rect1H >= rect2Y) {
                    this.rb.velocity.x = 0;
                    this.sprite.position.x = rect2X - rect1W;
                }
            });
        }
    }

    GetAllColliders(){
        GetAllObjects().forEach(obj =>{ 
            if(this.object != obj){
                obj.components.forEach(comp =>{
                    if(comp.constructor.name === 'Collider2D'){ 
                        this.colliders.push(comp);
                    }
                });
            }
        });

    }
}