console.log("Hello");
//global object
//console.log(global)
//some common core modules below.
const os = require('os');
const path = require('path')

//user defined modules
const math = require('./math')
console.log(math.multiply(4.5,3))

// console.log(os);
// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());
// console.log(" ")
// console.log(__dirname)
// console.log(__filename)
// console.log(" ")
// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))
// console.log("")
// console.log(path.parse(__filename))