var tekst = 'JanuSz';
var regula = /janusz/;
regula = /janusz/;
regula = /^janusz$/;

regula = /[a]/;
regula = /[J]/;
regula = /[0]/;
regula = /[0-9]/;
regula = /[a-z]/;
regula = /[A-Z]/;
regula = /[A-Z][a-z][ąśćżźółńę]/;

regula = /\s/;
regula = /\S/;
regula = /[a-z]\s/;
regula = /[a-z]\S/;

//mail
regula = /[a-z]+@/;

regula = /^mąk[a]?@/;

regula = /[a]{1}/;
regula = /[a]{2}/;
regula = /[a]{2,4}/;
regula = /[a-z]{2,}/;
regula = /[a-z]{2,}$/;

regula = /\//;
regula = /\s/;
regula = /\S/;
regula = /./;
regula = /../;
regula = /.../;
regula = /\./;
regula = /$/;
regula = /\.[a-z]{2,3}$/;

regula = /\w/;
regula = /\W/;

regula = /\d/;
regula = /\D/;

regula = /(test)/;
regula = /(test){2}/;

var kodPocztowy = /^\d{2}-\d{3}$/;

var sprawdz = regula.test(tekst);
var sprawdzKod = kodPocztowy.test(kod);


//*************************************************************************************************************************************************


var muzyka = 'tiesto.mp3 plik@mp3 arkusz.csv szkola.mp3 tekst.mp3';

//var mp3 = /\.mp3$/;//
var mp3 = /\w+\.mp3/g;
var test = mp3.test(muzyka);
var testMatch = muzyka.match(mp3);
var iloscUtworow = testMatch.length;

document.write('<ol>');
for(var i=0; i<iloscUtworow; i++){
    document.write('<li>' + testMatch[i] + '</li>');
}
document.write('</ol>');

console.log(sprawdz);
console.log(sprawdzKod);
console.log(test);
console.log(testMatch);
console.log('ilość utworów:' + iloscUtworow);