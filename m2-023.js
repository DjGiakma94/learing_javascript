const score = {
    1: ["A", "E", "I", "L", "N", "O", "R", "S", "T", "U"],
    2: ["D", "G"],
    3: ["B", "C", "M", "P"],
    4: ["F", "H", "V", "W", "Y"],
    5: ["K"],
    6: ["J", "X"],
    7: ["Q", "Z"],
}
counter = [];

//enter a word
const ps = require("prompt-sync");
const prompt = ps();

let word = (prompt("Enter a word to view the score in scrabble: "));

//uppercase
let upper = word.toUpperCase();

const startChange = upper.split("");

//function to return key
function getObjKey(obj, value) {
    return Object.keys(obj).find(key => obj[key] === value);
}

//double cicle for 
for (i = 0; i < startChange.length; i++) {

    for (y = 0; y < Object.values(score).length; y++)
        for (x = 0; x < Object.values(score)[y].length; x++)
            if (startChange[i] === Object.values(score)[y][x]) {
                counter.push(getObjKey(score, Object.values(score)[y]));
            }
}

//calculation the score
let sum = 0;

for (let i = 0; i < counter.length; i++) {
    sum += Number(counter[i]);
}

console.log(`The score of your word "${word}" is ${sum}.`);