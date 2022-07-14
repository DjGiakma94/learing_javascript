const ps = require("prompt-sync");
const prompt = ps();

let side1 = prompt("enter side1 of room: ");
console.log(`hello ${side1}`);

let side2 = prompt("enter side2 of room: ");
console.log(`hello ${side2}`);

let area = side1 * side2
console.log(`The area is ${area}`);