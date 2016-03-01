"use strict";

let theHero = new Gauntlet.Combatants.Human();

$(document).ready(function() {

// when 'Select a Class' is clicked 
// create a new 'Hero' object with the Name from the Text input field
// this new object will be the user character

	$("a#select-class").click(function() {
		theHero.playerName = $("input#player-name").val();
		console.log("name", theHero);
	});

	



});