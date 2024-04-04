"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//🚀 Day 19 Challenge: Start Coding!🚀
//Question 1
let numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers);
let doubleNumber = numbers.map((number) => number * 2);
console.log(doubleNumber);
//Question 2
let mixedItems = [
    1, "Honda Passport", 5, "Hyundai", 4, "Audi", 3, "Bmw", "Volkswagen", 2
];
console.log(mixedItems);
let stringItems = mixedItems.filter((item) => typeof item === "string");
console.log(stringItems);
//Question 3
let grade = [50, 63, 55, 69, 70, 54, 80, 95, 61, 59];
grade.sort();
grade.forEach((grade) => {
    if (grade >= 50 && grade < 60) {
        console.log(`Average Grade: ${grade}`);
    }
    else if (grade > 60 && grade < 70) {
        console.log(`High Grade: ${grade}`);
    }
    else {
        console.log(`Top Grade: ${grade}`);
    }
});
