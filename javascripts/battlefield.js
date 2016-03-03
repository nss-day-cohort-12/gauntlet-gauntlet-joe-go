    "use strict"
function outputDOM() {

    $('.intelligence').append("<p>Intelligence:" + theHero.intelligence +"</p>");
    $('.strength').append("<p>Strength:" + theHero.strength +"</p>");
    $('.health').append("<p>Health:" + theHero.health +"</p>");
    $('.dexterity').append("<p>Dexterity:" + theHero.dexterity +"</p>");





    $('.intelligence').append("Intelligence:" + theHero.intelligence);
    $('.strength').append("Strength:" + theHero.strength);
    $('.health').append("Health:" + theHero.health);
    $('.dexterity').append("Dexterity:" + theHero.dexterity);
    $('.enemyInt').append("Intelligence:" + theVillian.intelligence);
    $('.enemyStr').append("Strength:" + theVillian.strength);
    $('.enemyHP').append("Health:" + theVillian.health);
    $('.enemyDex').append("Dexterity:" + theVillian.dexterity);

};

$("button#attack-button").click(function(){
	calcDamage(theHero);
	calcDamage(theVillian);
});
