"use strict";
//🚀 Day 32 Challenge: Start Coding! 🚀
//Question 1
let cars = ["Honda Civic", "Chevrolet Trax", "Kia Forte", "Audi A3"];
console.log(cars);
let carLength = cars.map((car) => {
    return car.length;
});
console.log(carLength);
//Question 2
let nums = [53, 64, 76, 83, 90, 1, 2, 3, 9, 6, 7, 5, 12, 45, 67, 99];
console.log(nums);
function greaterThanTen(num) {
    let order = num.filter((num) => num > 10);
    return order;
}
console.log(greaterThanTen(nums));
//Question 3
let sum = [19, 28, 37, 45, 89];
function sumForReduce(sum) {
    return sum.reduce((accumulator, current) => accumulator + current, 0);
}
console.log(sumForReduce(sum));
