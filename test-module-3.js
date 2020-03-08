// Will be called only once because of caching
console.log("Hello from the module");

// Will be called multiple times
module.exports = () => console.log("Log this beautiful text!");
