class Rigidbody2D{

    constructor(){
        this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d');

        setTimeout(this.Physics(), 5000); // 50 FPS;
    };

    Physics(){
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

}