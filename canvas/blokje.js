var MyCanvas = document.getElementById("MyCanvas"); // koppeling naar Canvas
var ctx = MyCanvas.getContext("2d"); // koppelen aan 2d modus

var SpritePositieX = Math.floor(Math.random()*480); // positie X var
var SpritePositieY = Math.floor(Math.random()*480); // positie Y var
var stapGrootte = 5; // sneldheid van bewegen blokje

tekenSprite();

document.addEventListener("keydown", (uitlezen) => {
    let toets = (uitlezen.keys || []); // uitlezen van 1 toetsindruk
    if (toets[38]) {
         // pijl omhoog => Y verminderen met stapgrootte
            SpritePositieY -= stapGrootte;
            tekenSprite();
    }
    if (toets[40]) { 
            SpritePositieY += stapGrootte;
            tekenSprite();
    }
    if (toets[39]) {
            SpritePositieX += stapGrootte;
            tekenSprite();
    }
    if (toets[37]) {
            SpritePositieX -= stapGrootte;
            tekenSprite();
        }
    if (toets[32]) { // bij spatie -> springen
            springOmhoog(); // functie spring omhoog
    }
            
});


// functie om een vertraging in te bouwen
function sleep(ms) {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
  }

async function springOmhoog() { // asynchrone functie: deze neemt wat tijd in beslag.
    for (i = 0; i < 20; i++) // loop om 15x omhoog te bewegen
    {
        SpritePositieY -= 2;
        await sleep(25); // met await gaat het script pas verder nadat sleep (25) klaar is met afspelen.
        tekenSprite(); // elke keer een afdruk maken
    }
    for (i = 0; i < 20; i++) // en weer terugbewegen.
    {
        SpritePositieY += 2;
        await sleep(25);
        tekenSprite();
    }
}

function tekenSprite() {
    if (SpritePositieX < 0) { SpritePositieX = MyCanvas.offsetWidth - 20; }
    if (SpritePositieY < 0) { SpritePositieY = MyCanvas.offsetHeight - 20; }
    if (SpritePositieX > MyCanvas.offsetWidth - 20) 
        { SpritePositieX = 0; }
    if (SpritePositieY > MyCanvas.offsetHeight - 20 ) 
        { SpritePositieY = 0; }
    ctx.clearRect(0, 0, MyCanvas.offsetWidth, MyCanvas.offsetHeight); // leegmaken
    ctx.fillStyle = "green"; // kleur toekennen
    ctx.fillRect(SpritePositieX, SpritePositieY, 20, 20); // vierkant tekenen
}

