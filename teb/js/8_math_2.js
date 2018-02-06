/*var pi = Math.PI;
//var x = prompt("Podaj wartość: ");
console.log(Math.sqrt(x));
var a = 13.2;
var b = 28.5;
var c = 1;
var d = 3;
var e = 0.5;
var f = 1.1;

//minimum

var min = Math.min(a,b,c,d,e,f);
console.log("Minimum: "+ min);

//maximum
var max = Math.max(a,b,c,d,e,f);
console.log("Maximum: "+ max);

//zaokrąglenie
var g = 12.45;
var zaokroglenie = Math.round(g);
console.log("Zaokroglenie: "+ zaokroglenie);

//wartość bezwzględna ABS
//zaokrąglenie round
//zaokrąglenie w dół floor

var x = -56;
var y = -13.1;
var z = 14.9;

document.write("<br>" + Math.abs(x)+ "<br>"); //56
document.write("<br>" + Math.abs(y)+ "<br>"); //13.1
document.write("<br>" + Math.abs(z)+ "<br><br>"); //14.9

document.write("<br>" + Math.round(x)+ "<br>"); //-56
document.write("<br>" + Math.round(y)+ "<br>"); //-13
document.write("<br>" + Math.round(z)+ "<br><br>"); //15

document.write("<br>" + Math.floor(x)+ "<br>"); //-56
document.write("<br>" + Math.floor(y)+ "<br>"); //-14
document.write("<br>" + Math.floor(z)+ "<br><br>"); //14

//potegowanie
var p = Math.pow(2,10);
console.log(p); //1024

//losowanie
var losuj = Math.random();
console.log(losuj);

//miejsca po przecinku
var k = 10.1234567890;
k = k.toFixed(4);
console.log(k);

var j = 10.1234567890;
console.log(typeof(j)); //number
j = j.toPrecision(4);
console.log(j);

//losuj liczby z przedziału <o; 1o>
var l = Math.floor(Math.random()*11);
console.log(l);

//losuj liczbę od 1o do 2o

var o = Math.floor(Math.random()*11+10);
console.log(o);

//losuj liczbę z przedziału 31, 5o
var ol = Math.floor(Math.random()*20 + 31);
console.log(ol);

//zad.1 uzytkownik zaznacza jedno z 2 pol radio 1 pole - obwod                      2 pole - pole kwadratu*/

var bok = document.getElementById("bok");
var obwod = document.getElementById("obwod");
var pole = document.getElementById("pole");
var przycisk = document.getElementById("przycisk");
var komunikat = document.getElementById("komunikat");

function oblicz(){
if(obwod.checked){
var obwd = 4* bok.value;
obwd = obwd.toFixed(2);
komunikat.innerHTML = "Obwód kwadratu wynosi: " + obwod;
}

}
