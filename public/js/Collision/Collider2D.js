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
                console.log(collider);
                if(this.sprite.position.x + this.sprite.w >= collider.object.component[0].position.x){
                    console.log('Colliding with ' + collider.object.sprite.sprite);
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