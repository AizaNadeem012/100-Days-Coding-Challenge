"use strict";
// // Question No 1:
Object.defineProperty(exports, "__esModule", { value: true });
// let a = 4;
function randomBoolean() {
    return Math.random() > 5;
}
console.log(randomBoolean());
function generateColor() {
    let color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
    return color;
}
console.log(generateColor());
function randomInt() {
    return Math.floor(Math.random() * 6) + 1;
}
console.log(randomInt());
