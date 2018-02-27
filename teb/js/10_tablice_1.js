function losowanie(){
    var auta = ['Toyota', 'Mitsubishi', 'Mazda', 'Nissan'];
    var panstwa = ['Japonia', 'Chiny', 'Korea'];
    var miasta = ['Tokyo', 'Osaka', 'Beijing', 'Shenzhen'];

    var losujAuto = Math.floor(Math.random()*auta.length);
    var losujPanstwo = Math.floor(Math.random()*panstwa.length);
    var losujMiasto = Math.floor(Math.random()*miasta.length);

    var wylosowane = auta[losujAuto] + ' ' + panstwa[losujPanstwo] + ' ' + miasta[losujMiasto];
    console.log(wylosowane);


}

losowanie();

var t = ['Janusz', 0, true, 'Anna'];
console.log(t);

for(var i = 0; i<t.length; i++){

//document.write(t[i] + ' ');
document.write(i + 1 + ' element: ' + t[i] + '<br>');

}

//uzytk podaje z lapy w polu numeryczym wartosci ktore sa zapisywane do tablicy, wyswietl wszystkie wartosci z tablicy, wyswietl, ile jest ich lacznie, jaka jest ich suma oraz srednia wartosc z dwoma miejscami po przecinku


var liczba = document.getElementById('liczba');
var przycisk = document.getElementById('przycisk');
var liczby [];

function dodaj(){
alert('sad');
}
przycisk.addEventListener('click', dodaj);
