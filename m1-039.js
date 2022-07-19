const max_len = [7, 8, 9, 10];
const password = [];
const ascii = [];

// loop for ascii code
for (let i = 33; i < 127; i++) {
    ascii.push(i);
}

const getRandomAscii = (ascii) => {
    return ascii[Math.floor(Math.random() * ascii.length)];
};

const getRandomLen = (max_len) => {
    return max_len[Math.floor(Math.random() * max_len.length)];
};

function random_password() {
    while (password.length < Number(getRandomLen(max_len))) {
        password.push(String.fromCharCode(getRandomAscii(ascii)));
    }
    let result = password.join("");
    return result;
}

console.log("Your new random password is: ")
console.log(random_password());