//document object model 
//has JS object that modifies the HTML 
//takes html + css and adds JS objects to them 
//document object - entry point into world of DOM. contains representation of all contents on a page + methods + prop.

//#document.all - contains contents + lots of properties, manipulate html + css + everything else. 
 
//getElementById(insert ID);
//be able to locate the specified ID or null if no ID is found 
//only available as a method of the global document object, and not available as a method on
//all element objects in the DOM. ID must be unique throughout entire document. 
//can also set it to a variable and be able to call it later on by console.log

//getElementsByTagName();
//pass through a tag name such as 'img', 'p', 'h1', etc.
//gives you an HTML collection (looks like an array)
//can access each document 

//getElementsByClassName();
//pass through a class name 
//selects all elements with  the same class names. 
//can access each document
//gives you a HTML collection - can iterate over it, get indices 

//querySelector();
//returns a collection of elements or singular elements depending how you nest it together
//very popular 

//querySelectorAll();
//same idea as above, but returns a collection of matching elements
//very popular