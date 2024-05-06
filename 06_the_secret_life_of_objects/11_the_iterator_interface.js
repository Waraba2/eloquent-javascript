let okIterator = "Ok"[Symbol.iterator]();
// console.log(okIterator.next());
// -> { value: 'O', done: false }
// console.log(okIterator.next());
// -> { value: 'k', done: false }
// console.log(okIterator.next());
// -> { value: undefined, done: true }

// Data Structure like linked list
class List {
  constructor(value, rest) {
    this.value = value;
    this.rest = rest;
  }

  get length() {
    return 1 + (this.rest ? this.rest.length : 0);
  }
  static fromArray(array) {
    let result = null;
    for (let i = array.length - 1; i >= 0; i--) {
      result = new this(array[i], result);
    }
    return result;
  }
}

class ListIterator {
  constructor(list) {
    this.list = list;
  }

  next() {
    if (this.list == null) {
      return { done: true };
    }
    let value = this.list.value;
    this.list = this.list.rest;
    return { value, done: false };
  }
}

// For small programs we can declare these methods directly in the class like so
List.prototype[Symbol.iterator] = function () {
  return new ListIterator(this);
};

// To loop over the list
// let list = List.fromArray([1, 2, 3]);
// for (let element of list) {
//   console.log(element);
// }
// -> 1
// -> 2
// -> 3

// It works using ...
// console.log([..."PCI"]);
// -> [ 'P', 'C', 'I' ]

module.exports = { List };
