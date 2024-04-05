"use strict";
// // Question No 1:
Object.defineProperty(exports, "__esModule", { value: true });

function randomBoolean() {
    return Math.random() > 5;
}
console.log(randomBoolean());

/Question No 2:

function generateColor() {
    let color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
    return color;
}
// Question No 3:

console.log(generateColor());
function randomInt() {
    return Math.floor(Math.random() * 6) + 1;
}
console.log(randomInt());
