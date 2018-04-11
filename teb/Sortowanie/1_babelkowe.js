function sortBubble(T){
	var pom;
	for(var j = T.length-1; j>0; j--)
		for(var i = 0; i<j; i++)
			if(T[i] > T[i+1]){
				pom = T[i];
				T[i] = T[i+1];
				T[i+1] = pom;
			}

}

function wyswietl(t){
	for(var i = 0; i<t.length; i++){
		document.write(t[i]);
		document.write(' ');
	}
}

var tab = [1, 23, 5, 0, 45];

document.write('<h3>Tablica nie posortowana</h3><br>');
wyswietl(tab);
document.write('<br><h3>Tablica posortowana</h3><br>');
sortBubble(tab);
wyswietl(tab);
