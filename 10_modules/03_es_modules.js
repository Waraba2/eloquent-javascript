import {dayName} from "./02_es_modules.js"; // import {dayName as nomDeJour} from "./02_es_modules.js"

let now = new Date();
console.log(`Today is ${dayName(now.getDay())}`);
// -> Today is Monday

import seasonNames from './02_es_modules.js'; // No braces for default bindings

import * as dayName from './02_es_modules.js'; // Imports all bindings
console.log(dayName.dayName(3));
// -> Wednesday
