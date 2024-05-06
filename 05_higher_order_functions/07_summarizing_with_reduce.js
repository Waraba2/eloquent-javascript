require("./04_script.js");
// reduce also called fold flattens the array to a single value by combining its elements
// It is not as straight forward as filter and map
function reduce(array, combine, start) {
  let current = start;
  for (let element of array) {
    current = combine(current, element);
  }
  return current;
}
console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));
// -> 10

console.log([1, 2, 3, 4].reduce((a, b) => a + b)); // It works if start is not given and the array
// contains at least one element
// -> 10

// reducing twice to get the charater count for each language
function characterCount(script) {
  return script.ranges.reduce((count, [from, to]) => {
    return count + (to - from);
  }, 0);
}
console.log(SCRIPTS[0]);

console.log(
  SCRIPTS.reduce((a, b) => {
    return characterCount(a) < characterCount(b) ? b : a;
  }),
);
// → {name: "Han", …}
// "Han unification"
module.exports = { characterCount };
