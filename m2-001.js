const numbers = [];

const ps = require("prompt-sync");
const prompt = ps();

let number = Number(prompt("Insert a number: "));

if (number != 0) {
    numbers.push(Number(number));
    while (number > 0) {
        let number = Number(prompt("Insert a number: "));
        if (number != 0) {
            numbers.push(Number(number));
        } else {
            numbers.sort();
            break;
        }
    }

}

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}