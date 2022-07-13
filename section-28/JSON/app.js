//THIS IS A STRING OF JSON (NOT AN OBJECT)
const data = `{"ticker":{"base":"BTC","target":"USD","price":"11288.49813464","volume":"91769.69699773","change":"-46.29462447"},"timestamp":1596510482,"success":true,"error":""}`

// THIS IS A JS OBJECT - turning data into one big object. 
const parsedData = JSON.parse(data);

parsedData.ticker.price //extracts bitcoin ticker price. 

//JSON.stringify
//returns a JSON string corresponding to the specified value, optionally including only certain properties or replacing 
//property values 
const dog = {breed:'lab', color:'black', isAlive: true, owner:undefined}
JSON.stringify(dog); //converts most into strings, except booleans 

