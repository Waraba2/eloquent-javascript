// A function that should never be called on empty arrays. Assertions are more for the programmer 
// mistakes. It should not be used for every single case.
function firstElement(array) {
  if (array.length == 0) {
    throw new Error("firstElement called with []");
  }
  return array[0];
}
console.log(firstElement([9, 5]));
// -> 9
firstElement([]);
// -> Error: firstelement called with []
