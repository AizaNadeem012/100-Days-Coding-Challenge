"use strict";
//🚀 Day 15 Challenge: Start Coding! 🚀
//Question 1
let magicianNames = [
    "Harry Houdini",
    "David Blaine",
    "Derren Brown",
    "Ricky Jay",
    "Criss Angel",
];
function makeMagician(magicianNames) {
    let greatMagician = [];
    magicianNames.forEach((magician) => {
        greatMagician.push(`${magician} the great`);
    });
    return greatMagician;
}
let greatMagician = makeMagician(magicianNames.slice()); // Return new Array
console.log("Original Name");
console.log(magicianNames);
console.log("Great Name");
console.log(greatMagician);
//Question 2
function makeSandwich(...item) {
    console.log(`Making a Sandwish with ${item.join(",")}.`);
}
console.log("Bread", "Tomatoas");
console.log("cheese", "Apple");
console.log("spinach", "Jam");
//Question 3
function makeCar(manufacturer, model, ...options) {
    let car = {
        manufacturer,
        model,
    };
    options.forEach(([key, value]) => car[key] = value);
    ;
    return car;
}
console.log(makeCar("Toyota", "Corolla", ["color", "red"], ["year", "2022"]));
console.log(makeCar("Rolls-Royce", "Spectre", ["color", "gray"], ["year", "2024"]));
