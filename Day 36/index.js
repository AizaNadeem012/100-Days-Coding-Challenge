"use strict";
// Question No 1:
Object.defineProperty(exports, "__esModule", { value: true });
function leapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
;
console.log(leapYear(2020));
console.log(leapYear(1800));
// Question No 2:
function divideNumber(num) {
    return num % 2 === 0 && num % 3 === 0;
}
;
console.log(divideNumber(12));
console.log(divideNumber(7));
// Question No 3:
function checkString(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}
console.log(checkString("Hello", "everyone"));
console.log(checkString("world", "World"));
