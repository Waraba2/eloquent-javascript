console.log(/abc/.test("abcde"));
// -> true
console.log(/abc/.test("abxde")); // looks for the partern anywhere in the string
// -> false
