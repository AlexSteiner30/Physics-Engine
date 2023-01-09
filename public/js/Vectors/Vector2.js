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

    magnitued(){
        return sqrt((this.x * this.x) + (this.y * this.y));
    }

    normalized(){
        return (Vector2( (this.x / this.magnituede()),  (this.y / this.magnituede()) ));
    }

    //add a Vector2 to another one
    add(vector) {
        this.x += vector.x;
        this.y += vector.y;
    }

    //substracts a Vector2 from another one
    sub(vector) {
        this.x -= vector.x;
        this.y -= vector.y;
    }

    //multiplies both x and y by a certain number
    mult(num) {
        this.x *= num;
        this.y *= num;
    }

    //divides both x and y by a certain number
    div(num) {
        this.x /= num;
        this.y /= num;
    }

    //sets the vector to be equal to its parameters(a is x coordinate and b is y coordiante). Can also pass a Vector2 as parameter
    set(a, b=null) {
        if (b != null) {
            this.x = a;
            this.y = b;
        }
        else {
            this.x = a.x;
            this.y = a.y;
        }
    }

    //returns a copy of the vector
    get() {
        return new Vector2(this.x, this.y);
    }

    //limits magnitude of the vector
    limit(max) {
        if (this.sqrLength() > max*max) {
            this.set(this.normalized());
            this.mult(max);
        }
    }

    //returns distance between 2 vectors
    dist(vector) {
        return Math.sqrt(Math.pow(this.x-vector.x, 2)+Math.pow(this.y-vector.y, 2));
    }
}