const ps = require("prompt-sync");
const prompt = ps();
let total = 0

function total_sum() {
    let number = (prompt("Enter a number: "));
    if (number === "") {
        return 0
    } else {
        total += Number(number)+total_sum()
        return total
    }
}

function main() {
    total_sum();
    console.log(`The total of your numbers is: ${total}`)
}

main()