"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//🚀 Day 27 Challenge: Start Coding! 🚀
//Question 1
let car1 = {
    make: "Rolls Royce",
    model: "Spectre",
    year: 2023,
};
console.log(car1.model);
//Question 2
let car2 = {
    make: "Rolls Royce",
    model: "Spectre",
    year: 2023,
};
car2.color = "blue",
    car2.year = 2024;
console.log(car2);
//Question 3
function iteratingOverObject(obj) {
    for (let property in obj) {
        console.log(`${property} : ${obj[property]}`);
    }
}
iteratingOverObject({
    name: "wajahat Ali",
    age: 17,
    study: "IT at Governer House.",
});
