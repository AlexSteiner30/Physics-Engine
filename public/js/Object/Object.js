import { DrawRectangle } from '../draw.js';
import '../Vectors/Vector2.js'

class Object{
    constructor(_position,_w, _h, _color, _fill, _thickness){
        this.position = _position;
        this.w = _w;
        this.h = _h;
        this.color = _color;
        this.fill = _fill;
        this.thickness = _thickness;

        DrawRectangle(this.position, 10, 10, 'red', false, 2);
    }
}