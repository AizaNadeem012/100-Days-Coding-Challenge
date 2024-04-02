"use strict";
//Day 1 Challenge: Start Coding! 🚀
// Question 1
// Install Node.js, TypeScript and VS code.
//Question 2
let personName = "Hi Wajahat You Like TypeScript";
console.log(personName);
//Question 3
console.log(personName.toUpperCase());
console.log(personName.toLowerCase());
let titleCase = personName.replace(/\b\w/g, function (c) {
    return c.toUpperCase();
});
console.log(titleCase);
