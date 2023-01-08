class Rigidbody2D extends Object{
    constructor(){
        super();
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
        this.sprite = GetComponent(components[0]);
        console.log(this.sprite);
        //this.sprite.position = new Vector2(0, 0);
    }
}