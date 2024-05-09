const prompt = require('prompt-sync')();
// a function promptNumber that asks the user for a number and returns it. What should it return 
// if the user inputs “orange”?
// Option 1: return a special value(null, undefined or -1)
function promptNumber(question) {
  let result = Number(prompt(question));
  if (Number.isNaN(result)) return null;
  else return result;
}
console.log(promptNumber("How many trees do you see!"));

// to distinguish such return value from other values we can wrap the return in an object.
function lasElement(array) {
  if (array.length == 0) {
    return {failed: true};
  } else {
    return {value: array[array.lengh - 1]};
  }
}
// Another issue can arrise when another function call promptNumber 10 times if have to check null 
// on each call.
