class Vector2{

    constructor(x, y){
        this.x = x;
        this.y = y;
    };

    length() {
        return sqrt(this.x * this.x + this.y * this.y);
    }

    sqrLength() {
        return this.x * this.x + this.y * this.y;
    }

    normalized(){
        return this * (1 / length(this))
    }

}