class Rigidbody2D extends Object{
    constructor(){
        this.canvas = document.getElementById("canvas");
        this.ctx = canvas.getContext("2d");
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