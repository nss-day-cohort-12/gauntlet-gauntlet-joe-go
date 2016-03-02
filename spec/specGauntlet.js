describe("The specs for this app", function() {

  it("should have a function that calculates the damage value to inflict when attack button is clicked.", function() {
    expect(calcDamage).toBeDefined();
  });

  it("should return a number value to subtract from enemy's health", function () {
  	var newHero = new Gauntlet.Combatants.Human();
  	newHero.class = new Gauntlet.Combatant.Warrior();
  	newHero.weapon = new BroadSword();
  	newHero = statCompile(newHero);
    expect(calcDamage(newHero)).toBe();
  });

});