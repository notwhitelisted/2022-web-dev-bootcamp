//Callback functions get passed through each of these
//array methods. 

//Map method
//creates a new array with the results of calling a 
//callback on every element in the array

//arrow functions
// const square = x => {
//     return x * x;
// }

// const sum = (x + y) => {
//     return x + y;
// }

const greet = name => {
    return ("Hey " + name + "!"); 
}

greet("Hagrid");
console.log(greet("Hagrid"));

//setTimeout
console.log("HELLO!!...") 
setTimeout(() => {
    console.log("...are you still there?")
}, 3000)
console.log("GOODBYE");

//setInterval
const id = setInterval(() => {
    console.log(Math.random())
}, 2000);

//Every
const exams = [12, 15, 20, 13, 18];
exams.every(score => score >= 15)
//Some
exams.some(score => score >= 15)

movies.some(movie => movie.year > 2015);

function allEvens(evens) {
    return evens.every(evens => evens % 2 == 0)
}