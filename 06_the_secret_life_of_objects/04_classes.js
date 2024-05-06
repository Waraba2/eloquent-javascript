//
function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  return rabbit;
}

// The class keyword makes easier to define the above
class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`This ${this.type} rabbit says '${line}'`);
  }
}

let killerRabbit = new Rabbit("killer"); // create an instance of the class

// The above was not introduce until 2015. The old way: by convention names of consctructs are capitalized
function ArchaicRabbit(type) {
  this.type = type;
}
ArchaicRabbit.prototype.speak = function (line) {
  console.log(`This ${this.type} rabbit says '${line}'`);
};
let oldSchoolRabbit = new ArchaicRabbit("old school");

// the prototype of a constructor is Function.prototype
// console.log(Object.getPrototypeOf(Rabbit) == Function.prototype);
// -> true
// console.log(Object.getPrototypeOf(killerRabbit) == Rabbit.prototype);
// -> true

// Adding properties to this. They get added to the instance not the prototype.
class Particle {
  speed = 0;
  constructor(position) {
    this.position = position;
  }
}

// Like functions classes can be used as statements or expressions
let object = new (class {
  getWorld() {
    return "hello";
  }
})();
// console.log(object.getWorld());
// -> "hello"
module.exports = { Rabbit, killerRabbit };
