var canvas = document.getElementById("mijnCanvas"); //in canvas verwijzing naar mijnCanvas in html
var tekst = canvas.getContext("2d"); // koppelt tekst aan 2d omgeving canvas
tekst.font = "20px Arial";
tekst.fillText("Hallo",70,20);

// regel 1,2,4:
//document.getElementById("mijnCanvas").getContext("2d").font = "10px Arial";
//document.getElementById("mijnCanvas").getContext("2d").fillText("test",120,120);

var vierhoek = canvas.getContext("2d"); // volgend object in 2d omgeving 
vierhoek.fillStyle = "#FFFF00"; // kleur van object
vierhoek.fillRect(10,150,40,40); // tekenen vierhoek x,y, breedte, hoogte
