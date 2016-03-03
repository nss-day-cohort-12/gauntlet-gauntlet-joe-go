/*
  TODO: Modularize this code with IIFE or Browserify
 */
var Gauntlet = Gauntlet || {};
Gauntlet.SpellBook = {};


/*
  Base spell function that defines name, damage, damage type
 */
Gauntlet.SpellBook.Spell = function() {
  this.name = "";
  this.damage = 0;
  this.damageType = "";

  this.toString = function() {
    return this.name;
  };
};

/*
  spells cast by magical classes
 */

Gauntlet.SpellBook.Fireball = function() {
  this.name = "fireball";
  this.damage = 20;
  this.damageType = "Fire";
};
Gauntlet.SpellBook.Fireball.prototype = new Gauntlet.SpellBook.Spell();

Gauntlet.SpellBook.LightningBolt = function() {
  this.name = "lightningbolt";
  this.damage = 20;
  this.damageType = "Lightning";
};
Gauntlet.SpellBook.LightningBolt.prototype = new Gauntlet.SpellBook.Spell();

Gauntlet.SpellBook.AcidSplash = function() {
  this.name = "acidsplash";
  this.damage = 20;
  this.damageType = "Poison";
};
Gauntlet.SpellBook.AcidSplash.prototype = new Gauntlet.SpellBook.Spell();