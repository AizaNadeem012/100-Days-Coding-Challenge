"use strict";
//🚀 Day 8 Challenge: Start Coding! 🚀
//Question 1
let intentionalError = [
    "Paris",
    "Tokyo",
    "London",
    "Islamabad",
    "İstanbul",
];
console.log(intentionalError[5]); //  Intentional error: Arrays are zero-indexed, so index 5 is out of bounds.
intentionalError[4] = "Istanbul"; // Correcting the error by accessing a valid index.
//Question 2
let car = "Land Cruiser";
if (car === "Land Cruiser") {
    console.log(true);
}
else {
    console.log(false);
}
//Question 3
//test 1
let age = 10;
if (age === 10 && age <= 10) {
    console.log(`"Age is" ${age},": This person is Kid"`);
}
//test 2
age = 25;
if (age === 25 && age <= 25) {
    console.log(`"Age is" ${age},": This person is Young"`);
}
