// teller voor aantal keer geklikt
var telkliks = 0; // teller op 0

function getRandomColor()
{
    var letters = '0123456789ABCDEF'; // array waar de kleurcode uit gehaald word
    var color = "#"; // start van de string color

    for ( var n = 0; n < 6; n++ )
    {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function kleuraanpassen()
{   
    const allePs = document.getElementsByTagName("p"); // uitlezen alle <p> op de site

    // alle <p> van een ander kleur voorzien
    for (let i = 0; i < allePs.length; i++)
    {
        allePs[i].style.color = getRandomColor();
    }

    telkliks++; // optellen 1 bij telkliks
    document.getElementById("teller").innerHTML = "Aantal keer geklikt: " + telkliks;
}