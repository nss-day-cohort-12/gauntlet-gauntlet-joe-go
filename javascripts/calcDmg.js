"use strict";

function calcDamage(combatant) {

	let statBonus = 0;
	let damage = 0;
	let critChance = Math.floor((Math.random() * 20) + 1);

	switch (combatant.class.archetype) {
		case "fighter":
		// calc fighter damage
			statBonus = (combatant.strength * .01);
			damage = (combatant.weapon.damage + (combatant.weapon.damage * statBonus));
			if (critChance >= 18){
				alert(`${combatant.playerName} HAS CRITICALLY HIT`);
				damage = (damage * 1.5);
			}
			break;
		case "mage":
		// calc mage damage
			statBonus = (combatant.intelligence * .01);
			damage = (combatant.weapon.damage + (combatant.weapon.damage * statBonus));
			if (critChance === 20){
				alert(`${combatant.playerName} HAS CRITICALLY HIT`);
				damage = (damage * 2);
			}
			break;
		case "stealth":
		// calc stealth damage
			statBonus = (combatant.dexterity * .01);
			damage = (combatant.weapon.damage + (combatant.weapon.damage * statBonus));
			if (critChance >= 13){
				alert(`${combatant.playerName} HAS CRITICALLY HIT`);
				damage = (damage * 3);
			}
			break;
		default:
			break;
	}

	console.log("damage", parseInt(damage));
	
	return parseInt(damage);

}