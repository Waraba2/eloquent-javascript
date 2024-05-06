const { Rabbit, killerRabbit } = require("./04_classes");
// Unlike string properties Symbols are unique introduced in 2015.
let sym = Symbol("name");
console.log(sym == Symbol("name"));
// -> false
Rabbit.prototype[sym] = 55;
console.log(killerRabbit[sym]);
// -> 55

// Symbols allows methods with the same name to peacefully live together
const length = Symbol("length");
Array.prototype[length] = 0;
console.log([1, 2].length);
// -> 2
console.log([1, 2][length]);
// -> 0

// It is also possible to add a property using []
let myTrip = {
  length: 2,
  0: "Lankwitz",
  1: "Babelsberg",
  [length]: 21500,
};
console.log(myTrip.length, myTrip[length]);
// -> 2 21500
