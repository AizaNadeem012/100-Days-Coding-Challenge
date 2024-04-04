"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//🚀 Day 17 Challenge: Start Coding! 🚀
//Question 1
const hobbys = (...hobbyname) => {
    for (let i in hobbyname) {
        console.log(`I enjoy This ${hobbyname[i]} `);
    }
};
let hobby = ["coding", "Art", "Skydive"];
hobbys(...hobby);
//Question 2
let salam = "Assalam o Alikum";
let template1 = `${salam} all of you.`;
console.log(template1);
let houseName = "Governor House";
let template2 = `Today at ${houseName}
  Have a nice day.`;
console.log(template2);
let tsCreater = "Anders Hejlsberg.";
let template3 = `${tsCreater}: Create a 
  Typescript Programming Language`;
console.log(template3);
//Question 3
function calculateAeraSimple(width, height) {
    return width * height;
}
console.log(calculateAeraSimple(5, 10));
const calculateAeraArrow = (width, height) => width * height;
console.log(calculateAeraArrow(10, 15));
