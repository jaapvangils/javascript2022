var mijnObject; // aan dit object koppelen we een figuur
var canvasNieuw;

//Canvas creëeren
function startCanvas() {
    canvasNieuw = document.createElement("canvas"); // canvas definiëren
    canvasNieuw.width = 480;
    canvasNieuw.height = 360;
    document.body.insertBefore(canvasNieuw, document.body.childNodes[0]);
    mijnObject = new objectMaker(30,30,"red", 20, 120);
}

// object maken
function objectMaker(breedte, hoogte, kleur, x, y) {
    this.breedte = breedte;
    this.hoogte = hoogte;
    this.x = x;
    this.y = y;
    ctx = canvasNieuw.getContext("2d");
    ctx.fillStyle = kleur;
    ctx.fillRect(this.x,this.y, this.breedte, this.hoogte);
}