"use strict";


let theHero = new Gauntlet.Combatants.Human();
let theVillian = new Gauntlet.Combatants.Orc();
theVillian.generateClass();
theVillian.setWeapon(new BroadSword());
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


// weapon select

$("section#weapon-select").click(function(){
	addWeapon(event.target.closest(".card__button"), theHero);
});


// final stat compile

$("div#battle-start").click(function(){
	console.log("before stats", theHero);
	console.log("before bad", theVillian);
	theHero = statCompile(theHero);
	theVillian = statCompile(theVillian);
	console.log("after stats", theHero);
	console.log("after bad", theVillian);
	outputDOM();
});













