
class Object{
    constructor(_position,_w, _h, _color, _fill, _thickness){
        this.position = _position;
        this.w = _w;
        this.h = _h;
        this.color = _color;
        this.fill = _fill;
        this.thickness = _thickness;

        this.components = [];

        this.Start();
    }

    AddComponent(component){
        this.components.push(component);
    }

    Start(){
        DrawRectangle(this.position, this.w, this.h, this.color, this.fill, this.thickness);

        //setTimeout(this.Update(), 5000) // 50 FPS
    }

    Update(){
        console.log('Update');

        this.components.forEach(component => {
            component.Execute();
        });
    }
}