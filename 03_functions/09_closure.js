// What happen to local bindings when the function call that created them is no longer active?
function wrapValue(n) {
  let local = n;
  return () => local;
}
let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
// -> 1
console.log(wrap2());
// -> 2

// Closure
function multiplier(factor) {
  return (number) => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));
// -> 10
