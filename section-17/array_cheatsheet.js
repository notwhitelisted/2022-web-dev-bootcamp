// Making an array:
const colors = ["red", "orange", "yellow"];

// Arrays are indexed like strings:
colors[0]; // "red"

// They have a length:
colors.length; //3

// Important array methods:
//push(value) - adds value to the END of an array
//pop() - removes and returns last value in array

//unshift(val) - adds value to START of an array
//shift() - removes and returns first element in an array

//concat()
//include() 
//indexOf() - specific index of something
//reverse() - reverses the position of the words, changes the original array. 

//splice() - change contetns of an array by removing or replacing existing eleemnts and/or adding new elements in place. 
//ex: colors.splice(5,1) - at index 5, removes 1 thing. 
//ex2: colors.splice(1,0,'red-orange') - at index 1, removes 0 thing, add 'red-orange'
//slice() - getting a copy or slice of an array. first, last of x number, can do start:end or none or just start/just end
    //slice() - forms a new array. 2:4 (starting at 2, ending but not including 4. )

//sort() - storting numbers in a certain way, depending on how you sort it. 