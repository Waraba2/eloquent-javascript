// callback functions are passed to functions that need to wait for something
setTimeout(() => console.log("Tick"), 500);

// readTextFile("shopping_list.txt", (content) => {
//   console.log(`Shopping List:\n${content}`);
// });

function compareFiles(fileA, fileB, callback) {
  readTextFile(fileA, (contentA) => {
    readTextFile(fileB, (contentB) => {
      callback(contentA == contentB);
    });
  });
}
