//for loop from 1 - 10.
for (let i = 1; i<=10; i++) {
    console.log(i);
}

//forLoops ex
//for (intiial expression; condition; incrementExpression) {}
for (let i = 0; i <= 20; i+=2) {
    console.log(i);
}

//ex2: decreaseing from 100
for (let i = 100; i >= 0; i -= 10) {
    console.log(i);
}

//ex3: multiplying by 10
for (let i = 10; i <= 1000; i *= 10) {
    console.log(i);
}

//Looping Over Arrays
const animals = ['lions', 'tigers', 'bears']; 

for (let i = 0; i <animals.length; i++) {
    console.log(i, animals[i]);
}

//nested loops - multiple/different loops within each other

//idea here is that the outer loop runs once, then inner loop runs completely. 
//then repeat
let str = "LOL"; 
for (let i = 0; i <= 4; i++) {
    console.log("Outer:", i);
    for (let j = 0; j < str.length; j++) {
        console.log(" inner:", str[j]);
    }
}

for (let outerLoop = 1; outerLoop <= 10; outerLoop++) {
    console.log(`outer is: ${outerLoop}`)
    for (let innerLoop = 1; innerLoop <= 4; innerLoop++) {
        console.log(`   inner is: ${innerLoop}`)
    }
}

const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Jeffrey', 'Juanita', 'Antontioo', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erica']
]

for (let i=0; i<seatingChart.length; i++) {
    const row = seatingChart[i];
    console.log(`ROW #${i + 1}`)
    for (let j=0; j < row.length; j++) {
        console.log(row[j])
    }
}