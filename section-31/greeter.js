//run node filename.js [argv1] [argv2]

const args = process.argv.slice(2);
for (let arg of args) {             //run loop
    console.log(`hi there, ${arg}`) //string template - prints out hi there aaron, hi there, bobcat
}