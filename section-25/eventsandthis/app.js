const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

//selecting all the buttons
const buttons = document.querySelectorAll('button');

//looping through the buttons + runs the colorize() function. 
for (let button of buttons) {
    button.addEventListener('click', colorize)
}

//example purpose. set a variable with selector. loop through it. runs the addEventListener.
const h1s = document.querySelectorAll('h1');
for (let h1 of h1s) {
    h1.addEventListener('click', colorize)
}

//function - this refers to what it is clicking on. "this" dependent on 
//execution/invocation context. 
function colorize() {
    this.style.backgroundColor = makeRandColor();
    this.style.color = makeRandColor();
}
