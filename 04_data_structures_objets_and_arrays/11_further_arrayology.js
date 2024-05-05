let todoList = [];
function remember(task) {
  todoList.push(task);
}

function getTask() {
  return todoList.shift(); // get element at the beginning good for "queues".
}

function rememberUrgentlyTask(task) {
  todoList.unshift(task);
}

// Searching the index of an element in the array. Returns the index of -1 if not found.
// indexOf and lastIndexOf have optional arguments to specify where to start.
console.log([1, 2, 3, 2, 1].indexOf(2));
// -> 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2));
// -> 3

// Slice to return an array with start(inclusive) and end(exclusive) index.
console.log([0, 1, 2, 3, 4].slice(2, 4));
// -> [2, 3]
console.log([0, 1, 2, 3, 4].slice(2)); // when end not provided copy to the end and no argument to get the whole array
// -> [2, 3, 4]

// Concat and slice in action to concatenate two slices.
function remove(array, index) {
  return array.slice(0, index).concat(array.slice(index + 1));
}
console.log(remove(["a", "b", "c", "d", "e"], 2));
// -> ["a", "b", "d", "e"]
