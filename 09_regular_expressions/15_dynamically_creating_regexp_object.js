//
let name = "harry";
let regexp = new RegExp("(^|\\s)" + name + "($|\\s)", "gi");
console.log(regexp.test("Harry is a dodgy character."));
// -> true

// To match "dea+hl[]rd"
let name1 = "dea+hl[]rd";
let escaped = name1.replace(/[//[.+*?(){|^$]/g, "\\$&");
let regexp1 = new RegExp("(^|\\s)" + escaped + "($|\\s)", "gi");
let text = "This dea+hl[]rd guy is super annoying.";
console.log(regexp1.test(text));
// true
