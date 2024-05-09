// To make Javascript script we can add "use strict" at the top of a file or function body.
// function canYouSpotTheProblem() {
//   "use strict";
//   for (counter = 0; counter < 10; counter++) {
//     console.log("Happy happy");
//   }
// }
// canYouSpotTheProblem();
// -> ReferenceError: counter is not defined
// -> "use strict" commented
// Happy happy
// Happy happy
// Happy happy
// Happy happy
// Happy happy
// Happy happy
// Happy happy
// Happy happy
// Happy happy
// Happy happy

// function Person(name) { this.name = name};
// let ferdinand = Person("Ferdinand"); // opps a bogus call to person created a global binding.
// console.log(name);
"use strict";
function Person(name) { this.name = name; }
let ferdinand = Person("Ferdinand"); // forgot new
// → TypeError: Cannot set property 'name' of undefined



