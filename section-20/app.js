function singSong() {
    console.log("DO");
    console.log("RE");
    console.log("MI");
}

//parameters are placeholders. you pass in the arguments into the parameters. 
function greet(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName[0]}.`)
}

//order matters here. 
function repeat(str, numTimes) {
    let result = '';
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}


function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false; //return > console.log to bottle it up and use it for later. console.log will just print it at that very moment and isn't stored. 
    }
    return x + y;
}





// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()

