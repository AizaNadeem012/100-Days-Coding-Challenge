"use strict";
//🚀 Day 28 Challenge: Start Coding! 🚀
//Question 1
function car(carName) {
    return carName.length;
}
console.log(car("Wajahat"));
function converCases(BikeName) {
    let upCase = BikeName.toUpperCase();
    let lowCase = BikeName.toLowerCase();
    console.log("UpperCase ", upCase, "LowerCase ", lowCase);
}
converCases("Wajahat Ali");
//Question 3
function replaceJavacsriptToTypescript(word) {
    return word.replace(/Javascript/g, "Typscript");
}
console.log(replaceJavacsriptToTypescript("I Love Javascript and Javascript is very awsome!"));
