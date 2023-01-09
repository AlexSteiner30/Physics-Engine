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
                if (this.sprite.position.y + this.sprite.h >= collider.object.components[0].position.y) {
                    this.rb.velocity.set(0, 0);
                    this.sprite.position.y = collider.object.components[0].position.y - this.sprite.h;
                }
                if (this.sprite.position.y >= collider.object.components[0].position.y + collider.object.componenents[0].h) {
                    this.rb.velocity.set(0, 0);
                    this.sprite.position.y = collider.object.components[0].position.y - this.sprite.h;        
                }
            });
        }
    }

    GetAllColliders(){
        GetAllObjects().forEach(obj =>{ 
            if(this.object != obj)
                obj.components.forEach(comp =>{
                    if(comp.constructor.name === 'Collider2D'){
                        this.colliders.push(comp);
                        console.log(comp.constructor.name);
                    }
                });
        });
    }
}