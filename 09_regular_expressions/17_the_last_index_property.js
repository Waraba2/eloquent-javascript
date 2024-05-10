// source, lastIndex
let pattern = /y/g;
pattern.lastIndex = 3;
let match = pattern.exec("xyzzy");
console.log(match.index);
// -> 4
console.log(pattern.lastIndex);
// -> 5

// Difference between global and sticky.
let global = /abc/g;
console.log(global.exec("xyz abc"));
let sticky = /abc/y;
// -> [ 'abc', index: 4, input: 'xyz abc', groups: undefined ]
console.log(sticky.exec("xyz abc"));
// -> null

// Another effect of global it returns all matchs using the match method. Cautious: use in calls to
// replace or lastIndex explicitly
console.log("Banana".match(/an/g));
// -> [ 'an', 'an' ]

// matchAll to find all matches. 
let input = "A string with 3 numbers in it... 42 and 88.";
let matches = input.matchAll(/\d+/g); // the regex passed to matchAll must be g enabled.
for (let match of matches) {
  console.log("Found", match[0], "at", match.index);
}
// -> Found 3 at 14
//    Found 42 at 33
//    Found 88 at 40
