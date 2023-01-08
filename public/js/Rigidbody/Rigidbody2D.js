class Rigidbody2D extends Object{
    constructor(){
        this.ctx = getCanvas();
    };

    ExecuteAwake(){

    }

    ExecuteStart(){

    }

    ExecuteUpdate(){
        this.Simulate();
    }

    Simulate(){
        console.log(1);
        //GetComponent(Sprite2D()).position = new Vector2(0, 0);

        GetComponent(0);
    }
}