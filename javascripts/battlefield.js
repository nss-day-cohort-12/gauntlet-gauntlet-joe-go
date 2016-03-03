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

    if (theVillian.health <= 0) {
        alert("YOU HAVE WON THE BATTLE!");
        $('.anchorAttack').addClass('disabled');
        $('#attack-button').hide();
        $('#startOverBtn').show();
    } else if (theHero.health <= 0) {
        alert("YOU ARE DEAD!")
        $('.anchorAttack').addClass('disabled');
        $('#attack-button').hide();
        $('#startOverBtn').show();
    };
    outputDOM();
});

$("#startOverBtn").click(function(e) {
    location.reload();
});


