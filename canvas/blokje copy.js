var MyCanvas = document.getElementById("MyCanvas"); // koppeling naar Canvas
var ctx = MyCanvas.getContext("2d"); // ctx => 2d canvas

// variabelen voor beweging
var SpritePositionX = 50; // plek horizontaal
var SpritePositionY = 50; // plek verticaal
var speed = 5; // snelheid van bewegen sprite

tekenSprite();

//setInterval(randomPlek, 2000); // elke 2 seconden een andere plek (2000ms)

document.addEventListener("keydown", (event) => {
    let keypressed = event.key; // uitlezen event / toetsenbord
    console.log(keypressed); // uitlezen in log (F12)
    switch (keypressed) { // we testen de inhoud van keypressed
        case "ArrowUp": // als de inhoud van keypressed omhoog is
            SpritePositionY -= speed; // Y = Y - speed
            tekenSprite(); // tekenen van het scherm
            break;
        case "ArrowDown": 
            SpritePositionY += speed;
            tekenSprite();
            break;
        case "ArrowLeft":
            SpritePositionX -= speed;
            tekenSprite();
            break;
        case "ArrowRight":
            SpritePositionX += speed;
            tekenSprite();
            break;
        default: break;
    }
});

function tekenSprite() {
    let breed = MyCanvas.offsetWidth-20;
    let hoog = MyCanvas.offsetHeight-20;
    if (SpritePositionX < 0) { SpritePositionX = 0;}
    if (SpritePositionY < 0) { SpritePositionY = 0;}
    if (SpritePositionX > breed) {SpritePositionX = breed;}
    if (SpritePositionY > hoog) {SpritePositionY = hoog;}
    ctx.clearRect(0,0, MyCanvas.offsetWidth, MyCanvas.offsetHeight);
    ctx.fillStyle = "red";
    ctx.fillRect(SpritePositionX, SpritePositionY, 20, 20);
}

function randomPlek() {
    console.log("willekeurige plek");
    SpritePositionX = Math.floor(Math.random()*475);
    SpritePositionY= Math.floor(Math.random()*475);
    tekenSprite();
}