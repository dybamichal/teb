//tworzenie tablicy za pomoca literalu tablicy

var kolory = ['bialy', 'niebieski', 'czerwony'];
var elKolor = document.getElementById('kolor');
var elPrzycisk = document.getElementById('przycisk');
function dodajKolor(){
    if(elKolor.value != "" && kolory.indexOf(elKolor.value)==-1){
    kolory.push(elKolor.value);
    console.log(kolory);}else{alert('wpisz kolor');}

}
elPrzycisk.addEventListener('click', dodajKolor);
console.log(kolory[0]);
console.log(kolory.length);
console.log(kolory[kolory.length-1]);


//tworzenie tablicy za pomoca konstruktora

var samochody = new Array('BMW', 'Audi', "Fiat");
console.log(samochody);

var tab = new Array(
new Array('Jan', 'Kowal', 'Poznan'),
new Array('Anna', 'Nowak', 'Gniezno'),
new Array('Pawel', 'Kowal', 'Gniezno')
);

console.log(tab);
console.log(tab[2][0]);


var imiona = ['Janusz', 'Adrian', 'Andrzej', 'Zenon'];
console.log(imiona);


var sortImie = imiona.sort();
console.log(sortImie);

var rsortImie = sortImie.reverse();
console.log(rsortImie);

//usuniecie elementu z tablicy
rsortImie.pop();
console.log(rsortImie);

rsortImie.push('Wiki');
console.log(rsortImie);

//sprawdzenie czy istnieje element w tablicy
console.log(rsortImie.indexOf('Zenon'));
console.log(rsortImie.indexOf('zenon'));

//////////////////////////////////////sortowanie tablicy z liczbami

var liczby = [2, 1, 20, 190, 100000, 9];
console.log(liczby);
var sortLiczby = liczby.sort();
console.log(sortLiczby);
var sortPrawidloweLiczby = liczby.sort(function(a,b){return(a-b);});
console.log(sortPrawidloweLiczby);
