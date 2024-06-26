const { Rabbit, killerRabbit } = require("./04_classes.js");

Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth);
// -> small
killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth);
// -> long, sharp, and bloody
console.log(new Rabbit("basic").teeth);
// -> small
console.log(Rabbit.prototype.teeth);
// -> small

console.log(Array.prototype.toString == Object.prototype.toString);
// -> false
console.log([1, 2].toString());
// -> 1,2

console.log(Object.prototype.toString.call([1, 2]));
// -> [object Array]
