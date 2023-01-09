var MyCanvas = document.getElementById("MyCanvas"); // koppeling naar Canvas
var ctx = MyCanvas.getContext("2d"); // koppelen aan 2d modus

var Spr1PosX = Spr1Formaat; // Pos X var
var Spr1PosY = Spr1Formaat; // Pos Y var
var Spr1Formaat = 50;
var Spr2x = MyCanvas.offsetWidth - Spr2formaat;
var Spr2y = MyCanvas.offsetHeight - Spr2formaat;
var sprongSpr2 = 20;
var tijdVoorWissel = 200;
var richtingSpr2x = 1;
var richtingSpr2y = 1;
var Spr2formaat = 40;
var ingedrukteToets = [];
var crash = 0;
setInterval(speelVeldUpdate, 5);

//luisteren naar toetsenbord in EventListener (soort interupt)
document.addEventListener("keydown", function (uitlezen) {
  ingedrukteToets = ingedrukteToets || [];
  ingedrukteToets[uitlezen.keyCode] = true;
});

document.addEventListener("keyup", function (e) {
  ingedrukteToets[e.keyCode] = false;
});

function speelVeldUpdate() {
  if (ingedrukteToets && ingedrukteToets[38]) {
    Spr1PosY--;
  }
  if (ingedrukteToets && ingedrukteToets[40]) {
    Spr1PosY++;
  }
  if (ingedrukteToets && ingedrukteToets[39]) {
    Spr1PosX++;
  }
  if (ingedrukteToets && ingedrukteToets[37]) {
    Spr1PosX--;
  }
  ctx.clearRect(0, 0, MyCanvas.offsetWidth, MyCanvas.offsetHeight); // leegmaken
  Spr1(); // teken sprite 1
  Spr2(); // teken sprite 2
  botsing();  // meten botsing
}
  
function Spr1() {
  if (Spr1PosX < 0) {
    Spr1PosX = MyCanvas.offsetWidth - Spr1Formaat;
  }
  if (Spr1PosY < 0) {
    Spr1PosY = MyCanvas.offsetHeight - Spr1Formaat;
  }
  if (Spr1PosX > MyCanvas.offsetWidth - Spr1Formaat) {
    Spr1PosX = 0;
  }
  if (Spr1PosY > MyCanvas.offsetHeight - Spr1Formaat) {
    Spr1PosY = 0;
  }
  ctx.fillStyle = "green"; // kleur toekennen
  ctx.fillRect(Spr1PosX, Spr1PosY, Spr1Formaat, Spr1Formaat); // vierkant tekenen
 
}

function Spr2() {
  sprongSpr2++;
  if (sprongSpr2 > tijdVoorWissel) {
    sprongSpr2 = 0;
    richtingSpr2x = Math.floor(Math.random() * 3) - 1;
    richtingSpr2y = Math.floor(Math.random() * 3) - 1;
  }
  Spr2x += richtingSpr2x;
  Spr2y += richtingSpr2y;
  // check randen
  if (Spr2x < 0) {
    Spr2x = MyCanvas.offsetWidth - Spr2formaat;
  }
  if (Spr2y < 0) {
    Spr2y = MyCanvas.offsetHeight - Spr2formaat;
  }
  if (Spr2x > MyCanvas.offsetWidth - Spr2formaat) {
    Spr2x = 0;
  }
  if (Spr2y > MyCanvas.offsetHeight - Spr2formaat) {
    Spr2y = 0;
  }
  ctx.fillStyle = "red"; // kleur toekennen
  ctx.fillRect(Spr2x, Spr2y, Spr2formaat, Spr2formaat); // vierkant tekenen
}

function botsing() {
  // test voor botsing.
  var helftHoogteSpr1 = Spr1Formaat / 2;
  var Spr1boven = Spr1PosY - helftHoogteSpr1;
  var Spr1beneden = Spr1PosY + helftHoogteSpr1;
  var Spr1links = Spr1PosX - helftHoogteSpr1;
  var Spr1rechts = Spr1PosX + helftHoogteSpr1;
  var helftGrooteSpr2 = Spr2formaat / 2;
  var Spr2boven = Spr2y - helftGrooteSpr2;
  var Spr2beneden = Spr2y + helftGrooteSpr2;
  var Spr2links = Spr2x - helftGrooteSpr2;
  var Spr2rechts = Spr2x + helftGrooteSpr2;
  if (
    Spr1beneden < Spr2boven ||
    Spr1boven > Spr2beneden ||
    Spr1rechts < Spr2links ||
    Spr1links > Spr2rechts
  ) {
    // niets
  } else {
    crash++;
    Spr2x = 100;
    Spr2y = 100;
    Spr1PosX = MyCanvas.offsetWidth - 100;
    Spr1PosY = MyCanvas.offsetHeight - 100;
    document.getElementById("crash").innerHTML = "Crashes: " + crash;
    sprongSpr2 = tijdVoorWissel;
  }
}
