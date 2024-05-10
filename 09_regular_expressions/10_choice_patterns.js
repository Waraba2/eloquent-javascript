// A number followed as a name (pig, cow, or chicken) using pipe "|"
let animalCount = /\d+ (pig|cow|chicken)s?/;
console.log(animalCount.test("15 pigs"));
// -> true 
console.log(animalCount.test("15 pugs"));
// -> false
