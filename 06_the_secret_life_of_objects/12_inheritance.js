const { List } = require("./11_the_iterator_interface");

// LengthList inherites the properties of List
class LengthList extends List {
  #length;

  constructor(value, rest) {
    super(value, rest);
    this.#length = super.length;
  }
}

// console.log(LengthList.fromArray([1, 2, 3]).length);
// -> 3

module.exports = { LengthList };
