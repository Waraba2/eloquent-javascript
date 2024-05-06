// A simple method
function speak(line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
}
let whiteRabbit = { type: "white", speak };
let hungryRabbit = { type: "hungry", speak };

whiteRabbit.speak("Oh my fur and whiskers");
// -> The white rabbit says 'Oh my fur and whiskers'
hungryRabbit.speak("Got any carrots?");
// -> The hungry rabbit says 'Got any carrots?'

speak.call(whiteRabbit, "Hurry");
// -> The white rabbit says 'Hurry'

// Regular functions don't have access to the this binding of the scope that wraps them but arrow functions can
let finder = {
  find(array) {
    return array.some((v) => v == this.value);
  },
  value: 5,
};
console.log(finder.find([4, 5]));
// -> true
