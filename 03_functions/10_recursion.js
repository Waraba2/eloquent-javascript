// Recursive function that does the same as ** operator
function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}
console.log(power(2, 3));
// -> 8

// Given a target starting from 1 to target find if either multipying by 3 or adding 5 can be added
// Recursive flow:
// find(1, "1")
// find(6, "(1 + 5)")
//   find(11, "((1 + 5) + 5)")
//     find(16, "(((1 + 5) + 5) + 5)")
//       too big
//     find(33, "(((1 + 5) + 5) * 3)")
//       too big
//   find(18, "((1 + 5) * 3)")
//     too big
// find(3, "(1 * 3)")
//   find(8, "((1 * 3) + 5)")
//     find(13, "(((1 * 3) + 5) + 5)")
//       found!
function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return (
        find(current + 5, `(${history} + 5)`) ??
        find(current * 3, `(${history} * 3)`)
      );
    }
  }
  return find(1, "1");
}
console.log(findSolution(24));
// -> (((1 * 3) + 5) * 3)
