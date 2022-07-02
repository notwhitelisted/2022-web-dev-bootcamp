//2. MANIPULATING

//a lot of information. most things are on documentation. 
//focus more on overall concepts and be able to access certain information when needed

//innerText - shows the text within the opening and closing tags
//can manipute the innerText: document.querySelector('p').innerText = 'lololool'
//treated as a object, so you can add .innerText to the end of the querySelector function. 
//sensitive to what it is showing at the moment

//textContent - return every element inside the console. 
//will show everything that is either present or hidden 
//treated as an object, so you can add .textContent to the end of the querySelector function. 
//can be used to change what's available on the screen at that very moment. 

//innerHTML - changes the HTML on the page. so like <i>dfaskdlfjasd</i> will actually change it to italicized. 
//changes the base of the HTML. 
//changes the anchor tag which also changes the html.
//setting an = sign is new assignment. 

document.querySelector('#banner').id = 'whoops' //can affect CSS. make sure to double check it to make sure it makes sense. 

//ATTRIBUTE
//.getAttribute - pulls attribute from the website
//.setAttribute - sets an attribute to the HTML

//CHANGING STYLES
//h1.style = contains all properties related to CSS
//it will be under JS and not CSS. so things will be camel cased and no dashes. 
//contains inline styles from HTML not CSS.
//can reassign by setting it to some string.
