// Math.min, Math.max, Math.sqrt, Math.cos, Math.sin, Math.tan, acos, asin, atan, PI, floor, ceil, abs.
// Javascrip warns for binging let and const name that are already taken.
// But not for var and function bindings. There is a tradition of naming constant bindings
// "all caps".
function randomPointOnCircle(radius) {
  let angle = Math.random() * 2 * Math.PI;
  return { x: radius * Math.cos(angle), y: radius * Math.sin(angle) };
}
console.log(randomPointOnCircle(2));
// -> This value changes base on random:  {x: 1.9990886761094, y: -0.060369404926392534 }

// random returns a number between 0 inclusive and 1 exclusive each call
console.log(Math.random());
// -> 0.3293163111660631
console.log(Math.random());
// -> 0.6628926210987323
console.log(Math.random());
// -> 0.2650180748405686

// Use Math.floor rounds down to get whole numbers
console.log(Math.floor(Math.random() * 10));
// -> 1
