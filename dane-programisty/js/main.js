$(document).ready(function(){

    $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function(jsonUserData){
        console.log(jsonUserData);

        
        $('button').click(function(){

        let userData = $('button').after('<div>' + jsonUserData.imie + '<br>' + jsonUserData.nazwisko + '<br>' + jsonUserData.zawod + '<br>' + jsonUserData.firma + '<div>').attr('id', 'dane-programisty');

            
        });

    });

});