"use strict";

function addWeapon(theClass, theHero) {
	// console.log("class", theClass.id);
	switch (theClass.id){
		case "dagger":
			theHero.weapon = new Dagger();
			break;
		case "broadsword":
			theHero.weapon = new BroadSword();
			break;
		case "waraxe":
			theHero.weapon = new WarAxe();
			break;
		case "fireball":
			theHero.weapon = new Gauntlet.SpellBook.Fireball();
			break;
		case "lightningbolt":
			theHero.weapon = new Gauntlet.SpellBook.LightningBolt();
			break;
		case "acidsplash":
			theHero.weapon = new Gauntlet.SpellBook.AcidSplash();
			break;
		default:
			break;						
	};

console.log("test", theHero);
};















