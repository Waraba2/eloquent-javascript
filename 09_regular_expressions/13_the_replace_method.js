console.log("papa".replace("p", "m")); // replaces the first occurence of the letter
// -> mapa

console.log("Borobudur".replace(/[ou]/, "a")); 
// -> Barobudur
console.log("Borobudur".replace(/[ou]/g, "a")); // all matches of the string
// -> Barabadar

// Gettting "firstName, LastName" fro string.
console.log(
  "Liskov, Barbara\nMcCarthy, John\nMilner, Robin"
  .replace(/(\p{L}+), (\p{L}+)/gu, "$2 $1")
) // can use up to $9 with $&
// -> Barbara Liskov
// -> John McCarthy
// -> Robin Milner

// Passing functions as second argument of replace
let stock = "1 lemon, 2 cabbages, and 101 eggs";
function minusOne(match, amount, unit) {
  amount = Number(amount) - 1;
  if (amount == 1) { // only one left remove the "s".
    unit = unit.slice(0, unit.length - 1);
  } else if (amount == 0) {
    amount = "no";
  }
  return amount + " " + unit;
}
console.log(stock.replace(/(\d+) (\p{L}+)/gu, minusOne));
// -> no lemon, 1 cabbage, and 100 eggs
