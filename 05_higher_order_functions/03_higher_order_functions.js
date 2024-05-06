// Higher order funtions are functions that operate on other functions by
// either taking them or returning them as arguments.
// Eg: a funtion that creates a new function
function greaterThan(n) {
  return (m) => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// -> true

// We can also have functions that changes other functions.
function noisy(f) {
  return (...args) => {
    console.log("calling with", args);
    let result = f(...args);
    console.log("called with", args, ", returned result", result);
    return result;
  };
}
noisy(Math.min)(3, 2, 1);
// -> calling with [3, 2, 1]
// -> called with [3, 2, 1] , returned result 1

// Functions that new types of control flow.
const { repeat } = require("./02_abstracting_repetition.js"); // import repeat function.
function unless(test, then) {
  if (!test) then();
}
repeat(3, (n) => {
  unless(n % 2 == 1, () => {
    console.log(n, "is even");
  });
});
// -> 0 is even
// -> 2 is even

["A", "B"].forEach((l) => console.log(l)); // higher order function for loop.
// -> A
// -> B
