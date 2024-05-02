// -> Vaues,
// Numbers (integer, float, exponent),
// Arithmetic (-, +, *, /, %) ordered by precedence
// Special Numbers(Infinity, -Infinity, NaN)
// Strings ("", '', `${}`:template literals, \:escape, '\':newline, Unicode Standard)
// Unary Operators(typeof) / Binary Operators(Arithmetic)
console.log(typeof 4.5);
// -> number
console.log(typeof "x");
// -> string
console.log(-(10 - 2));
// -8
// Booleans values (true, false)
// Comparison (>, <, >=, <=, ==, !=). For strings uppercase less than lowercase.
console.log(3 > 2);
// -> true
console.log(3 < 2);
// -> false
console.log("Aardvark" < "Zoroster"); // comparing string
// -> true
console.log("Garnet" != "Rudy");
// -> true
console.log("Pearl" == "Ametthyst");
// -> false
console.log(NaN == NaN); // The only value that is not equal to himself.
// -> false
// Logical Operators (||:or, &&:and, !:not). Ordered by precedence.
console.log(true && false);
// -> false
console.log(true && true);
// -> true
console.log(false || true);
// -> true
console.log(false || false);
// -> false
// Ternary operator (?:). For a ? b : c. It returns b if a is true and c if c is true.
console.log(true ? 1 : 2);
// -> 1
console.log(false ? 1 : 2);
// -> 2
// Empty Values (null, undefined). They are values but carry no information. Mostly interchangable.
// Automatic Type Conversion (doing odd things). This concept is called "type coersion", if you see
// NaN. null and undefined produces True only if both sides are null or undefined. Use === and !==
// defensively to avoid type coersion.
console.log(8 * null);
// -> 0
console.log("5" - 1);
// -> 4
console.log("5" + 1);
// -> 51
console.log("five" * 2);
// -> NaN
console.log(false == 0);
// -> true
console.log(null == undefined);
// -> true
console.log(null == 0);
// -> false
// Short-Circuiting of Logical Operators
// Rule for converting strings and numbers to Booleans, (0, NaN, "") are false and all other opera-
// tors are true.
// 0 || -1 // -> -1, "" || "!?" // -> "!?"
// The ?? returns the value to the right only if the first value is null or undefined. ?? is often
// preferable than ||.
console.log(0 || 100);
// -> 100
console.log(0 ?? 100);
// -> 0
console.log(null ?? 100);
// -> 100
// For && if left converts to false it fallback on right value.
// For true || X , false && X. No matter the value of X for both it will fallback on true, false.
// This concept is called short-circuit evaluation.
