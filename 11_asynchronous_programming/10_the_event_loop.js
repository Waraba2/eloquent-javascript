// try {
//   setTimeout(() => {
//     throw new Error("Woosh");
//   }, 20);
// } catch (e) {
//   // This will not run
//   console.log("Caught", e);
// }

// No two things run at the same time, slow running code can delay the handeling of other event.
let start = Date.now();

setTimeout(() => {
  console.log("Timeout ran at", Date.now() - start);
}, 20);
while (Date.now() < start - 50) {}
console.log("Wasted time until", Date.now() - start);

// Promises always resolve or reject as a new event. Even if a promise is already resolved, waiting
// for it will cause your callback to run after the current script finishes, rather than right away
Promise.resolve("Done").then(console.log);
console.log("Me first!");
// -> Me first!
// -> Done
