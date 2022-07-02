const btn = document.querySelector('#v2');

//onclick is a method essentially. select the variable or ID or class then tag on .method
//there are a lot of different properties to do something - by setting it to a function
btn.onclick = function () {
    console.log("YOU CLICKED ME!")
    console.log("I HOPE IT WORKED!!")
}

function scream() {
    console.log("AAAAAHHHHH");
    console.log("STOP TOUCHING ME!")
}

btn.onmouseenter = scream; //#v2 - will hover and run scream();

document.querySelector('h1').onclick = () => {
    alert('you clicked the h1!')
}

//addEventListener
//all in one. can pass any event through for the JS to run when the event occurs. 

const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function () {
    alert("CLICKED!");
})

function twist() {
    console.log("TWIST!")
}
function shout() {
    console.log("SHOUT!")
}

const tasButton = document.querySelector('#tas');

//.onclick overrides them
// tasButton.onclick = twist;
// tasButton.onclick = shout;

//runs both of the lines together.  
tasButton.addEventListener('click', twist)
tasButton.addEventListener('click', shout)
