"use strict";
// Question No 1:
Object.defineProperty(exports, "__esModule", { value: true });
function createCallback(callback, arg1, arg2) {
    callback(arg1, arg2);
}
const add = (a, b) => {
    console.log(a + b);
};
createCallback(add, 4, 4);
// Question No 2:
let numbers = [1, 5, 6, 8, 4, , 19, 80, 2];
let filterNumber = numbers.filter((numbers) => numbers > 10);
console.log(filterNumber);
// Question No 3:
function asynchronousOperation(param1, param2, callback) {
    // Simulate asynchronous operation
    setTimeout(() => {
        const error = Math.random() < 0.5 ? new Error('Something went wrong') : null;
        const result = error ? null : param1 + param2;
        callback(error, result);
    }, 1000);
}
// Usage
asynchronousOperation(2, 3, (error, result) => {
    if (error) {
        console.error('Error occurred:', error);
        // Handle error appropriately, e.g., return error to caller or take corrective action
    }
    else {
        console.log('Result:', result);
        // Proceed with success case
    }
});
