require("./04_script");

// Given a character code find the script associated with it
// some is also a higher order function. takes a test function and tells whether the function
// returns true for any value
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })
    ) {
      return script;
    }
  }
  return null;
}
console.log(characterScript(121));
// -> {name: "Latin", …}

// Two emoji characters, horse and shoe
let horseShoe = "🐴👟";
console.log(horseShoe.length);
// -> 4
console.log(horseShoe[0]);
// -> (Invalid half-character)
console.log(horseShoe.charCodeAt(0));
// -> 55357 (Code of the half-character)
console.log(horseShoe.codePointAt(0));
// -> 128052 (Actual code for the horse emoji)/ whether a character takes up one or two code units

// the for let of allows to iterate over characters that take more than one code unit
let roseDragon = "🌹🐉";
for (let char of roseDragon) {
  console.log(char);
}
// -> 🌹
// -> 🐉
module.exports = { characterScript };
