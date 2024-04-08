"use strict";
function removeDuplicates(inputString) {
    const seen = new Set();
    let result = "";
    for (const char of inputString) {
        if (!seen.has(char)) {
            seen.add(char);
            result += char;
        }
    }
    return result;
}
const input1 = "banana";
const input2 = "hello world";
const output1 = removeDuplicates(input1);
const output2 = removeDuplicates(input2);
console.log(output1);
console.log(output2);
