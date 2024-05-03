const square = function (x) {
  return x * x;
};
console.log(square(12));
// -> 144

const makeNoise = function () {
  console.log("Ping");
};

makeNoise();
// -> Ping

const roundTo = function (n, step) {
  let remainder = n % step;
  console.log(n, step, remainder);
  return n - remainder + (remainder < step / 2 ? 0 : step); // not return value returns undefined.
};
console.log(roundTo(23, 10));
