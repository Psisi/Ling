let numberStrings = prompt("Please input a set of integers separated by commas:").split(",");
let numbers = [];

for (let num of numberStrings) {
    numbers.push(parseInt(num));
}
console.log(numbers);

let counts = 0;
for (let num of numbers) {
    if (num % 3 === 0) {
    counts++;
    };
}
console.log(counts);

