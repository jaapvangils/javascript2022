var telkliks = 0;
alert("start");

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function myFunction() {
  const myCollection = document.getElementsByTagName("p");
  for (let i = 0; i < myCollection.length; i++) {
    myCollection[i].style.color = getRandomColor();
  }
  telkliks++;
  document.getElementById("teller").innerHTML="Aantal keer geklikt:" + telkliks;
}
