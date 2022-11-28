//initieren variabele buiten de functies.
var telkliks = 0;

// functie om een random kleur te fabriceren op basis van 
// hexadecimale code (#000000-#FFFFFF)
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// functie om alle kleuren van de elementen 'p' aan te passen
function kleuraanpassen() {
  // alle p regels komen in de const (array)
  const myCollection = document.getElementsByTagName("p");
  // met een for lus van 0 tot het aantal "p"'s in de tekst
  for (let i = 0; i < myCollection.length; i++) {
    myCollection[i].style.color = getRandomColor();
  }
  // optellen van het aantal kliks/hovers
  telkliks++;
  // weergeven van de uitkomst van de teller op de html pagina, gekoppeld aan een ID
  document.getElementById("teller").innerHTML="Aantal keer geklikt:" + telkliks;
}
