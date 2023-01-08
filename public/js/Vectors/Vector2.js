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

    add(vector) {
        this.x += vector.x;
        this.y += vector.y;
    }

    sub(vector) {
        this.x -= vector.x;
        this.y -= vector.y;
    }

    mult(num) {
        this.x *= num;
        this.y *= num;
    }

    mult(num) {
        this.x /= num;
        this.y /= num;
    }
}