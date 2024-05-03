function square(x) {
  return x * x;
}
console.log(square(4, true, "hedgehog")); // extra arguments are ignored
// -> 16                                 // if I assign less arguments they become "undefined"

// Minus imitates the - operator
function minus(a, b) {
  if (b === undefined) return -a;
  else return a - b;
}
console.log(minus(10));
// -> -10
console.log(minus(10, 5));
// -> 5

// Replaces the missing argument with a default value
function roundTo(n, step = 1) {
  let remainder = n % step;
  return n - remainder + (remainder < step / 2 ? 0 : step);
}
console.log(roundTo(4.5));
// -> 5
console.log(roundTo(4.5, 2));
// -> 4
