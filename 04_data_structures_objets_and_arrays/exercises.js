// 1. The sum of a range:
// Given a start and end renturns an array containing numbers from to start to including end
function range(start, end, step = 1) {
  let numbers = [];
  if (step < 0) {
    for (let number1 = start; number1 >= end; number1 += step) {
      numbers.push(number1);
    }
  } else {
    for (let number = start; number <= end; number += step) {
      numbers.push(number);
    }
  }
  return numbers;
}
console.log(range(1, 10));
// -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// -> [5, 4, 3, 2]

// Given an array of numbers calculates the sum
function sum(numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}
console.log(sum(range(1, 10)));
// → 55

// 2. Reversing an array:
// Reverse and returns a copy
function reverseArray(array) {
  let copy = [];
  for (let item of array) {
    copy.unshift(item);
  }
  return copy;
}
let myArray = ["A", "B", "C"];
console.log(reverseArray(myArray));
// → ["C", "B", "A"];j
console.log(myArray);
// → ["A", "B", "C"];

// Reverse in place
function reverseArrayInPlace(array) {
  for (let idx = array.length - 1; idx >= Math.floor(array.length / 2); idx--) {
    let i = array[array.length - 1 - idx];
    array[array.length - 1 - idx] = array[idx];
    array[idx] = i;
  }
}
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

// 3. A list:
// Converts an array to a list of objects
// Updated
function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }
  return list;
}

function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prepend(value, list) {
  return { value, rest: list };
}

function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

// 4. Deep Comparison:
// Compares two objects
// Modified:
function deepEqual(a, b) {
  if (a === b) return true;

  if (a == null || typeof a != "object" || b == null || typeof b != "object")
    return false;

  let keysA = Object.keys(a),
    keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
}

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true
