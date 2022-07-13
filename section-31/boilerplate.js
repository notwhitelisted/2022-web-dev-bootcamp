const fs = require('fs') //NEED TO REQUIRE THIS
const folderName = process.argv[2] || 'Project' //node boilerplate.js project1 - 2 = index === 3rd spot in the line

// //asynchronous version 
// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     console.log("IN THE CALLBACK!") //this prints second 
//     if (err) throw err;
// });
// console.log("I COME AFTER MKDIR") //this prints first

// //synchronous version
fs.mkdirSync('folderName'); 
// //aajsdlkfjaskldjfalksd run code ==== will run code after folder has been created 
fs.writeFileSync(`${folderName}/index.html`)
fs.writeFileSync(`${folderName}/app.js`)
fs.writeFileSync(`${folderName}/styles.css`)