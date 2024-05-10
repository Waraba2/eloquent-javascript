// other characters by putting u in front unicode.
// \p{L}	Any letter
// \p{N}	Any numeric character
// \p{P}	Any punctuation character
// \P{L}	Any non-letter (uppercase P inverts)
// \p{Script=Hangul}	Any character from the given script (see Chapter 5)

console.log(/\p{L}/u.test("α"));
// -> true
console.log(/\p{L}/u.test("!"));
// -> false
console.log(/\p{Script=Greek}/u.test("α"));
// -> true
console.log(/\p{Script=Arabic}/u.test("α"));
// -> false
