// the test only tells you wether or not there was a match. The exec method returns null if no 
// matches were found or an object with information about the matches.
let match = /\d+/.exec("one two 100");
console.log(match);
//:: -> [100] // [ '100', index: 8, input: 'one two 100', groups: undefined ]
console.log(match.index);
// -> 8
console.log("one two 100".match(/\d+/)) // string match method that does the same
//:: -> [100] // [ '100', index: 8, input: 'one two 100', groups: undefined ]

// matching subgroups
let quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said 'hello'"));
// -> ["'hello'", "hello"] ["'hello'", 'hello', index: 9,input: "she said 'hello'", 
// groups: undefined]

console.log(/bad(ly)?/.exec("bad")); // not matched hold undefined
//:: -> [ 'bad', undefined, index: 0, input: 'bad', groups: undefined ]
console.log(/(\d)+/.exec("123")); // only the last match for multiple matches using +
//:: -> [ '123', '3', index: 0, input: '123', groups: undefined ]

console.log(/(?:na)+/.exec("banana")); // using (?:) purely for grouping without showing in the array.
//:: -> [ 'nana', index: 2, input: 'banana', groups: undefined ]
