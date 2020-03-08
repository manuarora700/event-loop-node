// console.log(arguments);
// console.log(require("module").wrapper);

// module.exports
const Calculator = require("./test-module-1");

const calc1 = new Calculator();
console.log(calc1.add(4, 5));

// exports
// const calc2 = require("./test-module-2");

const { add, multiply, divide } = require("./test-module-2");

console.log(add(10, 20));

// Caching
require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();
