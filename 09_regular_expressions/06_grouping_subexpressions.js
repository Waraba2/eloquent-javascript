// Using * , + on multiple exprssions using (). The first + only applies to the second o in boo and
// hoo. the third + applies to (hoo+). The i makes the regular expression case insensitive.
let cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.test("Boohoooohoohooo"));
// -> true
