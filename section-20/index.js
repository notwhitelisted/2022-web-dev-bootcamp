//this 1 function prints out 1 console.logs 
// function rant(message) {
//     console.log(message.toUpperCase());
// }

// rant("I hate beets");
// rant("I hate beets");
// rant("I hate beets");


//this 1 function prints out 3 console.logs
// function rant(message) { 
//     let WOOP = message.toUpperCase();
//     console.log(WOOP)
//     console.log(WOOP)
//     console.log(WOOP)
// }

// rant("I hate beets");

//
// function isSnakeEyes(num, num2) {
//     if (num,num2 = 1,1) {
//         console.log("Snake Eyes!");
//     } else {
//         console.log("Not Snake Eyes!");
//     }
// }
// isSnakeEyes();

// function lastElement(array) {
//     if (array.length) {
//         return array[array.length -1]
//     } else {
//         return null;
//     }
// }

// lastElement([3,5,7]);
// lastElement([1]);
// lastElement([]);

// function capitalize(argument1) {
//     return argument1[0].toUpperCase();
// }

// capitalize('eggplant');
// capitalize('pamplemousse');
// capitalize('squid');

// function sumArray(numbers) {
//     let count = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         count += numbers[i];  
//     }
//     return count;
// }

// console.log(sumArray([1,2,3]));
// console.log(sumArray([2,2,2,2]));
// console.log(sumArray([50,50,51]));

const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg: function() {
        this.eggCount++;
        return "EGG";
    }
}

hen.name;
hen.eggCount;
hen.layAnEgg();
hen.layAnEgg();
hen.eggCount;