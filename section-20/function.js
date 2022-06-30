let die1 = Math.floor(Math.random() * 6) + 1;

//step 1: define
function rollDie() {
    Math.floor(Math.random() * 6 + 1);
}
//step 2: run
let die2 = rollDie();

//ex1: 
function multiply(num1, num2) {
    return num1 * num2 
}

multiply(2,3); //6
multiply(9,9); //81
multiply(5,4); //20

//ex2: 
function isShortsWeather(temperature) {
    if (temperature >= 75) {
        return true;
    } else {
        return false;
    }
}

temperature(80); //true
temperature(48); //false
temperature(75); //true

//ex3: 
function lastElement(array) {
    if (array.length) {
        return array[array.length -1]
    } else {
        return null;
    }
}

lastElement([3,5,7]); // 7
lastElement([1]); // 1
lastElement([]); // null 

//ex4: 
function capitalize(argument1) {
    return argument1[0].toUpperCase() + argument1.slice(1);
}

capitalize('eggplant'); //Eggplant
capitalize('pamplemousse'); //Pamplemousse
capitalize('squid'); //Squid

//ex5: 
function sumArray(numbers) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        count += numbers[i];  
    }
    return count;
}

sumArray([1,2,3]); //6 
sumArray([2,2,2,2]); //8 
sumArray([50,50,51]); //101

//ex6: 
function returnDay(randNumb) {
    if (randNumb < 1 || randNumb > 7) {
        return null;
    } else if (randNumb === 1) {
        return "Monday";
    } else if (randNumb === 2) {
        return "Tuesday";
    } else if (randNumb === 3) {
        return "Wednesday";
    } else if (randNumb === 4) {
        return "Thursday";
    } else if (randNumb === 5) {
        return "Friday";
    } else if (randNumb === 6) {
        return "Saturday";
    } else if (randNumb === 7) {
        return "Sunday";
    }
}
returnDay(1); //Monday
returnDay(7); //Sunday
returnDay(4); //Thursday
returnDay(0); //null