const input = document.querySelector('input');
const h1 = document.querySelector('h1');

// input.addEventListener('change', function (e) {
//     console.log("CASKDJASKJHD")
// })

//new value every time you type and click out of the box. 
//useful for like copy and pasting 
input.addEventListener('input', function (e) {
    h1.innerText = input.value;
})