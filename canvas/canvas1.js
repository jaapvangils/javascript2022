var canvas = document.getElementById("mijnCanvas"); // variabele canvas gevuld met verwijzing 
var ctx = canvas.getContext("2d"); // ctx gevuld met toevoeging 2d
var vierhoek = canvas.getContext("2d"); // vierhoek ook naar de 2d omgeving verwijzen

// tekst schrijven in canvas
ctx.font = "20px Arial"; // toekennen font aan object ctx
ctx.fillText("Hallo",80,180); // 

vierhoek.fillStyle = "#DD00DD";
vierhoek.fillRect(10,10, 180, 40);



// alternatief voor regel 1-6
//document.getElementById("mijnCanvas").getContext("2d").font = "20px Arial";
//document.getElementById("mijnCanvas").getContext("2d").fillText("tekst",10,10);