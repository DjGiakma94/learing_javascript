const ps = require("prompt-sync");
const prompt = ps();

let word = (prompt("Insert a word: "));
const check1 = []
const check2 = []

if (word.length % 2 == 0) {
    for (let i = 0; i < word.length / 2; i++) {
        check1.push(word[i])
        console.log(check1)
    }
    for (let i = word.length - 1; i > (word.length / 2) - 1; i--) {
        check2.push(word[i])
        console.log(check2)
    }

    if (check1.length === check2.length) {
        let result = check1.every(function(element) {
            return check2.includes(element);
        });
        if (result === true) {
            console.log("Your word is palindrome")
        } else {
            console.log("Your word isn't palindrome")
        }
    } else {
        console.log("Your word isn't palindrome")
    }
} else {
    console.log("Your word isn't palindrome")
}