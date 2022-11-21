var telkliks = 0; // variable teller op 0

// functie om kleur aan te passen
function kleuraanpassen()
{
  telkliks++;
  document.getElementById("teller").innerHTML = "aantal: " + telkliks;

  // kleur <p> aanpassen 

  const AllePs = document.getElementsByTagName("p");

  for (let i = 0; i < AllePs.length; i++) // for loop om alle p's langs te lopen
  {
    AllePs[i].style.color = randomGenerator(); // kleur aanpassen per regel p
  }
}

// random generator voor kleur genereren b.v. #AB1234
function randomGenerator() 
{
  const lettersHex = '0123456789ABCDEF'; // hexadecimale karakters
  var kleur = '#'; // begin van de string met hexadecimale code voor de kleur
  for (var n = 0; n < 6; n++)
  {
    kleur += lettersHex[Math.floor(Math.random() * 16)];
  }
  return kleur;
}


// ALTERNATIEF: Math.floor(Math.random()*255*255*255)