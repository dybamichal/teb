/*
for(var i = 0; i<=10; i++){
    document.write(i + " ");
} //przykładowa, pętla for
document.write("<br><br>");

//zadanko - wyświetl liczby od 50 do 5, oddzielone przecinkiem i spacją
for(var j=50; j>=5; j--){
    if(j==5){
        document.write(j);
    }else{
        document.write(j + ", ");
    }
}
document.write("<br><br>");

//wypisz liczby od 10, do 100 zwiększaj każdą z nich o 5 w wyświetleniu pomiń wartości 30, 55 oraz 75
for(var k=10; k<=100; k=k+5){
    if(k!=30 && k!=55 && k!=75){
        document.write(k + ", ");
    }
}
*/

//w formularzu podaję, jakie liczby mają być wyświetlone, tzn wartość początkowa i końcową wartośći mają być rosnące i zwiększane o 1
var elPoczatek = document.getElementById("poczatek");
var elKoniec = document.getElementById("koniec");
var elPrzycisk = document.getElementById("przycisk");
var elKomunikat = document.getElementById("komunikat");
var m;
var tekstk = "";

function wyswietl(){
    x = elPoczatek.value;
    x = parseInt(x);
    y = elKoniec.value;
    y = parseInt(y);
    for(m = x; m<=y; m++){
        tekstk += m + ", ";
}
elKomunikat.textContent = "";
elKomunikat.textContent = tekstk;
}

elPrzycisk.addEventListener('click', wyswietl);
