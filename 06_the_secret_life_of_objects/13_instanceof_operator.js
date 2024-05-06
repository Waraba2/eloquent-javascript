const { LengthList } = require("./12_inheritance");
const { List } = require("./11_the_iterator_interface");
// To know if a class was derived from a specific object.
console.log(new LengthList(1, null) instanceof LengthList);
// -> true
console.log(new LengthList(2, null) instanceof List);
// -> true
console.log(new List(2, null) instanceof LengthList);
// -> false
console.log([1] instanceof Array);
// -> true
