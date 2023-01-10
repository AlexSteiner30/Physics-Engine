class Draggable {
    constructor() {

    }

    Check() {
        this.rb = this.object.GetComponent("Rigidbody2D");
        if (this.rb.mouseDragging) {
            this.rb.mouseDragging = false;
        }
        else {
            var sprite = this.object.GetComponent("Sprite2D");
            if (this.object.GetComponent("Sprite2D").name === 'rect') {
                var rectX = sprite.position.x;
                var rectY = sprite.position.y;
                var rectW = sprite.w;
                var rectH = sprite.h;

                if (mouseX >= rectX && mouseX <= rectX + rectW && mouseY >= rectY && mouseY <= rectY + rectH) {
                    this.rb.mouseDragging = true;
                }
            }
        }
    }
}