"use strict";

function statCompile (combatant) {
	combatant.health = (combatant.health + combatant.class.healthBonus);
	combatant.strength = (combatant.strength + combatant.class.strengthBonus);
	combatant.intelligence = (combatant.intelligence + combatant.class.intelligenceBonus);
	combatant.dexterity = (combatant.dexterity + combatant.class.dexterityBonus);
	// console.log("Here he is, folks", theHero);
	return combatant;
};