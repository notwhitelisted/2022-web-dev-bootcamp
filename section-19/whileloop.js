//whileLoops

let num = 0;
while (num < 10) {
    console.log(num);
    num++;
}

//same idea as forLoop, but no preferred. useful for when you don't know how many times it's gonna take. 
let count = 0;
while (count < 10) {
    count++;
    console.log(count)
}

while(!gameOver) { //while loops good for games. chess/checkers. 
    //player 1 move
    //player 2 move
}

const SECRET = 'BabyHippo'
let guess = prompt('enter the secret code...');
while (guess !== SECRET) {
    guess = prompt('enter the secret code...') 
}
console.log('congrats you got the secret pw!')

//break keyword. 
let targetNum = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while (true) {
    guess = Math.floor(Math.random() * 10); 
    if (guess === targetNum) {
        console.log(`CORRECT! Guessed: ${guess} & target was: ${targetNum}`);
        break;
    }
    else {
        console.log(`Guessed ${guess}... Incorrect!`);
    }
}