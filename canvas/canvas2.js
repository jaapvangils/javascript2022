var mijnObject; // in dit object plaatsen we een Rectangle

// opstarten Canvas vanuit JavaScript
function startCanvas() {
	canvasNw = document.createElement("canvas"); // een element canvas aan de array canvas toevoegen.
    canvasNw.width = 480;
    canvasNw.height = 360;
    document.body.insertBefore(canvasNw, document.body.childNodes[0]);
    mijnObject = new onsObject(30, 30, "red", 20, 120);
}

function onsObject(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;    
    ctx = canvasNw.getContext("2d");
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
}