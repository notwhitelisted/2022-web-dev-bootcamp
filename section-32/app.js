// { object1, object2} - destructuring. so picking only 2 objects out of the 3 from math.js file to run as an object
const { PI, square } = require('./math'); // ./ - references to a directory called math 

const cats = require('./shelter')
// console.log(PI)

// console.log(square(9))
console.log("REQUIRED AN ENTIRE DIRECTORY!", cats)
