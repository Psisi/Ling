let numberStrings = prompt("Please input a set of integers separated by commas:").split(",");
let numbers = [];

for (let num of numberStrings) {
    numbers.push(parseInt(num));
}
console.log(numbers);

let counts = 0;
let sum = 0;
for (let num of numbers) {
    sum = sum + num;
    counts++;
}
console.log("The average is:" + sum/counts++);