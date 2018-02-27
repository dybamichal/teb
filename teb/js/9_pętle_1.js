/*var x = 0;
var y = 0;
var wynik;

while(x>=y){

    x = Number(prompt('Podaj x: '));
    y = Number(prompt('Podaj y: '));

}
console.log('x='+x);
console.log('y='+y);
wynik = x + y;
console.log('x + y =' + wynik);*/

/*var wiek;

do{
    wiek = prompt('Podaj wiek');
    if(wiek >= 18){
        document.write('<a href="http://wp.pl">wp.pl</a>')
    }
}while(wiek <18)*/

var haslo1 = 'qwerty';
var proba = 0;
var haslo2;

do{
    haslo2 = prompt('Podaj haslo');
    proba++;

}while(proba <3 && haslo1!=haslo2)

if(haslo1==haslo2){
    alert('Podales prawidlowe haslo');
}else if(proba == 3){
    alert('Za duzo prob zgadniecia hasla');}
}
