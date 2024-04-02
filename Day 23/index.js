"use strict";
//🚀Day 23 Challenge: Start Coding! 🚀
//Question 1
const addnumAndString = (num1, strnum) => {
    return num1 + Number(strnum);
};
console.log(addnumAndString(15, "5"));
//Question 2
const mulDecimalNum = (num1, num2) => {
    return Math.round((num1 * num2) * 100) / 100;
};
console.log(mulDecimalNum(.7, .2));
//Question 3
function dividendAndRemainder(dividend, divisor) {
    let quotient = Math.floor(dividend / divisor);
    let remainder = dividend % divisor;
    return { quotient, remainder };
}
console.log(dividendAndRemainder(5, 2));
