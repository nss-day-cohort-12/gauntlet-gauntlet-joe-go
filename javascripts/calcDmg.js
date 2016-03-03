"use strict";

function calcDamage(combatant) {
	console.log("tha guy", combatant.class.archetype);


	let statBonus = 0;
	let damage = 0;

	switch (combatant.class.archetype) {
		case "fighter":
		// calc fighter damage
			statBonus = (combatant.strength * .01);
			damage = (combatant.weapon.damage + (combatant.weapon.damage * statBonus));
			break;
		case "mage":
		// calc mage damage
			statBonus = (combatant.intelligence * .01);
			damage = (combatant.weapon.damage + (combatant.weapon.damage * statBonus));
			break;
		case "stealth":
		// calc stealth damage
			statBonus = (combatant.dexterity * .01);
			damage = (combatant.weapon.damage + (combatant.weapon.damage * statBonus));
			break;
		default:
			break;
	}

	console.log("damage", parseInt(damage));
	
	return parseInt(damage);

}