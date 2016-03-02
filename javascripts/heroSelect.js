"use strict";


$(document).ready(function() {

let theHero = new Gauntlet.Combatants.Human();
// when 'Select a Class' is clicked 
// create a new 'Hero' object with the Name from the Text input field
// this new object will be the user character

	$("a#select-class").click(function() {
		theHero = nameHero();
	});

// capture the Player's name
	function nameHero() {
		theHero.playerName = $("input#player-name").val();
		console.log("name", theHero);
		return theHero;
	};

// when a class is selected, add it to the hero object
	$("div.class-contain").click(function(){
		addClass(event.target.closest(".card__button"));
	});


// Which class was clicked?
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


	// weapon select


	$("section#weapon-select").click(function(){
		addWeapon(event.target.closest(".card__button"), theHero);
	});

	$("div#test").click(function(){
		console.log("the hero", theHero);
	})



});