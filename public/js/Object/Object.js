
class Object{
    constructor(_position,_w, _h, _color, _fill, _thickness){
        this.position = _position;
        this.w = _w;
        this.h = _h;
        this.color = _color;
        this.fill = _fill;
        this.thickness = _thickness;

        this.components = [];

        this.ExecuteStart();
    }

    AddComponent(component){
        this.components.push(component);

        console.log(this.components);
    }

    ExecuteStart(){
        DrawRectangle(this.position, this.w, this.h, this.color, this.fill, this.thickness);

        setInterval(this.ExecuteUpdate(), 50); // 50 FPS
    }

    ExecuteUpdate(){
        for(var i = 0; i < this.components.length; i++){
            this.components[i].Execute();
        }
    }
}