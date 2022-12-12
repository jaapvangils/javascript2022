var myGamePiece = [];
var elementen = 15;

function startGame() {
    myGameArea.start();
    for (n=0; n < elementen; n++)
    {
        myGamePiece[n] = new component(30, 30, "red", n*40, 120);
    }
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('keydown', function (e) {
            myGameArea.key = e.keyCode;
        })
        window.addEventListener('keyup', function (e) {
            myGameArea.key = false;
        })
    }, 
    clear : function(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y) {
    this.gamearea = myGameArea;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;        
    }
}

function updateGameArea() {
    myGameArea.clear();
    for (n = 0; n < elementen; n++) {
        myGamePiece[n].speedX = 0;
        myGamePiece[n].speedY = 0;    
        if (myGameArea.key && myGameArea.key == 37) {myGamePiece[n].speedX = -1; }
        if (myGameArea.key && myGameArea.key == 39) {myGamePiece[n].speedX = 1; }
        if (myGameArea.key && myGameArea.key == 38) {myGamePiece[n].speedY = -1; }
        if (myGameArea.key && myGameArea.key == 40) {myGamePiece[n].speedY = 1; }
        myGamePiece[n].newPos();    
        myGamePiece[n].update();
    }
}