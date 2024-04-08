"use strict";
const add = (g, h) => {
    const numA = typeof g === 'string' ? parseFloat(g) : g;
    const numB = typeof h === 'string' ? parseFloat(h) : g;
    if (!isNaN(numA) && !isNaN(numB)) {
        return numA + numB;
    }
    else {
        return 'Invalid input';
    }
};
const subtract = (g, h) => {
    const numA = typeof g === 'string' ? parseFloat(g) : g;
    const numB = typeof h === 'string' ? parseFloat(h) : h;
    if (!isNaN(numA) && !isNaN(numB)) {
        return numA - numB;
    }
    else {
        return 'Invalid input';
    }
};
const multiply = (g, h) => {
    const numA = typeof g === 'string' ? parseFloat(g) : g;
    const numB = typeof h === 'string' ? parseFloat(h) : h;
    if (!isNaN(numA) && !isNaN(numB)) {
        return numA * numB;
    }
    else {
        return 'Invalid input';
    }
};
const divide = (g, h) => {
    const numA = typeof g === 'string' ? parseFloat(g) : g;
    const numB = typeof h === 'string' ? parseFloat(h) : h;
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
