//we maken een canvas met 800x600 en voegen toe aan de html pagina
let canvas = document.createElement('canvas');
let ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;
document.body.appendChild(canvas);

ctx.beginPath(); // start met tekenen
ctx.rect(20, 20, 150, 100); // teken een vierhoek
ctx.stroke(); //schrijf de tekening weg