var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ctx2 = canvas.getContext("2d");
ctx.font = "20px Arial";
ctx.fillText("Hallo!", 70,70);
ctx2.fillStyle = "#00FF00";
ctx2.fillRect(10,10,180,20);