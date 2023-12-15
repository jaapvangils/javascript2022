// Eerst definiëren we enkele variabelen
let canvas = document.createElement('canvas');
let ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;
document.body.appendChild(canvas);

// Variabelen voor de positie en snelheid van de cirkel
let x = canvas.width-50; // startpositie X
let y = canvas.height-50; // startpositie Y
let dx = 0; // snelheid X
let dy = 0; // snelheid Y
let radius = 20; // radius van de cirkel

// variabelen voor 2e bal
let x2 = 100;
let y2 = 150;
let speed = 4;
let radius2 = 10; // grootte van de bal

let tijd = 20; // cyclus voor teller
let score = 0; // start met score 0
let teller = 0; // 

function scoreBijhouden() {
    if (teller > tijd) {
        teller = 0;
        score++;
    }
    teller++;
    ctx.font = "10px Arial";
    ctx.fillStyle = "red";
    ctx.fillText(String(score), 10, 10); 
}

document.addEventListener('keydown', function(event) {
     if (event.key === 'ArrowLeft') {
        x2 -= speed;
        if (x2 < radius2) {
            x2 = canvas.width - radius2;
        }
     } else if (event.key === 'ArrowRight') {
        x2 += speed;
        if (x2 > canvas.width - radius2) {
            x2 = radius2;
        }
     }
     if (event.key === 'ArrowUp' && y2 > radius2) {
        y2 -= speed;
     } else if (event.key === 'ArrowDown') {
        y2 += speed;
        if (y2 > canvas.height - radius2) {
            y2 = canvas.height - radius2;
        }
     }
});

function collission() {
    let dx = x - x2;
    let dy = y - y2;
    let distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance < radius + radius2) {
        score = score - 50;
        if (score < 0) {
            alert("Game Over");
            score = 0;
        }
        x=100; y=100;
        x2 = 300; y2 = 200;
        dx = 0; dy = 0;
    }

}

// starten van bewegen bal 1
function startBewegen() {
    dx = 2;
    dy = 2;
}
// functie om klik op button om te zetten in uitvoeren functie startBewegen
document.getElementById('startButton').addEventListener('click', startBewegen);


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

// De update functie die elke frame wordt uitgevoerd
function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#FEFEFE";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
 
    drawCircle(); // eerste bal
    drawCircle2(); // tweede bal
    collission();
    scoreBijhouden();
 
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