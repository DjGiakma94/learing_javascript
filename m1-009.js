const vowels = ["a", "e", "i", "o", "u"];
const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"];
const both = ["y"];

const ps = require("prompt-sync");
const prompt = ps();

let letter = prompt("enter a letter: ");

let isVowels = vowels.includes(letter);
let isConsonats = consonants.includes(letter);
let isBoth = both.includes(letter);

if (isVowels == true) {
    console.log(`${letter} is a vowel`);
} else if (isConsonats == true) {
    console.log(`${letter} is a consonant`);
} else if (isBoth == true) {
    console.log(`${letter} is a vowel and a consonant`);
}