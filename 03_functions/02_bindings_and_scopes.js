// let and const are visible only in the inner most scope. var is visible globally.
let x = 10; // global
if (true) {
  let y = 20; // local to block
  var z = 30; // global
}

const halve = function (n) {
  return n / 2;
};
console.log(halve(100));
// -> 50
console.log(10);
// -> 10
