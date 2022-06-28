//2nd data structures after arrays
//objects - collections of properties. properties are key-value pair. use custom keys to access data.

//ex1: 
const fitBitData = {
    totalSteps: 308727,
    totalMiles: 211.7
}

//creating object literals
const person = {
    firstName: 'Mick',
    lastName: 'Jagger'
}

const kitchenSink = {
    favNum: 2312903812093,
    isFunny: true,
    colors: ['red', 'orange']
}

//accessing data out of objects
kitchenSink["favNum"]
kitchenSink["colors"]

//modifying objects 
person.firstName //"Mick"
person.lastName
person['firstName'] //square brackets are used for putting in variables. + getting your regular outputs 

const years = {1999: 'GOOD', 2020: 'BAD'} //converst into strings. 
years["1999"] 
years[1999]
years["2020"]

const midterms = {
    danielle: 96, 
    thomas: 78
}
midterms.thomas; //78
midterms.thomas = 79;
midterms['danielle'] = 'A'
midterms.ezra = 'B+' //adds ezra with a value of B+. ezra: 'B+'

//nesting arrays and objects - having arrays in objects or objects in arrays.
const comments = [
    {username: 'Tammy', text: 'lololololol', votes: 9},
    {username: 'Tommy', text: 'hehehehehe', votes: 1012312}
]

//access 2nd text: 
comments[1] //outputs {username: 'Tommy', text: 'hehehehehe', votes: 1012312}
comments[1].text //outputs 'hehehehehe'