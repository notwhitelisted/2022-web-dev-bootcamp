console.log("Sending request to server!") //printed first
setTimeout(() => {
    console.log("Here is your data from the server...") //printed last. 
}, 3000)
console.log("I AM AT THE END OF THE FILE!") //printed second