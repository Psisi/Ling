function getNumbersFromPrompt() {
    let numberStrings = prompt("Please input a set of integers separated by commas:").split(",");
    let numbers = [];
    for (let num of numberStrings) {
        numbers.push(parseInt(num));
    }
    return numbers;
}
console.log(getNumbersFromPrompt());


function countMultipleOf3(numbers) {
    let counts = 0;
    for (let num of numbers) {
       if (num % 3 === 0) {
           counts++;
       } 
    }
    return counts;
}
console.log(countMultipleOf3(getNumbersFromPrompt()));


function meanNumber(numbers) {
    let sum =0;
    for (let num of numbers) {
        sum = sum + num;
    }
    return sum/numbers.length;
}
console.log(meanNumber(getNumbersFromPrompt()));


function minAndMax(numbers) {
    let minimum = numbers[0];
    let maximum = numbers[0];
    for (let num of numbers) {
        if (num > maximum) {
            maximum = num;
        } else if (num < minimum) {
            minimum = num;
        }
    }
    return {max: maximum, min: minimum};
}
console.log(minAndMax(getNumbersFromPrompt()));


function timesTable() {
    for (let i = 1; i <= 9; i++) {
        let row = '';
        for (let j =1; j <= i; j++) {
            row += `${j} * ${i} = ${i * j} `;
        }
        console.log(row);
    }
}
console.log(timesTable());



let todos = {
    items: ['homework', 'English', 'cooking', 'shopping'],
    list: function () {
        for (let i = 1; i <= this.items.length; i++) {
            console.log(`${i}. ${this.items[i-1]}`);
        }
    },
    add: function () {
        let todo = prompt('Add todo text:');
        this.items.push(todo);
    },
    cancel: function () {
        let itemId = parseInt(prompt('Please tell me which one you want to cancel:'));
        this.items.splice(itemId -1 ,1);
    },
    update: function () {
        let itemId = parseInt(prompt('Please tell me which one you want to update:'));
        this.items[itemId - 1] = prompt('Update todo text:');
    },
    run: function() {
        let isRunning = true;
        while (isRunning) {
            let command = prompt('Please input a command:'); 
            switch (command) {
                case 'list':
                    this.list();
                    break;
                case 'add':
                    this.add();
                    break;
                case 'cancel':
                    this.cancel();
                    break;
                case'update':
                    this.update();
                    break;
                case 'exit':
                    isRunning = false;
                    break;
                default:
                console.log('Unkown command. Support: exit, list, add, delete, update');    
            }
        }
    }
}
console.log(todos.run());
