    "use strict"
function outputDOM() {
    $('#heroHeading').html(theHero.playerName);
    $('#enemyHeading').html(theVillian.species + " " + theVillian.class.name);
    $('.intelligence').html("<p>Intelligence:" + theHero.intelligence +"</p>");
    $('.strength').html("<p>Strength:" + theHero.strength +"</p>");
    $('.health').html("<p>Health:" + theHero.health +"</p>");
    $('.dexterity').html("<p>Dexterity:" + theHero.dexterity +"</p>");
    $('.enemyInt').html("Intelligence:" + theVillian.intelligence);
    $('.enemyStr').html("Strength:" + theVillian.strength);
    $('.enemyHP').html("Health:" + theVillian.health);
    $('.enemyDex').html("Dexterity:" + theVillian.dexterity);

};

$("div#attack-button").click(function(){
    theVillian.health = (theVillian.health - calcDamage(theHero));
    theHero.health = (theHero.health - calcDamage(theVillian));

    if (theHero.health <= 0) {
        alert("YOU ARE DEAD!")
    } else if (theVillian.health <= 0) {
        alert("YOU HAVE WON THE BATTLE!")
    };

    outputDOM();
});


