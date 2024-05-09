// const {promptDirection} = require("./07_exceptions.js");

// for problems expected to happen during routine use crashing with and unhandled exception 
// is a terrible strategy.
// keeps calling prompt direction until it gets a balid answer.
for (;;) {
  try {
    let dir = promtDirection("Where?"); // <- typo!
    console.log("You chose ", dir);
    break;
  } catch (e) {
    console.log("Not a valid direction. Try again.");
  }
}
// How do we recognize and exception?
// We create a new type of error and use instanceof to identify it.
class InputError extends Error {};

function promptDirection(question) {
  let result = prompt(question);
  if (result.toLowerCase == "left") return "L";
  if (result.toLowerCase == "right") return "R";
  throw new InputError("Invalid direction: " + result);
}

for(;;) {
  try {
    let dir = promtDirection("Where?");
    console.log("You chose", dir);
    break;
  } catch (e) {
    if (e instanceof InputError) {
      console.log("Not a valid direction. Try again.")
    } else {
      throw e;
    }
  }
}// this will catch the specific error, if I introduce the typo it wil not raise unspecific 
// exceptions
