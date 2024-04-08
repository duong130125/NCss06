function removeDuplicates(inputString: string): string {
    const seen: Set<string> = new Set();
    let result: string = "";

    for (const char of inputString) {
        if (!seen.has(char)) {
            seen.add(char);
            result += char;
        }
    }
    
    return result;
}


const input1: string = "banana";
const input2: string = "hello world";

const output1: string = removeDuplicates(input1);
const output2: string = removeDuplicates(input2);

console.log(output1);
console.log(output2);
