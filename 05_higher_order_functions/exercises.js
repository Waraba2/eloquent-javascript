const { characterScript } = require("./09_strings_and_character_codes");
const { countBy } = require("./10_recognizing_text.js");

// 1. Flattening:
let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(
  arrays.reduce((a, b) => {
    return a.concat(b);
  }, []),
);

// 2. Your own for loop:
function loop(start, test, update, body) {
  for (let value = start; test(value); value = update(value)) {
    body(value);
  }
}
console.log(
  loop(
    3,
    (n) => n > 0,
    (n) => n - 1,
    console.log,
  ),
);

// 3. Everything:
function every(array, test) {
  for (let item of array) {
    if (!test(item)) {
      return false;
    }
  }
  return true;
}
console.log(every([1, 3, 5], (n) => n < 10));
// -> true
console.log(every([2, 4, 16], (n) => n < 10));
// -> false
console.log(every([], (n) => n < 10));
// -> true

function every1(array, test) {
  return !array.some((element) => !test(element));
}
console.log(every([1, 3, 5], (n) => n < 10));
// -> true
console.log(every([2, 4, 16], (n) => n < 10));
// -> false
console.log(every([], (n) => n < 10));
// -> true

// 4. Dominant writing direction.
function dominantDirection(text) {
  let counted = countBy(text, (char) => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({ name }) => name != "none");

  if (counted.length == 0) return "ltr";

  return counted.reduce((a, b) => (a.count > b.count ? a : b)).name;
}
console.log(dominantDirection("Hello!"));
// -> ltr
console.log(dominantDirection("Hey, مساء الخير"));
// -> rtl
