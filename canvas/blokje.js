var MyCanvas = document.getElementById("MyCanvas"); // canvas uitlezen
var ctx = MyCanvas.getContext("2d"); // ctx koppel aan 2d omgeving
var MySprite = ctx.fillRect(20,20,25,25); // MySprite => vierhoek in ctx
var SpritePosition = [20,20]; // defenitie [0]=20 [1]=20

document.addEventListener("keydown", (event) => {
    let keypressed = event.key; // event heeft de inhoud van de Eventlistener
    console.log(keypressed);
    switch (keypressed) {
        case "ArrowUp": //Arrow => pijltjestoetsen
            MoveSprite("u", 5); // u = up
            break;
        case "ArrowLeft":
            MoveSprite("l", 5); // l = left
            break;
        case "ArrowDown":
            MoveSprite("d", 5); // d = down
            break;
        case "ArrowRight":
            MoveSprite("r", 5); // r = right
            break;
        default: // als er niets is: standaard er uit (break)
            break;
    }
});

function MoveSprite(direction, speed) {
    switch (direction) {
        case "u":
            SpritePosition[1] -= speed; // y as dec
            break;
        case "d":
            SpritePosition[1] += speed; // y as inc
            break;
        case "l":
            SpritePosition[0] -= speed; // x as dec
            break;
        case "r":
            SpritePosition[0] += speed; // x as inc
        default: break;
    }
    if (SpritePosition[0] < 0) { SpritePosition[0] = 0; }
    if (SpritePosition[1] < 0) { SpritePosition[1] = 0; }
    if (SpritePosition[0] > 475) { SpritePosition[0] = 475; }
    if (SpritePosition[1] > 475) { SpritePosition[1] = 475; }
    ctx.clearRect(0,0, MyCanvas.offsetWidth, MyCanvas.offsetHeight);
    ctx.fillRect(SpritePosition[0], SpritePosition[1], 25, 25);
}