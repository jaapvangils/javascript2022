const element = document.getElementById("interval");
alert("aan")

function melding() {
    setInterval(tekstinscherm, 1000);   
}

function tekstinscherm() {
    element.innerHTML += "Hallo ";
}