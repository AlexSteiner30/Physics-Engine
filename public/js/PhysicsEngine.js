//default values of the control panel variables
const DEFAULTS = {
    g: 9.81 
};

function Initialize(){
    isSimulating = true;
    
    var pos = new Vector2(500, 200);
    var obj = new Object();

    obj.AddComponent(new Sprite2D('rect', pos, 100, 100, 'red', true, 2));
    obj.AddComponent(new Rigidbody2D(100));
    obj.AddComponent(new Collider2D());

    var pos2 = new Vector2(80, 350);
    var obj2 = new Object();

    obj2.AddComponent(new Sprite2D('circle', pos2, 50, 0, 'blue', true, 2));

    var pos3 = new Vector2(200, 500);
    var obj3 = new Object();

    obj3.AddComponent(new Sprite2D('rect', pos3, 600, 10, 'black', true, 2));
    obj3.AddComponent(new Collider2D());

    var pos4 = new Vector2(200, 100);
    var obj4 = new Object();

    obj4.AddComponent(new Sprite2D('rect', pos4, 600, 40, 'black', true, 2));
    obj4.AddComponent(new Collider2D());

    Awake();
}

function Play(){
    isSimulating = true;

    setInterval(UpdateVariables, 1);
}

function Pause(){
    isSimulating = false;
}

function Reset() {
    // Set a fake timeout to get the highest timeout id
    var highestTimeoutId = setTimeout(";");

    for (var i = 0 ; i < highestTimeoutId ; i++) {
        clearTimeout(i); 
    }

    let ctx = getCanvas();
    let canvas = document.getElementById("canvas");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // clean all the objects
    objects.forEach(element => {
        delete(objects);
    });

    objects = [];

    Initialize();
    setInterval(UpdateVariables, 1);
}

function Default() {
    g = document.getElementById('gravity-slider').value = DEFAULTS.g;
}