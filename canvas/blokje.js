var MyCanvas = document.getElementById("MyCanvas"); // koppeling naar Canvas
var ctx = MyCanvas.getContext("2d"); // koppelen aan 2d modus

// variabelen definieren
var Spr1PosX = 50;
var Spr1PosY = 50;
var Spr1Formaat = 40;
var Spr2x = 200;
var Spr2y = 200;
var Spr2formaat = 30;
var ingedrukteToets = []; //in[0] = false; in[1] = true;

document.addEventListener("keydown", function (uitlezen) {
  ingedrukteToets = ingedrukteToets || [];
  ingedrukteToets[uitlezen.keyCode] = true;
})
document.addEventListener("keyup", function (uitlezen) {
  ingedrukteToets[uitlezen.keyCode] = false;
})

setInterval(speelVeldUpdate, 5);

function speelVeldUpdate() {
  if (ingedrukteToets && ingedrukteToets[38]) { // pijl omhoog
    Spr1PosY--;
  }
  if (ingedrukteToets && ingedrukteToets[40]) { // pijl beneden
    Spr1PosY++;
  }
  if (ingedrukteToets && ingedrukteToets[39]) {
    Spr1PosX++;
  }
  if (ingedrukteToets && ingedrukteToets[37]) {
    Spr1PosX--;
  }
  // aanroepen diverse functies om beeld te tekenen en voor beweging
  ctx.clearRect(0,0,MyCanvas.offsetWidth, MyCanvas.offsetHeight);
  Spr1();
  Spr2();
  botsing();
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

// Spr2 - schrijf sprite 2
var telSpr2 = 0; // teller
var maxSpr2 = 100; // tot 100
var richtSpr2X = 1; // -1 = links, 0 = midden, 1 = rechts
var richtSpr2Y = 1; // -1 = omhoog, 0 = horiz, 1 = beneden
function Spr2() {
  // na maxSpr2 > richting veranderen
  telSpr2++;
  if (telSpr2 > maxSpr2) {
    telSpr2 = 0;
    richtSpr2X = Math.floor(Math.random()*3)-1; // 0,1,2 -> -1, 0, 1
    richtSpr2Y = Math.floor(Math.random()*3)-1; 
  }
  // positie veranderen
  Spr2x += richtSpr2X;
  Spr2y += richtSpr2Y;
  // testen op rand
  if (Spr2x<0) {richtSpr2X = 1;}
  if (Spr2x>MyCanvas.offsetWidth-Spr2formaat) {richtSpr2X = -1;}
  if (Spr2y<0) {richtSpr2Y = 1;}
  if (Spr2y>MyCanvas.offsetHeight-Spr2formaat) {richtSpr2Y = -1;}
  ctx.fillStyle = "red";
  ctx.fillRect(Spr2x, Spr2y, Spr2formaat, Spr2formaat);
}

var crash = 0;
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
    Spr1beneden < Spr2boven || // randen boven/onder
    Spr1boven > Spr2beneden ||
    Spr1rechts < Spr2links || // randen links/recht
    Spr1links > Spr2rechts
  ) {
    // niets doen als ze elkaar niet raken
  } else {
    crash++;
    document.getElementById("crash").innerHTML = "Crashes: " + crash;
    Spr1PosX=50; Spr1PosY = 50;
    Spr2x = 200; Spr2y = 200;
  }   
}