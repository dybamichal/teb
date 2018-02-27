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
