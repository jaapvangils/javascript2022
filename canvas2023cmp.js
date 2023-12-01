// Eerst definiëren we enkele variabelen
let canvas = document.createElement('canvas');
let ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;
document.body.appendChild(canvas);

// Variabelen voor de positie en snelheid van de cirkel
let x = 50; // startpositie X
let y = 50; // startpositie Y
let dx = 2; // snelheid X
let dy = 2; // snelheid Y
let radius = 20; // radius van de cirkel

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

    drawCircle();

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