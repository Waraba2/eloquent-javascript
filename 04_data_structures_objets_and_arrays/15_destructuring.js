// Same function in 08_computing_correlation.js.
function phi(table) {
  return (
    (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt(
      (table[2] + table[3]) *
        (table[0] + table[1]) *
        (table[1] + table[3]) *
        (table[0] + table[2]),
    )
  );
}

// More succinct way to do it in JavaSript. This works with let, var, or const.
function phi([n00, n01, n10, n11]) {
  return (
    (n11 * n00 - n10 * n01) /
    Math.sqrt((n10 + n11) * (n00 + n01) * (n01 + n11) * (n00 + n10))
  );
}

// It works with objects as well.
let { name } = { name: "Faraji", age: 23 };
console.log(name);
// -> Faraji
// Destruction null or undefined or directly accessing the property of those values throws an error.
