const { Rabbit, killerRabbit } = require("./04_classes");
Rabbit.prototype.toString = function () {
  return `a ${this.type} rabbit`;
};
console.log(String(killerRabbit));
// -> a killer rabbit

Array.prototype.forEach.call(
  {
    length: 2,
    0: "A",
    1: "B",
  },
  (elt) => console.log(elt),
);
// -> A
// -> B
