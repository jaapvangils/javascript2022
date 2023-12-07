// Eerst definiëren we enkele variabelen
let canvas = document.createElement('canvas');
let ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;
document.body.appendChild(canvas);


// Variabelen voor de positie en snelheid van de cirkel
let x = 50; // startpositie X
let y = 50; // startpositie Y
let dx = 0; // snelheid X , 0 om nog even niet te starten
let dy = 0; // snelheid Y
let radius = 20; // radius van de cirkel

// Variabelen voor de tweede bal
let x2 = 100; // startpositie X voor de tweede bal
let y2 = 100; // startpositie Y voor de tweede bal
let radius2 = 20; // radius van de tweede bal
let speed = 5; // snelheid waarmee de tweede bal beweegt

// De functie om de cirkel te tekenen
function drawCircle() {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, true);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();
}

// Functie om de tweede bal te tekenen
function drawSecondCircle() {
    ctx.beginPath();
    ctx.arc(x2, y2, radius2, 0, Math.PI * 2, true);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
}

// Event listener voor toetsaanslagen
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        x2 -= speed;
    } else if (event.key === 'ArrowRight') {
        x2 += speed;
    } else if (event.key === 'ArrowUp') {
        y2 -= speed;
    } else if (event.key === 'ArrowDown') {
        y2 += speed;
    }
});

function startMoving() {
    dx = 2;
    dy = 2;
}

// Voeg een event listener toe aan de knop
document.getElementById('startButton').addEventListener('click', startMoving);


// De update functie die elke frame wordt uitgevoerd
function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#FEFEFE";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    drawCircle();

    drawSecondCircle(); // Teken de tweede bal

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