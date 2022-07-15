const base = [];
const ps = require("prompt-sync");
const prompt = ps();

let base10 = prompt("enter a integer number: ");

while (Number(base10) > 0) {
    let binary_1 = Number(base10) % 2;
    base.push(Number(binary_1));
    base10 = Math.floor(Number(base10) / 2);
}
console.log("Your decimal number in binary system is:");
for (let i = 0; i < base.length; i++) {
    process.stdout.write(`${base.reverse()[i]}`);
}