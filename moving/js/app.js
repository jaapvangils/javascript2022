var redBlock = document.getElementById('red');
var greenBlock = document.getElementById('green');
var blueBlock = document.getElementById('blue');
var purpleBlock = document.getElementById('purple');

var moved = false;

function move() {
  if (moved) {
    moved = false;
    redBlock.style.left = '75vw';
    greenBlock.style.left = '50vw';
    blueBlock.style.left = '25vw';
    purpleBlock.style.left = '0vw';
  } else {
    moved = true;
    redBlock.style.left = '0vw'
    greenBlock.style.left = '25vw';
    blueBlock.style.left = '50vw';
    purpleBlock.style.left = '75vw';
  }
}

setInterval(move, 4000);