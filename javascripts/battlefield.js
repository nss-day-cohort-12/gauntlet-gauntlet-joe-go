    "use strict"
function outputDOM() {
    $('#heroHeading').html(theHero.playerName);
    $('#enemyHeading').html(theVillain.playerName);
    $('.intelligence').html("<p>Intelligence:" + theHero.intelligence +"</p>");
    $('.strength').html("<p>Strength:" + theHero.strength +"</p>");
    $('.health').html("<p>Health:" + theHero.health +"</p>");
    $('.dexterity').html("<p>Dexterity:" + theHero.dexterity +"</p>");
    $('.enemyInt').html("Intelligence:" + theVillain.intelligence);
    $('.enemyStr').html("Strength:" + theVillain.strength);
    $('.enemyHP').html("Health:" + theVillain.health);
    $('.enemyDex').html("Dexterity:" + theVillain.dexterity);

};

function actionToDOM (heroDmg, villainDmg) {
    $('.actionOutput').append(`<p style="color: blue;"><span>${theHero.playerName} attacks ${theVillain.playerName} with the ${theHero.weapon.toString()} for ${heroDmg} damage.</span></p><br><p style="color: red;"><span>${theVillain.playerName} attacks ${theHero.playerName} with the ${theVillain.weapon.toString()} for ${villainDmg} damage.</span></p><br>`);
};

$("div#attack-button").click(function(){
    let heroDamage = calcDamage(theHero);
    let villainDamage = calcDamage(theVillain);
    theVillain.health = (theVillain.health - heroDamage);
    theHero.health = (theHero.health - villainDamage);

    if (theVillain.health <= 0) {
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
    actionToDOM(heroDamage, villainDamage);
});

$("#startOverBtn").click(function(e) {
    location.reload();
});


