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
        if (this.sprite.name === 'rect') {
            this.colliders.forEach(collider => {
                if (this.sprite.position.y + this.sprite.h >= collider.object.GetComponent("Sprite2D").position.y) {
                    this.rb.velocity.set(0, 0);
                    this.sprite.position.y = collider.object.GetComponent("Sprite2D").position.y - this.sprite.h;
                }
                if (this.sprite.position.y <= collider.object.GetComponent("Sprite2D").position.y + collider.object.GetComponent("Sprite2D").h && this.object.GetComponent("RigidBody2D").velocity.y <= 0) {
                    this.rb.velocity.set(0, 0);
                    this.sprite.position.y = collider.object.GetComponent("Sprite2D").position.y - this.sprite.h;        
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