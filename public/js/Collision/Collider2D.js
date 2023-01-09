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
                //console.log(this.rb.velocity.y);
              
                if (rect1Y < rect2Y + rect2H && rect1H + rect1Y > rect2Y && this.rb.velocity.y >= 0) {
                    console.log('colliding');
                    this.rb.velocity.y = 0;
      

                    this.sprite.position.y = collider.object.GetComponent("Sprite2D").position.y - this.sprite.h;
                }
                else if (rect1Y <= rect2Y + rect2H && rect1Y >= rect2Y && this.rb.velocity.y <= 0) {
                    console.log("colliding with the top");
                    this.rb.velocity.y = 0;
                    this.sprite.position.y = rect2Y+rect2H;
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