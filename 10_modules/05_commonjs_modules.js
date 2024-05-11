// Before 2015 people wrapped their modules inside a function
const weekDay = function() {
  const names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  return {
    name(number) { return names[number]; },
    number(name) { return names.indexOf(name); }
  };
}();
console.log(weekDay.name(weekDay.number("Sunday")));
// -> Sunday

const ordinal = require("ordinal");
const {days, months} = require("date-names");

exports.formatDate = function(date, format) {
  return format.replace(/YYYY|M(MMM)?|Do?|dddd/g, tag => {
    if (tag == "YYYY") return date.getFullYear();
    if (tag == "M") return date.getMonth();
    if (tag == "MMMM") return months[date.getMonth()];
    if (tag == "D") return date.getDate();
    if (tag == "Do") return ordinal(date.getDate());
    if (tag == "dddd") return days[date.getDay()];
  });
};

// A version of require // There no real reason to use commonjs but you might come accross it.
function require(name) {
  if(!(name in require.cache)) {
    let code = readFile(name);
    let exports = require.cache[name] = {};
    // dangerous someone can pass strings as functions
    let wrapper = Function("require, exports", code); 
    wrapper(require, exports);
  }
  return require.cache[name];
}
require.cache = Object.create(null);
