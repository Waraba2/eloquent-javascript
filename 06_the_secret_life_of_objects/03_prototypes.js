// Objects created with {} are linked to Object.prototype
let empty = {};
console.log(empty.toString);
// -> [Function: toString]
console.log(empty.toString());
// -> [object Object]

// when an oject doesn't have a property its prototype is search all the way to Oject.prototype to null.
console.log(Object.getPrototypeOf({}) == Object.prototype); // returns the prototype of an object
// -> true
console.log(Object.getPrototypeOf(Object.prototype));
// -> null

// Some prototypes comes from function and array. Those prototypes have also an object prototype.
console.log(Object.getPrototypeOf(Math.max) == Function.prototype);
// -> true
console.log(Object.getPrototypeOf([]) == Array.prototype);
// -> true

// Object.create to create an object with a specific prototype
let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  },
};
let blackRabbit = Object.create(protoRabbit);
blackRabbit.type = "black";
blackRabbit.speak("I am fear and darkness");
// -> The black rabbit says 'I am fear and darkness'
