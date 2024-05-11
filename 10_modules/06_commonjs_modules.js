const {formateDate} = require("./05_commonjs_modules.js");
console.log(formateDate(new Date(2017, 9, 13),
                       "dddd the Do"));
// -> Friday the 13th

