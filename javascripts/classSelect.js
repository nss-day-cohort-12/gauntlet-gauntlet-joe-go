"use strict";

function addClass (theClass) {
	console.log("class", theClass.id);
	switch (theClass.id){
		case "warrior":
			theHero.class = new Gauntlet.GuildHall.Warrior();
			break;
		case "valkyrie":
			theHero.class = new Gauntlet.GuildHall.Valkyrie();
			break;
		case "berserker":
			theHero.class = new Gauntlet.GuildHall.Berserker();
			break;
		case "monk":
			theHero.class = new Gauntlet.GuildHall.Monk();
			break;
		case "shaman":
			theHero.class = new Gauntlet.GuildHall.Shaman();
			break;
		case "wizard":
			theHero.class = new Gauntlet.GuildHall.Wizard();
			break;
		case "conjurer":
			theHero.class = new Gauntlet.GuildHall.Conjurer();
			break;
		case "sorcerer":
			theHero.class = new Gauntlet.GuildHall.Sorcerer();
			break;
		default:
			break;						
	};

	console.log("test", theHero);
};