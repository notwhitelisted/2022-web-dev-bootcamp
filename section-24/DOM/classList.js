//one way
//manipulate classes - document.querySelector('tag') + set to variable
//set attribute to the 'class' - tag.setAttribute('class', 'whatever you are setting it to')

//another way:
//.classList
//object that can control classes to manipulate them 
//there are other methods on top of .classList (ex: .add(''), .('remove'), )
//toggle classes through .classList.toggle('')



//traversing parent/child/sibling
//.parentElement - 1 parent 
//.children - can have multiple children
//.nextElementSibling
//.nextSibling 
//.previousSibling 


//append + appendChild
//.appendChild - pass in new whatever (img) and it'll add it to the HTML from JS
//ex: document.body.appendChild(variable)
//.append - adds to the end of something
//ex: tag.append('whatever')
//.prepend - adds to the beginning of something 
//ex: tag.prepend('whatever')

//remove + removeChild
//.remove - call on the actual element to remove whatever it is
//.removeChild - class method on parent to remove the child
