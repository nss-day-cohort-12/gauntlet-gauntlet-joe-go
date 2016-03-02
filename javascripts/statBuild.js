"use strict";

function statCompile() {
	theHero.health = (theHero.health + theHero.class.healthBonus);
	theHero.strength = (theHero.strength + theHero.class.strengthBonus);
	theHero.intelligence = (theHero.intelligence + theHero.class.intelligenceBonus);
	// add dex later
	// console.log("Here he is, folks", theHero);

	theVillian.health = (theVillian.health + theVillian.class.healthBonus);
	theVillian.strength = (theVillian.strength + theVillian.class.strengthBonus);
	theVillian.intelligence = (theVillian.intelligence + theVillian.class.intelligenceBonus);
};