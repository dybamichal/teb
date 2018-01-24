var a = 10, b = "5a";
var wynik = a + b;

//alert(wynik);
//alert(a + b);
console.log("tekst");
console.log(a); //10
console.log(typeof(a)); //number
console.log(typeof(b)); //string
console.log(typeof(wynik)); //string
console.trace();

var _zmienna1 = 10;

//var 3liczba = 10; //błędna nazwa zmiennej

var zmiennaZmiennoprzecinkowa = 2.5;
console.log(zmiennaZmiennoprzecinkowa);
console.log(typeof(zmiennaZmiennoprzecinkowa)); //number


//bool
var prawda = true;
console.log(typeof(prawda)); //boolean

//string
var tekst = "Janusz";
console.log(typeof(tekst));

//undefined
var inna;
console.log(inna);
console.log(typeof(inna));

//object
var tab = ["aqua","brązowy"];
console.log(tab);
console.log(typeof(tab)); //object

////////////////////////////////////////////////////////
/*

//var liczba = prompt("Podaj liczbę");
var liczba1 = prompt("Podaj liczbę", "liczba 1");
var liczba2 = prompt("Podaj liczbę", "liczba 2");
var suma = liczba1 + liczba2; //konkatenacja stringów

/*
console.log(typeof(liczba1));
console.log(typeof(liczba2));
console.log(suma);
*/

/*
//liczba1 = parseInt(liczba1);
//liczba2 = parseInt(liczba2);

var suma1 = liczba1 + liczba2; //po konwersji na wartość number
console.log(suma1);
Konwerscja na liczby całkowite
*/

/*liczba1 = parseFloat(liczba1);
liczba2 = parseFloat(liczba2);

var suma1 = liczba1 + liczba2;
console.log(suma1);
console.log(typeof(suma1));
*/

////////////////////////////////////////////////////////

//zad.1

/*
Użytkownik podaje z klawiatury długość boku kwadratu
wyświetl na ekranie w formacie "długość boku wynosi:...cm" "Pole kwadratu wynosi:...cm2"
*/

var kwadrat = prompt("Podaj długość boku kwadratu", "np.: 5");

var pole;

kwadrat = parseFloat(kwadrat);
pole = kwadrat * kwadrat;

document.write("Długość boku kwadratu wynosi: "+kwadrat+"cm" + "<br>");

document.write("Pole kwadratu wynosi: "+pole+"cm<sup>2</sup>");

//zadanie domowe

//Napisz program obliczający pole trójkąta!!!!
