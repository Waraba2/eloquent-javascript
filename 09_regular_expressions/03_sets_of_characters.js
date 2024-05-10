console.log(/[123456789]/.test("in 1992"));
// -> true
console.log(/[1-9]/.test("in 1992"));
// -> true

// Shortcuts:
// \d	Any digit character
// \w	An alphanumeric character (“word character”)
// \s	Any whitespace character (space, tab, newline, and similar)
// \D	A character that is not a digit
// \W	A nonalphanumeric character
// \S	A nonwhitespace character
// .	Any character except for newline

// represents 01-30-2003 15:20
let dateTime = /\d\d-\d\d-\d\d\d\d\ \d\d:\d\d/;
console.log(dateTime.test("01-30-2003 15:20"));
// -> true
console.log(dateTime.test("01-jan-2003 15:20"));
// -> false

// To inverse a set of character "not"
let nonBinary = /[^01]/;
console.log(nonBinary.test("1100100010100110"));
// -> false
console.log(nonBinary.test("0111010112101001"));
// -> true
