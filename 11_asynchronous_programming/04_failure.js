// someAsyncFunction((error, value) => {
//   if (error) handleError(error);
//   else processValue(value);
// });

// Much like resolving a promise provides a value, rejecting one also provides a value, usually
// called the reason of the rejection. When an exception in a handler function causes the
// rejection, the exception value is used as the reason. Similarly, when a handler returns a
// promise that is rejected, that rejection flows into the next promise. There’s a Promise.reject
// function that creates a new, immediately rejected promise.

// To explicitly handle such rejections, promises have a catch method that registers a handler to
// be called when the promise is rejected, similar to how then handlers handle normal resolution.
// It’s also very much like then in that it returns a new promise, which resolves to the original
// promise’s value when that resolves normally and to the result of the catch handler otherwise. If
// a catch handler throws an error, the new promise is also rejected.

// As a shorthand, then also accepts a rejection handler as a second argument, so you can install
// both types of handlers in a single method call: .then(acceptHandler, rejectHandler).
// function textFile(filename) {
//   return new Promise((resolve, reject) => {
//     readTextFile(filename, (text, error) => {
//       if (error) reject(error);
//       else resolve(text);
//     });
//   });
// }

new Promise((_, reject) => reject(new Error("Fail")))
  .then((value) => console.log("Handler 1:", value))
  .catch((reason) => {
    console.log("Caught failure" + reason);
    return "nothing";
  })
  .then((value) => console.log("Handler 2:", value));
// -> Caught failureError: Fail
// -> Handler 2: nothing
