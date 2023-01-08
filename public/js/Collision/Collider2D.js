class Collider2D{
    constructor(){
        this.colliders = [];
    }

    ExecuteAwake(){
       
    }

    ExecuteStart(){
        // Components
        //this.sprite = this.object.GetComponent("Sprite2D"); // need to fix this
        this.sprite = this.object.components[0];
        this.rb = this.object.GetComponent("Rigidbody2D");

        this.GetAllColliders();
    }

    ExecuteUpdate(){
        this.DetectCollisions();
    }

    DetectCollisions(){
        if (this.sprite.name === 'rect') {
            this.colliders.forEach(collider => {
                if(this.sprite.position.y + this.sprite.h >= collider.object.components[0].position.y){
                    console.log('Colliding with ' + colliders);

                    this.rb.velocity.set(0, 0);
                    this.sprite.position.y = collider.object.components[0].position.y-this.sprite.h;
                }
            });
        }
    }

    GetAllColliders(){
        objects.forEach(object => {
            if(object != this.object){
                object.GetAllComponents().forEach(component =>{ 
                    if(component.constructor.name === 'Collider2D'){
                        this.colliders.push(component);
                    }
                });
            }
        });
    }
}