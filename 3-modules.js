// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require("./4-firstModule.js");
const sayHi = require("./5-utils.js");
const data = require("./6-alternative.js");
require("./7-mind-grenade.js");
// console.log(data);

sayHi("SUSAN");
sayHi(names.john);
