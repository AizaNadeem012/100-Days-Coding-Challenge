"use strict";
//🚀 Day 26 Challenge: Start Coding! 🚀
const funParameter = (num1, name2) => {
    return num1 + name2;
};
console.log(funParameter(5, 4));
//Question 2
const greetUser = (name = "anonymous") => {
    console.log(`Hello ${name}!`);
};
greetUser("Wajahat");
greetUser();
//Question 3
//According to function Declaraction
function squareDeclaraction(number) {
    return number * number;
}
//According to function Expression
const squarevariable = function squareExpression(number) {
    return number * number;
};
console.log(squareDeclaraction(4)); //Show 16
console.log(squarevariable(4)); //Show 16
