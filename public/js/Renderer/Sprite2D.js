class Sprite2D{

    constructor(_sprite, _position, _w, _h, _color, _fill, _thickness){
        this.ctx = getCanvas();

        this.sprite = _sprite;
        this.position = _position;
        this.w = _w;
        this.h = _h;
        this.color = _color;
        this.fill = _fill;
        this.thickness = _thickness;
    };


    ExecuteAwake(){
        Draw(this.sprite, this.position, this.w, this.h, this.color, this.fill, this.thickness);
    }

    ExecuteStart(){
        
    }

    ExecuteUpdate(){
        Draw(this.sprite, this.position, this.w, this.h, this.color, this.fill, this.thickness);
    }
}