class BoxCollider2D{
    constructor(_obj){
        this.obj = _obj;
    }

    ExecuteAwake(){
        Draw(this.obj.components[0].sprite, this.obj.components[0].position, this.obj.components[0].w, this.obj.components[0].h, 'gold', false, this.obj.components[0].thickness);
    }

    ExecuteStart(){
        
    }

    ExecuteUpdate(){
        //Draw(this.sprite, this.position, this.w, this.h, this.color, this.fill, this.thickness);
        Draw(this.obj.components[0].sprite, this.obj.components[0].position, this.obj.components[0].w, this.obj.components[0].h, 'gold', false, this.obj.components[0].thickness);
    }
}