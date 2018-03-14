var elSzer = document.getElementById('szerokosc');
var elWys = document.getElementById('wysokosc');
var elBlok = document.getElementById('blok');
var elKolor = document.getElementById('color');
/*var elLewo = document.getElementById('lewo');*/

elBlok.style.backgroundColor = elKolor.value;
elBlok.style.height = '0px';
elBlok.style.width = '0px';

function rozmiar() {
	let sz = elSzer.value;
	let w = elWys.value;
	elBlok.style.width = sz + 'px';
	elBlok.style.height = w + 'px';
}

function color() {
	elBlok.style.backgroundColor = elKolor.value;
}

/*
elLewo.value = elBlok.offsetLeft
*/

elSzer.addEventListener('change', rozmiar);
elWys.addEventListener('change', rozmiar);
elKolor.addEventListener('change', color);
