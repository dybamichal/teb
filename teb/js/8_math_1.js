/*var pi = Math.PI;
//console.log(pi);
var promien = document.getElementById("promien");
var komunikat = document.getElementById("komunikat");
var przycisk = document.getElementById("przycisk");

function poleKola(){
var potega;
var pole;
    pole = pi*promien
    potega = Math.pow(pole*2);
    komunikat.innerHTML = potega;
}

przycisk.addEventListener('click', poleKola);*/





var pi = Math.PI;
var elPromien = document.getElementById("promien");
var elPrzycisk = document.getElementById("przycisk");
var elKomunikat = document.getElementById("komunikat");
var pole;

function poleKola(){

pole = pi*Math.pow(elPromien.value,2);
elKomunikat.innerHTML = "Pole koła wynosi: "+ pole + "cm<sup>2</sup>";

}
elPrzycisk.onclick = poleKola;
