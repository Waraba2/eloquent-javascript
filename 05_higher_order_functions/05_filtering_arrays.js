require("./04_script.js");

function filter(array, test) {
  let passed = [];
  for (let element of array) {
    if (test(element)) {
      passed.push(element);
    }
  }
  return passed;
}
console.log(filter(SCRIPTS, (script) => script.living));
// → [{name: "Adlam", …}, …]

// forEach and filter are standard methods that we will use moving forward
console.log(SCRIPTS.filter((s) => s.direction == "ttb")); // filter is a "pure function".
// → [{name: "Mongolian", …}, …]
