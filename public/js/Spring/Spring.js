class Spring {
    constructor(_position, _connectedObject, _w, _fullLength, _k, _color) {
        this.position = _position;
        this.connectedObject = _connectedObject;
        this.w = _w;
        this.fullLength = _fullLength;
        this.color = _color;
        this.k = _k;
        this.semiCircles = 5;
    }
    
    ExecuteAwake() {
        
    }
    
    ExecuteStart() {

    }

    ExecuteUpdate() {
        this.connectedObject.position.limit(this.position.add(new Vector2(this.fullLength, this.fullLength)));
    }
}