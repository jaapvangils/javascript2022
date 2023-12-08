// Eerst definiëren we enkele variabelen
let canvas = document.createElement('canvas');
let ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;
document.body.appendChild(canvas);

// Variabelen voor de positie en snelheid van de cirkel
let x = 50; // startpositie X
let y = 50; // startpositie Y
let dx = 0; // snelheid X
let dy = 0; // snelheid Y
let radius = 20; // radius van de cirkel

// Variabelen voor 2e bal
let x2 = 100;
let y2 = 100;
let radius2 = 15; // radius iets kleiner
let speed = 5; // snelheid van de 2e bal

//functie om toetsen uit te lezen en bal te laten bewegen
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        x2 -= speed;
        if (x2 < 0) {
            x2 = canvas.width-radius2;
        }
    } else if (event.key === 'ArrowRight') {
        x2 += speed;
        if (x2>canvas.width-radius2) { x2 = 0 ;}
    }
    if (event.key === 'ArrowUp') {
        y2 -= speed;
        if (y2 < radius2) { y2 = radius2; }
    } else if (event.key === 'ArrowDown') {
        y2 += speed;
        if (y2 > canvas.height-radius2) { 
            y2 = canvas.height-radius2;
        }
    }
});



// De functie om de 2e cirkel te tekenen
function drawCircle2() { // 2 toegevoegd
    ctx.beginPath();
    ctx.arc(x2, y2, radius2, 0, Math.PI * 2, true); // x2 y2 radius2
    ctx.fillStyle = 'red'; // andere kleur
    ctx.fill();
    ctx.closePath();
}
// functie om bal in beweging te zetten.
function startMoving()
{
    dx = 2; // snelheid x op 2 zetten
    dy = 2; 
}

// functie om de button uit te lezen
document.getElementById('startButton').addEventListener('click', startMoving);

// De functie om de cirkel te tekenen
function drawCircle() {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, true);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();
}




// De update functie die elke frame wordt uitgevoerd
function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#FEFEFE";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    drawCircle(); // bal 1
    drawCircle2(); // bal 2

    // Verander de positie van de cirkel
    x += dx;
    y += dy;

    // Laat de cirkel stuiteren wanneer hij de randen van het canvas raakt
    if (x + dx > canvas.width - radius || x + dx < radius) {
        dx = -dx;
    }
    if (y + dy > canvas.height - radius || y + dy < radius) {
        dy = -dy;
    }

    requestAnimationFrame(update); // Roep update weer aan voor de volgende frame
}

// Start de animatieloop
update();