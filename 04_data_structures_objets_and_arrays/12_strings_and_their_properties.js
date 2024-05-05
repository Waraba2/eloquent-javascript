// strings, booleans,and number are not objects.
let kim = "Kim";
kim.age = 88;
console.log(kim.age);
// -> undefined

// strings also have slice and indexOf method like arrays.
console.log("coconuts".slice(4, 7));
// -> nut
console.log("coconuts".indexOf("u"));
// -> 5

console.log("one two three".indexOf("ee")); // strings indexOf can search for sub-strings
// -> 11

console.log(" okay \n ".trim()); //removes whitespace, newline, and similar at the end and beginning of the string.

console.log(String(6).padStart(3, "0")); // add padding based on length and character.

// Splitting and jounning the string.
let sentence = "Secretary birds specialize in stomping";
let words = sentence.split(" ");
console.log(words);
// -> [ 'Secretary', 'birds', 'specialize', 'in', 'stomping' ]
console.log(words.join(". "));
// -> Secretary. birds. specialize. in. stomping

console.log("LA".repeat(3)); // To repeat a string

// Accessing characters, or lenght in a string is the same as accessing it with an array.
let string = "abc";
console.log(string.length);
// -> 3
console.log(string[1]);
// -> b
