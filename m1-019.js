const ps = require("prompt-sync");
const prompt = ps();
const average = [];

// Creating variable to store the sum
let sum = 0;

while (sum == 0) {
    let letter = prompt("enter a number: ");
    let check = Number.isInteger(Number(letter));
    if (letter == "0") {
        break;
    } else if (check == false) {
        console.log("Error, enter a differt value");
    } else {
        average.push(Number(letter));
    }
}

// Running the for loop
for (let i = 0; i < average.length; i++) {
    sum += average[i];
}

console.log(`the average is: ${sum/average.length}`)