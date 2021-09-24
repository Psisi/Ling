let todos = ['homework', 'English', 'cooking', 'shopping'];
let isRunning = true;

while (isRunning) {
    let command = prompt('Please input a command:');  
    switch (command) {
        case 'list':
            for (let i = 1; i <= todos.length; i++) {
            console.log(`${i}. ${todos[i-1]}`);
            } 
            break;
        case 'add':
            let todo = prompt('Add todo text:');
            todos.push(todo);
            break;
        case 'delete':
            let id = parseInt(prompt('Please tell me which one you want to delete:'));
            todos.splice(id - 1, 1);
            break;
        case'update':
            let num = parseInt(prompt('Please tell me which one you want to update:'));
            todos[num - 1] = prompt('Update todo text:');
            break;
        case 'exit':
            isRunning = false;
            break;
        default:
        console.log('Unkown command. Support: exit, list, add, delete, update');    
    }
}
    