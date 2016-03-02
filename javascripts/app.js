"use strict";

/*
  Test code to generate a human player and an orc 
*/

var warrior = new Gauntlet.Combatants.Human();
warrior.setWeapon(new WarAxe());
warrior.generateClass();  // This will be used for "Surprise me" option
console.log(warrior.toString());

var orc = new Gauntlet.Combatants.Orc();
orc.generateClass();
orc.setWeapon(new BroadSword());
console.log(orc.toString());

$(document).ready(function() {
  /*
    Show the initial view that accepts player name
   */
  $("#player-setup").show();

  /*
    When any button with card__link class is clicked,
    move on to the next view.
   */
  $(".card__link").click(function(e) {
    var nextCard = $(this).attr("next");
    var moveAlong = false;

    switch (nextCard) {
      case "card--class":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--weapon":
        moveAlong = ($("#player-name").val() !== "");
        break;
    }

    if (moveAlong) {
      $(".card").hide();
      $("." + nextCard).show();

      console.log("works");
    }
  });

  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    var previousCard = $(this).attr("previous");
    $(".card").hide();
    $("." + previousCard).show();
  });
  // Adding event listener to defeat your enemies button
  $(".card__link").click(function(e) {
    var nextCard = $(this).attr("next");
    $(".card").hide();
    $("." + nextCard).show();
  });
// When the 'weapon select' button is clicked, show weapons if user is NOT magical, and show Spells if theHero IS magical.
  $('.selectWpnBtn').click(function () {
    if (theHero.class.magical === true) {
      $('.weapon_button').hide();
      $('.spell_button').show();
    } else if (theHero.class.magical === false) {
      $('.weapon_button').show();
      $('.spell_button').hide();
    };
    console.log("theHero", theHero);
  });
});





















