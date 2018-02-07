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
document.write("<br>");
