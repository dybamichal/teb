var elKod = document.getElementById('kod');
var elLitera = document.getElementById('litera');
var elX = document.getElementById('x');
var elY = document.getElementById('y');

function litera() {
 let kod = event.keyCode;
	elKod.innerHTML = "Kod znaku " + kod;
	switch(kod) {
		case 32:
			kod = 'Spacja';
			break;
		case 8:
			kod = 'BackSpace';
			break;
		case 16:
			kod = 'Shift';
			break;
		case 17:
			kod = 'CTRL';
			break;
		case 18:
			kod = 'Option';
			break;
		case 20:
			kod = 'CAPS LOCK';
			break;
		case 255:
			kod = 'fn';
			break;
	}
	elKod.innerHTML = 'Kod znaku ' + kod;
}
function pozycja() {
	elX.value = event.screenX;
	elY.value = event.screenY;

}

elLitera.addEventListener('keyup', litera);
window.addEventListener('mousemove', pozycja);
