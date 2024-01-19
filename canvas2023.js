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

//variabelen cirkel [x]:
let x2 = 100; // startpositie bal 2
let y2 = 100;
let snelheid = 5; // snelheid van sprongen vd bal
let radius2 = 15; // radius van cirkel 2

// variabelen voor score
let Score = 0;

function scoreScherm() {
    ctx.font = "20px Arial";
    ctx.fillStyle = "red";
    ctx.fillText(String(Score),10,22); // weergeven score
}

function scoreTeller() { // score optellen
    Score++;
}

setInterval(scoreTeller, 100); // elke ... miliseconden score optellen

// functie om de bal te laten bewegen
function startBewegen() {
    dx = 3.3;
    dy = 2;
}

document.getElementById('startButton').addEventListener('click', startBewegen);

// eventlistner luistert toetsenbord uit en laad informatie in variabele event.
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') { 
        x2 -= snelheid; // x2 = x2 - snelheid
        if (x2+radius2 < 0) { x2 = canvas.width - radius2; } // spring naar de andere kant
    } else if (event.key === 'ArrowRight') { 
        x2 += snelheid;
        if (x2-radius2 > canvas.width) { x2 = radius2; } // sprint naar de andere kant
    }
    if (event.key === 'ArrowUp') {
        y2 -= snelheid;
        if (y2 < radius2) { y2 = radius2; } // blijf op de plek
    } else if (event.key === 'ArrowDown') {
        y2 += snelheid;
        if (y2 > canvas.height-radius2) { y2 = canvas.height-radius2; } // blijf op de plek
    }
});

// De functie om de cirkel te tekenen
function drawCircle() {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, true);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();
}

// De functie om de 2e cirkel te tekenen
function drawCircle2() {
    ctx.beginPath();
    ctx.arc(x2, y2, radius2, 0, Math.PI * 2, true);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
}

function collision() { // meten of de randen elkaar raken
    let rx = x - x2;
    let ry = y - y2;
    let distance = Math.sqrt(rx * rx + ry * ry); // stelling van pythagoras
    if (distance < radius + radius2) {
        alert(`Score: ${Score} . Game Over!`); // score weergeven met alert
        Score=0; // score weer op 0
        x=100; y=100; //bal 1 reset
        x2 = canvas.width-100; 
        y2 = 200; // reset bal 2
        dx = 0; dy = 0; // auto bewegen bal 1 uitzetten
    }     
}

// De update functie die elke frame wordt uitgevoerd
function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#FEFEFE";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    drawCircle(); // teken cirkel 1
    drawCircle2(); // teken 2e bal
    collision();
    scoreScherm();

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