var elImie = document.getElementById('imie');
var elBlad = document.getElementById('blad');
var elKolor = document.getElementById('kolor');
function sprawdz(){
 if(this.value.length <2){
  let kolor = elKolor.value;
		elBlad.style.color = kolor;
		elBlad.innerHTML = "Bledne dane";
 }else{
		elBlad.innerHTML = '';
	}

}

elImie.addEventListener('blur', sprawdz);
