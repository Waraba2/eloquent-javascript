// If you are not sure an object has a certain property you us "?.".
function city(object) {
  return object.address?.city;
}
console.log(city({ address: { city: "Toronto" } }));
// -> Toronto
console.log(city({ name: "Vera" }));
// -> undefined

// "?." can also be used with square brackets or function calls.
console.log("string".notAMethod?.());
// -> undefined
console.log({}.arrayProp?.[0]);
// -> undefined
