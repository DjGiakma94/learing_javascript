
function edit_distance(s, t) {
    let result = 0;
    
    console.log(s);
    let s_split = s.split("");
    let t_split = t.split("");
    console.log(s_split);

    //If the length of s/t is 0 then Return the length of t/s
    if (s.length===0) {
        return t.length;
    } else if (t.length===0) {
        return s.length;
    } 
    else {
        

        //If the last character in s does not equal the last character in t then: Set cost to 1

        if (s_split[s_split.length - 1] != t_split[t_split - 1]) {
            result === 1
        }

        let s_1 = s_split.pop();
        let t_1 = t_split.pop();

        let new_s = s_1.toString()
        let new_t = t_1.toString()
        

        //use recursion
        const d1= edit_distance(new_s, t)+1
        const d2= edit_distance(s, new_t)+1
        const d3= edit_distance(new_s, new_t)+result;

        //Return the minimum of d1, d2 and d3
        result === Math.min(d1, d2, d3);
        console.log(result);
        return result
    }
        

    }

function main() {

    const ps = require("prompt-sync");
    const prompt = ps();

    let s = prompt("Insert string1: ");
    let t = prompt("Insert string2: ");
    
    console.log(`The edit distance between two strings are: ${edit_distance(s, t)}!`)

    
}

main()