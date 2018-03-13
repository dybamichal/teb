var elImie = document.getElementById('imie');
var elBlad = document.getElementById('blad');
var elKolor = document.getElementById('kolor');
var elBlokImie = document.getElementById('blokimie');
var elBlokNazwisko = document.getElementById('bloknazwisko');
function sprawdz(){
 if(this.value.length <2){
  let kolor = elKolor.value;
		elBlad.style.color = kolor;
		elBlad.innerHTML = "Bledne dane";
 }else{
		elBlad.innerHTML = '';
	}

}
function witaj(){
	alert('WItaj na tej stronie');

}

function wyjscie(){
	alert('Nie opuszczaj nas :c');

}

function zmienImie(){
 	let kolor = elKolor.value;
	 elBlokImie.style.color = kolor;
	 elBlokImie.innerHTML = 'imie';
}


elImie.addEventListener('blur', sprawdz);
window.addEventListener('load', witaj);
window.addEventListener('unload', wyjscie);
elBlokImie.addEventListener('mouseover', zmienImie);
