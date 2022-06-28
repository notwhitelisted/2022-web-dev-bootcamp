let input = prompt("What would you like to do?");
const todo = ['Collect chicken eggs', 'Clean litter box'];
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('-----------------')
        for (let i = 0; i < todo.length; i++) {
            console.log(`${i}: ${todo[i]}`);
        }
        console.log('-----------------')
    } else if (input === 'new') {
        const newTodo = prompt("What is the new todo?");
        todo.push(newTodo);
        console.log(`${newTodo} added to the list`)
    } else if (input === 'delete') {
        const index = parseInt(prompt("Which index would you like to delete?"));
        if (!Number.isNaN(index)) {
            const deleted = todo.splice(index, 1);
            console.log(`${deleted[0]} was removed.`);
        } else {
            console.log('Unknown index.')
        }
    }
    input = prompt("What would you like to do?")
}
console.log("QUITTING APP")