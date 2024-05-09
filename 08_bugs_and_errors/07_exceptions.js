const prompt = require('prompt-sync')();
// Exception Handeling: Stops immediately and jump to a place that knows how to solve the problem.
// throw, raise and error. Unwinding the stack.
// Eg: Throw errors allows us to identify which function is causing the problem.
function promptDirection(question) {
  let result = prompt(question);
  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "Right") return "R";
  throw new Error("Invalid direction: " + result);
}

function loock() {
  if (promptDirection("Which way?") == "L") {
    return "a house";
  } else {
    return "two angry bears";
  }
}

try {
  console.log("You see", loock());
} catch(error) {
  console.log("Something went wrong: " + error);
}

module.exports = {promptDirection};
