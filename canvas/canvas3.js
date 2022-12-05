var mijnObject; // variabele voor object 1
var nwCanvas; // variabele voor een te creeren canvas

//functie canvas maken
function startCanvas() {
    nwCanvas = document.createElement("canvas"); // nwCanvas wordt een canvas element (tag)
    nwCanvas.width = 480; // breedte
    nwCanvas.height = 360; //hoogte
    document.body.insertBefore(nwCanvas, document.body.childNodes[0]); // plaatsen element in body
    mijnObject = new objectMaker(30,30, "red", 20, 120); // object creeren
}

function objectMaker(breedte, hoogte, kleur, x, y) {
  this.breedte = breedte;
  this.hoogte = hoogte;
  this.x = x;
  this.y = y;
  obj = nwCanvas.getContext("2d");
  obj.fillStyle = kleur;
  obj.fillRect(this.x, this.y, this.breedte, this.hoogte);

}