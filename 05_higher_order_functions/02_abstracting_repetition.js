// Usally we would write a function to do log.
function repeatLog(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

// we can pass the console.log as an action
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}
repeat(3, console.log);
// -> 0
// -> 1
// -> 2

// We don't have to pass a predefined function to repeat, we can pass one on the spot
let labels = [];
repeat(5, (i) => {
  labels.push(`Unit ${i + 1}`);
});
console.log(labels);
// -> [ 'Unit 1', 'Unit 2', 'Unit 3', 'Unit 4', 'Unit 5' ]
module.exports = { repeat };
