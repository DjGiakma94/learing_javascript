const values = [
    [" "],
    [".", ",", "?", "!", ":"],
    ["A", "B", "C"],
    ["D", "E", "F"],
    ["G", "H", "I"],
    ["J", "K", "L"],
    ["M", "N", "O"],
    ["P", "Q", "R", "S"],
    ["T", "U", "V"],
    ["W", "X", "Y", "Z"]
]
const keys = Object.keys(values);
const final = []

const ps = require("prompt-sync");
const prompt = ps();

let counter = 0
let word = (prompt("Insert numbers to translate in word: "));

const startChange = word.split("");

for (let i = 0; i < startChange.length - 2; i++) {
    console.log(counter, "counter1")
    if (Number(startChange[i]) === Number(startChange[i + 1]) && Number(startChange[i]) != Number(startChange[i + 2])) {
        counter++;
        console.log(counter, "counter2")
        const mario = values[Number(startChange[i])]
        console.log(counter, "counter3")
        let result = mario[counter]
        console.log(result, "result")
        final.push(result)
        counter = 0;
    } else if (Number(startChange[i]) === Number(startChange[i + 1]) && Number(startChange[i]) === Number(startChange[i + 2])) {
        counter++;
        const mario = values[Number(startChange[i])]
        if (counter === mario.length) {
            let result = mario[counter - 1]
            console.log(result, "result3same")
            final.push(result)
            counter = 0;
        }
        console.log(counter, "counter4")
    } else if ((Number(startChange[i]) != Number(startChange[i + 1])) && Number(startChange[i + 1]) != Number(startChange[i + 2])) {
        counter = 0;
        const mario = values[Number(startChange[i])]
        let result = mario[counter]
        console.log(mario, "result2")
        final.push(result)
    } else if (Number(startChange[startChange.length - 1]) != Number(startChange[[startChange.length - 2]])) {
        counter = 0;
        const mario = values[Number(startChange[startChange.length - 1])]
        let result = mario[counter]
        console.log(result, "result3")
        final.push(result)
    }
}


console.log(final)