    "use strict"
function outputDOM() {
    $('.intelligence').append("<p>Intelligence:" + theHero.intelligence +"</p>");
    $('.strength').append("<p>Strength:" + theHero.strength +"</p>");
    $('.health').append("<p>Health:" + theHero.health +"</p>");
    $('.dexterity').append("<p>Dexterity:" + theHero.dexterity +"</p>");
};




$("button#attack-button").click(function(){
	calcDamage(theHero);
	calcDamage(theVillian);
})