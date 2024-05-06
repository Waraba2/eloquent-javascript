// events in a day and wether or not he became a squirrel
let day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running"],
};

console.log(day1.squirrel);
// -> false
console.log(day1.wolf);
// -> undefined
day1.wolf = false; // adding wolf to object.
console.log(day1.wolf);
// -> false

// Properties that are not numbers or bindings must be quoted
let descriptions = {
  work: "Went to work",
  "touched tree": "Touched a tree",
};

// Not common but we can use the del to remove the property.
let anObject = { left: 1, right: 2 };
console.log(anObject.left);
// -> 1
delete anObject.left;
console.log(anObject.left);
// -> undefined
console.log("left" in anObject); // "in" operator to find if key is in object
// -> false
console.log("right" in anObject);
// -> true

console.log(Object.keys({ x: 0, y: 0, z: 2 })); // all the keys in an object
// -> ["x", "y", "z"]

let objectA = { a: 1, b: 2 };
Object.assign(objectA, { b: 3, c: 4 }); // assigns values of another object
console.log(objectA);
// -> {a: 1, b: 3, c: 4}

console.log(typeof []); // an array is an object
// -> object
