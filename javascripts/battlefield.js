    "use strict"
function outputDOM() {
    $('.intelligence').append("Intelligence:" + theHero.intelligence);
    $('.strength').append("Strength:" + theHero.strength);
    $('.health').append("Health:" + theHero.health);
    $('.dexterity').append("Dexterity:" + theHero.dexterity);
    $('.enemyInt').append("Intelligence:" + theVillian.intelligence);
    $('.enemyStr').append("Strength:" + theVillian.strength);
    $('.enemyHP').append("Health:" + theVillian.health);
    $('.enemyDex').append("Dexterity:" + theVillian.dexterity);
};
