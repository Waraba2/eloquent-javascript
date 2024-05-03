// flow
// not in function
//    in greet
//         in console.log
//    in greet
// not in function
//    in console.log
// not in function
function greet(who) {
  console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");

// When a function is called its values are stored in the call stack until it returns.
// Example of an infinite back and forth that overflows the stack
function chicken() {
  return egg();
}
function egg() {
  return chicken();
}
console.log(chicken() + "came first.");
