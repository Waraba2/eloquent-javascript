let doh = "Doh";
console.log(doh.toUpperCase);
// -> function
console.log(doh.toUpperCase()); // toLowerCase()
// -> DOH

// methods to manipulate arrays. These methods are used for stacks
let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// -> [1, 2, 3, 4, 5]
console.log(sequence.pop());
console.log(sequence);
// -> [1, 2, 3, 4]
