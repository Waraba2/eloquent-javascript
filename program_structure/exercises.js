// 1. Looping a triangle. Makes 7 calls to console.log to output a triangle
// Mine:
let line = "#";
for (let counter = 0; counter < 7; counter++) {
  console.log(line);
  line += "#";
}
// Updated:
// for (let line = "#"; line.length < 8; line += "#") {
//   console.log(line);
// }

// 2. FizzBuzz. console.log all numbers from 1 to 100.  Fizz, Buzz for numbers disible by 3, 5.
// Mine:
// for (let number = 1; number <= 100; number++) {
//   if (number % 3 == 0) {
//     console.log("Fizz");
//   } else if (number % 5 == 0) {
//     console.log("Buzz");
//   } else {
//     console.log(number);
//   }
// }
// Updated:
for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}

// 3. Chessboard: console log a string that represents a 8 * 8 grid, using new line character
// to seperate lines.
// Mine:
// let line = "# # # #";
// let result = "";
// let size = 8;
// for (let n = 0; n <= size; n++) {
//   if (n % 3 == 0) result += ` ${line}\n`;
//   else if (n % 2 == 0) result += `${line} \n`;
// }
// console.log(result);
// Updated:
let size = 8;

let board = "";

for (let x = 0; x <= size; x++) {
  for (let y = 0; y <= size; y++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}
console.log(board);
