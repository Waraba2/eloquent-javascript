// 1. Minimum:
// A function that takes two arguments and returns the minimum
function min(x, y) {
  return x < y ? x : y;
}
console.log(min(0, 10));
console.log(min(0, -10));

// 2. Recursion:
// Print if a number is even or not
function isEven(n) {
  let number = n * -1; // to handel negative values
  if (number == 0) {
    return true;
  } else if (number == 1) {
    return false;
  } else {
    return isEven(n - 2);
  }
}
// Updated:
function isEven(n) {
  if (n == 0) {
    return true;
  } else if (n == 1) {
    return false;
  } else if (n < 0) {
    return isEven(-n);
  } else {
    return isEven(n - 2);
  }
}

console.log(isEven(50));
// -> true
console.log(isEven(75));
// -> false
console.log(isEven(-1));
// -> false

// 3. Bean Counting:
// Return the number of uppercase B in a string
function countBs(string) {
  let characterCount = 0;
  for (let idx = 0; idx < string.length; idx++) {
    if (string[idx] == "B") {
      characterCount += 1;
    }
  }
  return characterCount;
}
console.log(countBs("BOB"));
// -> 2
// Modifing countBs to do it to any charater
function countChar(string, character) {
  let characterCount = 0;
  for (let idx = 0; idx < string.length; idx++) {
    if (string[idx] == character) {
      characterCount += 1;
    }
  }
  return characterCount;
}
console.log(countChar("kakkerlake", "k"));
// -> 4
