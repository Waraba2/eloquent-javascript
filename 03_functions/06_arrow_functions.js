const roundTo = (n, step) => {
  let remainder = n % step;
  return n - remainder + (remainder < step / 2 ? 0 : step);
};

// If the code has only one line we can omit the braces
const square1 = (x) => {
  return x * x;
};
const square2 = (x) => x * x;
console.log(square1(2)); // -> 4
console.log(square2(3)); // -> 9

// Arrow function with not parmeter
const horn = () => {
  console.log("Toot");
};
horn();
