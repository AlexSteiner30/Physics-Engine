class Rigidbody2D{

    constructor(){
        this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d');
 
    };

    Simulate(){
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    Execute(){
        this.Simulate();
    }

}