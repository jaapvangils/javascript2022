var canvas = document.getElementById("mijnCanvas"); // pointer naar mijnCanvas

var tekst = canvas.getContext("2d"); // in tekst laden van 2d context
tekst.font = "20px Arial"; // font Arial 20px toekennen
tekst.fillText("Hallo",20,20) // tekst schrijven in 2d context in mijnCanvas

// extra object met 4 kant
var vierhoek = canvas.getContext("2d");
vierhoek.fillStyle = "#880088";
vierhoek.fillRect(10,110,180,20);




//document.getElementById("mijnCanvas").getContext("2d").font = "20px Arial";
//document.getElementById("mijnCanvas").getContext("2d").fillText("tekst",80,80);
