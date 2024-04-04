"use strict";
// Question 73: Assigning and Updating Variables: Create a function where you declare a variable using let and assign an initial value. Then, update its value within the same function and log both the initial and updated values.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: In JavaScript, you can assign a value to a variable with = and later update it as needed. This is fundamental for keeping track of changing data within your programs.
function assign_update() {
    let age = 23;
    console.log(`Initial value: ${age}`);
    age = 24;
    console.log(`Updated value: ${age}`);
}
assign_update();
// Question 74: Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.
// Explain & TIP: Swapping variables is a common task. You can use a temporary variable to hold one value while you swap them around. It's like juggling where you temporarily place one ball in a basket to free up your hand.
let temp = 5;
console.log(`Value of a: ${temp}`);
let b = 10;
console.log(`Value of b: ${b}`);
let a = b;
b = temp;
console.log(`Value of a  and b after swaping: a is ${a} and b is ${b}`);
// Question 75: Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations. Start with x = 4 and perform a series of operations (addition, subtraction, multiplication, division) on x using compound operators.
// Explain & TIP: Compound assignment operators combine an arithmetic operation with assignment, making your code cleaner and more concise. Instead of writing x = x + 2, you can simply write x += 2.
let x = 7;
console.log(x += 3);
console.log(x -= 3);
console.log(x *= 3);
console.log(x /= 3);
