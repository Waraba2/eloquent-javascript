// A function that removes all the Javascrit comments in a file.
function stripComments(code) {
  return code.replace(/\/\/.*|\/\*[^]*\*\//g, "");
}
console.log(stripComments("1 + /* 2 */3"));
// -> 1 + 3
console.log(stripComments("x = 10;// ten!"));
// -> x = 10;
console.log(stripComments("1 /* a */+/* b */ 1"));
// -> 1 1

// Making the matching non-greedy (recommanded)
function stripComments1(code) {
  return code.replace(/\/\/.*|\/\*[^]*?\*\//g, "");
}
console.log(stripComments1("1 /* a */+/* b */ 1"));
// -> 1 + 1
