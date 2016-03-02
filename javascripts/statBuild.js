"use strict";

function statCompile (combatant) {
	combatant.health = (combatant.health + combatant.class.healthBonus);
	combatant.strength = (combatant.strength + combatant.class.strengthBonus);
	combatant.intelligence = (combatant.intelligence + combatant.class.intelligenceBonus);
	// add dex later
	// console.log("Here he is, folks", theHero);
	return combatant;
};