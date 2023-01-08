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
        console.log(this.object.components[0]);
        //this.sprite.position = new Vector2(0, 0);
    }
}