//this file is separate and will have own functions written into it. 
//you will use this file and export it over to another file (app.js) to use it 

const add = (x, y) => x + y;

const PI = 3.14159;

const square = x => x * x;

exports.square = square;
exports.PI = PI;

// =========================
// module.exports.add = add; //have to specify what it is you are exporting that way when calling it from other file, it can
                             //pull from it
// module.exports.PI = PI;
// module.exports.square = square;


