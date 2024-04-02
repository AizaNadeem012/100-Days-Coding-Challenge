"use strict";
// Question 70: Understanding let in Loops: Write a function that uses a loop with the let keyword to print numbers from 1 to 5. Explain how the let keyword affects the visibility of the loop variable.
// Explain & TIP: The let keyword provides block scope in JavaScript, which means variables declared with let inside a loop are only accessible within that loop. This helps avoid unintended interference with other parts of your code
function loop() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}
// console.log(i)  error: Cannot find name 'i' because "let" keyword is local or block scoped. 
loop();
// Question 71: Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.
// Explain & TIP: let allows you to declare variables that can be reassigned, while const is for variables that should not change once set. Using const helps make your code safer and more predictable.
let myName = 'Naimal';
myName = "Anamta";
const ispaid = true;
// ispaid = false; error: Cannot assign to 'ispaid' because it is a constant.
// Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible outside of it.
// Explain & TIP: Block scope, created by {} in JavaScript, confines let and const variables to that block, enhancing code organization and preventing accidental access from outside the block.
function scope() {
    let scope0 = "local or block scope";
    const scope1 = "local or block scope";
    return { scope, scope1 };
}
// console.log(scope0);  error: Cannot find name 'add'.
// console.log(scope1);  error: Cannot find name 'subtract'.
