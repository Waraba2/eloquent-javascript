// A serialization format is called JSON pronounced Jason standing for
// "Javascript Object Notation".
// Different from JavaScript objects, the names have to be surrounded by
// quotes and bindings and function calls are not allowed.
// eg:
let journal = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running"],
};

// JSON.stringify(return a JavaScript encoded string) and JSON.parse(takes
// a string and converts it to the value it encodes).
let string = JSON.stringify({ squirrel: false, events: ["weekend"] });
console.log(string);
// -> {"squirrel":false,"events":["weekend"]}
console.log(JSON.parse(string).events);
// -> [ 'weekend' ]
