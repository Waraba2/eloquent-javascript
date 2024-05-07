// Oject that freeze makes an object immutable
let object = Object.freeze({value: 5});
object.value = 10;
console.log(object.value);
// -> 5
