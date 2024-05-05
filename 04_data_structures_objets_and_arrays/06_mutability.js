let object1 = { value: 10 };
let object2 = object1; // object1 and object2 have the same "identity"
let object3 = { value: 10 };

console.log(object1 == object2);
// -> true
console.log(object1 == object3); // eventhout object1 and 3 are the same they do not point to the same object
// -> false

object1.value = 15;
console.log(object2.value);
// -> 15
console.log(object3.value);
// -> 10

const score = { visitors: 0, home: 0 };
// This is allowed
score.visitors = 1;
// This isn't allowed
score = { visitors: 1, home: 1 };
