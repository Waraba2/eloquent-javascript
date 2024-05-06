let varyingSize = {
  get size() {
    return Math.floor(Math.random() * 100);
  },
};
console.log(varyingSize.size);
// -> varies: 49
console.log(varyingSize.size);
// -> varies: 10

class Temperature {
  constructor(celcius) {
    this.celcius = celcius;
  }
  get fahrenheit() {
    return this.celcius * 1.8 + 32;
  }
  set fahrenheit(value) {
    this.celcius = (value - 32) / 1.8;
  }
  static fromFahrenheit(value) {
    return new Temperature((value - 32) / 1.8);
  }
}
let temp = new Temperature(22);
console.log(temp.fahrenheit);
// -> 71.6
temp.fahrenheit = 86;
console.log(temp.celcius);
// -> 30
let boil = Temperature.fromFahrenheit(212); // static are stored in the constructor
console.log(boil.celcius);
// -> 100
