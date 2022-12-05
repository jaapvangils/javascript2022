var mijnObject; // variabele voor object 1
var nwCanvas; // variabele voor een te creeren canvas
var nwContext;
var ObjX = 10;
var ObjY = 10;
var ObjKleur = "red";
var ObjH = 10;
var ObjB = 10;

var teller;

//functie canvas maken
function startCanvas() {
    nwCanvas = document.getElementById("blokCanvas"); // nwCanvas wordt een canvas element (tag)
    nwCanvas.width = 480; // breedte
    nwCanvas.height = 360; //hoogte
    nwContext = nwCanvas.getContext("2d");
    
    mijnObject = new objectMaker(ObjB,ObjH, ObjKleur, ObjX,ObjY); // object creeren - X en Y aangepast objX,objY, ObjKleur, ObjB, ObjH

    setInterval(bewegendObj, 500);
  }

function bewegendObj ()
{
  nwContext.clearRect(0,0, nwCanvas.canvas.width, nwCanvas.canvas.height);
  window.addEventListener('keydown', function (invoer) {

    if (invoer.keys[37]) {ObjX -= 1; alert("omhoog"); } //links
    if (invoer.keys[39]) {ObjX += 1; } // rechts
    if (invoer.keys[38]) {ObjY -= 1; } // omhoog
    if (invoer.keys[40]) {ObjY += 1; } // omlaag
    mijnObject.x = ObjX;
    mijnObject.y = ObjY;
  } );
  teller++;
  document.getElementById("teller").innerHTML=teller;
}

function objectMaker(breedte, hoogte, kleur, x, y) {
  this.breedte = breedte;
  this.hoogte = hoogte;
  this.x = x;
  this.y = y;
  nwContext.fillStyle = kleur;
  nwContext.fillRect(this.x, this.y, this.breedte, this.hoogte);
}