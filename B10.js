"use strict";
let add = (g, h) => {
    let numA = typeof g === 'string' ? parseFloat(g) : g;
    let numB = typeof h === 'string' ? parseFloat(h) : h;
    if (!isNaN(numA) && !isNaN(numB)) {
        return numA + numB;
    }
    else {
        return 'Invalid input';
    }
};
let subtract = (g, h) => {
    let numA = typeof g === 'string' ? parseFloat(g) : g;
    let numB = typeof h === 'string' ? parseFloat(h) : h;
    if (!isNaN(numA) && !isNaN(numB)) {
        return numA - numB;
    }
    else {
        return 'Invalid input';
    }
};
let multiply = (g, h) => {
    let numA = typeof g === 'string' ? parseFloat(g) : g;
    let numB = typeof h === 'string' ? parseFloat(h) : h;
    if (!isNaN(numA) && !isNaN(numB)) {
        return numA * numB;
    }
    else {
        return 'Invalid input';
    }
};
let divide = (g, h) => {
    let numA = typeof g === 'string' ? parseFloat(g) : g;
    let numB = typeof h === 'string' ? parseFloat(h) : h;
    if (!isNaN(numA) && !isNaN(numB)) {
        if (numB !== 0) {
            return numA / numB;
        }
        else {
            return 'Cannot divide by zero';
        }
    }
    else {
        return 'Invalid input';
    }
};
console.log(add(5, 3));
console.log(add('5', 3));
console.log(add('abc', 3));
console.log(subtract(5, 3));
console.log(subtract('5', 3));
console.log(subtract('abc', 3));
console.log(multiply(5, 3));
console.log(multiply('5', 3));
console.log(multiply('abc', 3));
console.log(divide(6, 3));
console.log(divide('6', 3));
console.log(divide('abc', 3));
console.log(divide(6, 0));
