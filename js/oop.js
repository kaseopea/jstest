"use strict";
function Dice(sides) {
  this.sides = sides || 6;
}

Dice.prototype.roll = function() {
  return Math.floor(Math.random()* this.sides) + 1;
}

var dice = new Dice(6);
var dice10 = new Dice(10);

console.log(dice.roll());
console.log(dice);
console.log(dice.prototype);
// console.log(dice.[[prototype]]);
console.log(dice.__proto__);
