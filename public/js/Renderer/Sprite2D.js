class Sprite2D{

    constructor(_name, _position, _w, _h, _color, _fill, _thickness){
        this.ctx = getCanvas();

        this.name = _name;
        this.position = _position;
        this.w = _w;
        this.h = _h;
        this.color = _color;
        this.fill = _fill;
        this.thickness = _thickness;
    };


    ExecuteAwake(){
        Draw(this.name, this.position, this.w, this.h, this.color, this.fill, this.thickness);
    }

    ExecuteStart(){
        
    }

    ExecuteUpdate(){
        Draw(this.name, this.position, this.w, this.h, this.color, this.fill, this.thickness);
    }
}