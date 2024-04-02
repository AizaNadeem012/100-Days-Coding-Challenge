"use strict";
//🚀 Day 30 Challenge: Start Coding! 🚀
//Question 1
function roundNumber(num) {
    return Math.round(num);
}
console.log(roundNumber(3.4));
console.log(roundNumber(3.7));
//Question 2
function strToNum(str) {
    console.log(str);
    return Number(str);
}
console.log(strToNum("12345.8"));
// Question 3
function checkNan(num) {
    return isNaN(num);
}
console.log(checkNan("Hello"));
console.log(checkNan(12345));
