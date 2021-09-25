let numberStrings = prompt("Please input a set of integers separated by commas:").split(",");
let numbers = [];

for (let num of numberStrings) {
    numbers.push(parseInt(num));
}
console.log(numbers);

let largest = numbers[0];
let smallest = numbers[0];

for (let num of numbers) {
    if (largest < num) {
        largest = num;
    } else if (smallest > num) {
        smallest = num;
    }
}

console.log(largest);
console.log(smallest);