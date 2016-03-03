describe("The specs for this app", function() {

	it("should have a function that collects the user input to create a name for theHero.", function () {
	  expect(nameHero).toBeDefined();
	});

	it("should have a function that collects the player's stats for displaying into the dom and use in the damage calc function.", function () {
	  expect(statCompile).toBeDefined();
	});

	it("should have the statCompile function return the combatant with the included attributes needed for battle.", function () {
	  expect(statCompile()).toBe();
	});

  // it("should have a function that calculates the damage value to inflict when attack button is clicked.", function() {
  //   expect(calcDamage).toBeDefined();
  // });

  // it("should return a number value to subtract from enemy's health", function () {
  // 	var newHero = new Gauntlet.Combatants.Human();
  // 	newHero.class = new Gauntlet.Combatant.Warrior();
  // 	newHero.weapon = new BroadSword();
  // 	newHero = statCompile(newHero);
  //   expect(calcDamage(newHero)).toBe();
  // });

});