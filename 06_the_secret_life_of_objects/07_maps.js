const { Rabbit } = "./04_classes.js";
// We can use objects to associate keys with other values
let ages = {
  Boris: 39,
  Liang: 22,
  Júlia: 62,
};
console.log(`Júlia is ${ages["Júlia"]}`);
// -> Júlia is 62
console.log("Is Jack's age known?", "Jack" in ages);
// -> Is Jack's age known? false
console.log("Is toString's age known?", "toString" in ages); // Derived fro the Object.prototype
// -> Is toString's age known?" true

console.log("toString" in Object.create(null)); // passing null gives us an object with no prototype
// -> false // This way of creating objects only accepts strings as keys

// JavaScript own Map class, accepts any type as keys.
let ages1 = new Map();
ages1.set("Boris", 29);
ages1.set("Liang", 22);
ages1.set("Júlia", 62);
console.log(`Júlia is ${ages1.get("Júlia")}`);
// -> Júlia is 62
console.log("Is Jack's age known?", ages1.has("Jack"));
// -> Is Jack's age known? false
console.log(ages1.has("toString")); // Derived fro the Object.prototype
// -> Is toString's age known?" false

// to look keys of an object avoiding the prototype:
console.log(Object.hasOwn({ x: 1 }, "x"));
// -> true
console.log(Object.hasOwn({ x: 1 }, "toString"));
// -> false
