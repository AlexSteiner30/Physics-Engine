class Rigidbody2D{
    constructor(_object){
        this.object = _object;
    };

    ExecuteAwake(){

    }

    ExecuteStart(){

    }

    ExecuteUpdate(){
        this.Simulate();
    }

    Simulate(){
        var sprite = this.object.components[0];

        sprite.position.sub(new Vector2(0, g));
    }
}