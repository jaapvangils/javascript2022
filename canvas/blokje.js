var MyCanvas = document.getElementById("MyCanvas"); // koppeling naar Canvas
var ctx = MyCanvas.getContext("2d"); // koppelen aan 2d modus

var SpritePositieX = SpriteFormaat; // positie X var
var SpritePositieY = SpriteFormaat; // positie Y var
var SpriteFormaat = 50;
var stapGrootte = 1; // sneldheid van bewegen blokje
var sprongSpr2 = 20;
var tijdVoorWissel = 250;
var richtingSpr2x = 1;
var richtingSpr2y = 1;
var Spr2formaat = 40;
var ingedrukteToets = [];
var crash = 0;
setInterval(speelVeldUpdate, 5);
var Spr2x = MyCanvas.offsetWidth - Spr2formaat;
var Spr2y = MyCanvas.offsetHeight - Spr2formaat;

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
    SpritePositieY -= stapGrootte;
  }
  if (ingedrukteToets && ingedrukteToets[40]) {
    SpritePositieY += stapGrootte;
  }
  if (ingedrukteToets && ingedrukteToets[39]) {
    SpritePositieX += stapGrootte;
  }
  if (ingedrukteToets && ingedrukteToets[37]) {
    SpritePositieX -= stapGrootte;
  }
  //if (ingedrukteToets && ingedrukteToets[32]) { springOmhoog(); // functie spring omhoog }
  tekenSprite();
}
function checkRanden() {
  if (SpritePositieX < 0) {
    SpritePositieX = MyCanvas.offsetWidth - SpriteFormaat;
  }
  if (SpritePositieY < 0) {
    SpritePositieY = MyCanvas.offsetHeight - SpriteFormaat;
  }
  if (SpritePositieX > MyCanvas.offsetWidth - SpriteFormaat) {
    SpritePositieX = 0;
  }
  if (SpritePositieY > MyCanvas.offsetHeight - SpriteFormaat) {
    SpritePositieY = 0;
  }
}

function tekenSprite() {
  ctx.clearRect(0, 0, MyCanvas.offsetWidth, MyCanvas.offsetHeight); // leegmaken
  ctx.fillStyle = "green"; // kleur toekennen
  ctx.fillRect(SpritePositieX, SpritePositieY, SpriteFormaat, SpriteFormaat); // vierkant tekenen

  Spr2();
  botsing();
  checkRanden();
  ctx.fillStyle = "red"; // kleur toekennen
  ctx.fillRect(Spr2x, Spr2y, Spr2formaat, Spr2formaat); // vierkant tekenen
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
}

function botsing() {
  // test voor botsing.
  var helftHoogteSprite = SpriteFormaat / 2;
  var Spr1boven = SpritePositieY - helftHoogteSprite;
  var Spr1beneden = SpritePositieY + helftHoogteSprite;
  var Spr1links = SpritePositieX - helftHoogteSprite;
  var Spr1rechts = SpritePositieX + helftHoogteSprite;
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
    SpritePositieX = MyCanvas.offsetWidth - 100;
    SpritePositieY = MyCanvas.offsetHeight - 100;
    document.getElementById("crash").innerHTML = "Crashes: " + crash;
    sprongSpr2 = tijdVoorWissel;
  }
}
