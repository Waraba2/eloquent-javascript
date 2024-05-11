// reports the size of each file in an array of files.
async function fileSizes(files) {
  let list = "";
  await Promise.all(
    files.map(async (fileName) => {
      list += fileName + ": " + (await textFile(fileName)).length + "\n";
    }),
  );
  return list;
}
fileSizes(["plans.txt", "shopping_list.txt"]).then(console.log);

//  As usual, computing new values is less error-prone than changing existing values.
async function fileSizes(files) {
  let lines = files.map(async (fileName) => {
    return fileName + ": " + (await textFile(fileName)).length;
  });
  return await Promise.all(lines).join("\n");
}
