var telKliks = 0; // varibele op 0

function kleuraanpassen()
{
  telKliks++; // teller + 1
  // terug schrijven op pagina
  document.getElementById("teller").innerHTML = "aantal: " + telKliks;

  // inlezen van verwijzingen naar de <p> in de html
  const AllePs = document.getElementsByTagName("p");
  
  // loop waarin alle p's in de html worden veranderd van kleur
  for (var i = 0; i < AllePs.length; i++)
  {
    AllePs[i].style.color = randomGenerator();
  }
}

// randomgenerator om string met kleurcode te genereren b.v. #A3F1D0
function randomGenerator() {
  const lHex = '0123456789ABCDEF';
  var kleur ="#";
  for (var i = 1; i < 7; i++) {
    kleur += lHex[Math.floor(Math.random() * 16 ) ];
  }
  return kleur;
}