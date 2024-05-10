// + for a sequence of numbers * is similar but allows O match
console.log(/'\d+'/.test("'123'"));
// -> true
console.log(/'\d+'/.test("''"));
// -> false
console.log(/'\d*'/.test("'123'"));
// -> true
console.log(/'\d*'/.test("''"));
// -> true

// ? is optional matches whether or not the letter is available.
let neighbor = /neighbou?r/;
console.log(neighbor.test("neighbour"));
// -> true
console.log(neighbor.test("neighbor"));
// -> true

// To indicate a precise number of occurence {4} {2, 4} {5, }.
let dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTime.test("1-30-2003 8:45"));
// -> true
