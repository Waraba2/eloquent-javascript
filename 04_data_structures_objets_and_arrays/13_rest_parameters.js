// The three dots operator ...
function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}
console.log(max(4, 1, 9, -2));
// -> 9

// The three dots operator can also be used to pass an array.
let numbers = [5, 1, 7];
console.log(max(...numbers)); // can alo do max(9, ...numbers, 2)
// -> 7

// The three dots operator can also be used to spread another array.
let words = ["never", "fully"];
console.log(["will", ...words, "understand"]);
// -> ["will", "never", "fully", "understand"]

// This also works with objects if a property is added multiple times the last added wins
let coordinates = { x: 10, y: 0 };
console.log({ ...coordinates, y: 5, z: 1 });
// -> { x: 10, y: 5, z: 1 }
