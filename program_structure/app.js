// -> Expressions and Statements. "side effects".
// -> Binding how does the computer handle state.
// let caught = 5 * 5;
//
// let ten = 10;
// console.log(ten * ten); // binding 'ten' used as an expression
// -> 100

// let mood = "light";
// console.log(mood);
// -> light
// mood = "dark"; // disconnecting binging
// console.log(mood);
// -> dark

// How much luigi ows you after paying 35$. Note: empty binding return undefined
// let luigisDebt = 140;
// luigisDebt = luigisDebt - 35;
// console.log(luigisDebt);
// -> 105

// Single let statments that define multiple bindings:
// let one = 1,
//   two = 2;
// console.log(one + two);
// -> 3

// using var and constant
// var name = "Ayda"; // Similar to let but deprecated because it produces weird values
// const greeting = "Hello "; // constant
// console.log(greeting + name);

// Binding names, can't start with digits. Only allows $ and _ characaters.
// Reserved keywords  list[break case catch class const continue debugger default
// delete do else enum export extends false finally for
// function if implements import interface in instanceof let
// new package private protected public return static super
// switch this throw true try typeof var void while with yield]

// -> The Environment

// -> Functions executing them is called (invoking, calling, or applying it).
// prompt("Enter passcode."); // not used really expect in toy programs.

// -> The conslole.log Function
// let x = 30;
// console.log("the value of x is ", x);
// the value of x is 30

// -> Return values don't have side effects
// console.log(Math.max(2, 4));
// -> 4
// console.log(Math.min(2, 4) + 100); // expression within expression: anything that returns a value is an expression.
// -> 102

// -> Control Flow
/* Program with two statements:
 * 1. Get a number from the user.
 * 2. Show the square of that number.
 */
// const prompt = require("prompt-sync")();
// let theNumber = Number(prompt("Pick a number")); // prompt returns a string, (Number, String, Boolean) convert
// console.log("Your number is the square root of " + theNumber * theNumber);

// -> Conditional Execution
/* Program with two statements:
 * 1. Get a number from the user.
 * 2. Show the square of that number , only if it is a number then else, or chained
 */
// const prompt = require("prompt-sync")();
// let theNumber = Number(prompt("Pick a number"));
// if (!Number.isNaN(theNumber)) {
//   console.log("Your number is the square root of " + theNumber * theNumber); // returns NaN because given a string
// } else {
//   consol.log("Why didn't you give me a number?");
// }

// chained
// let num = Number(prompt("Pick a number"));
//
// if (num < 10) {
//   console.log("Small");
// } else if (num < 100) {
//   console.log("Medium");
// } else {
//   console.log("Large");
// }
// keet if statement unless one liners
// if (1 + 1 == 2) console.log("It's true");
// -> It's true

// -> while and do Loops:
// let number = 0;
// while (number <= 12) {
//   console.log(number);
//   number = number + 2;
// } // -> 0\n 2\ etcetera

// Shows the value of 2^10
// let result = 1;
// let counter = 0;
// while (counter < 10) { // recommended to start counting from 0.
//   result = result * 2;
//   counter = counter + 1;
// }
// console.log(result); // -> 1024

// forces you to enter Name
// const prompt = require("prompt-sync")();
//
// let yourName;
// do {
//   yourName = prompt("Who are you?");
// } while (!yourName);
// console.log("Hello " + yourName);

// -> Indenting Code

// -> For Loops:
// Prints 0 to 12 by 2 increments.
// for (let number = 0; number <= 12; number = number + 2) {
//   console.log(number);
// }
// Calculates 2^10
// let result = 1;
// for (let counter = 0; counter < 10; counter = counter + 1) {
//   result = result * 2;
// }
// console.log(result);

// -> Breaking out of a loop (break, continue)
// Finds the first number that is greater than or equal to 20 and divisible by 7.
// for (let current = 20; ; current = current + 1) {
//   if (current % 7 == 0) {
//     console.log(current);
//     break;
//   }
// }

// -> Updating Bindings Succinctly
// for (let number = 0; number <= 12; number += 2) {
//   console.log(number);
// }

// -> Dispatching On A Value Using Switch
// A chain of if statments may look better // always remember to "break" keyword when using this.
// const prompt = require("prompt-sync")();
// switch (prompt("What is the weather like?")) {
//   case "rainy":
//     console.log("Remember to bring an umbrella.");
//     break;
//   case "sunny":
//     console.log("Dress lightly.");
//     break;
//   case "cloudy":
//     console.log("Go outside.");
//     break;
//   default:
//     console.log("Unknown weather type.");
//     break;
// }

// -> Capitalization
// fuzzylittleturtle
// fuzzy_little_turtle
// FuzzyLittleTurtle
// fuzzyLittleTurtle (recommended)

// Comments (//:single line , /**/:multiple lines)
