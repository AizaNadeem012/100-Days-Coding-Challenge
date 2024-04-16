"use strict";
// Question No 1:
Object.defineProperty(exports, "__esModule", { value: true });
const traditionalFunction = function (a, b) {
    return a + b;
};
const arrowFunction = (a, b) => a + b;
console.log(traditionalFunction(5, 9));
console.log(arrowFunction(4, 4));
// // Question No 2:
const multipleParameter = (a, b, c) => a + b + c;
console.log(multipleParameter(4, 5, 10));
// Question No 3:
console.log("ANSWER OF QUESTION NO 3:");
const traditionalVsArrow = {
    value: "traditionalVsArrow value",
    traditionalFunction: function () {
        console.log("Traditional function:", this.value);
    },
    arrowFunction: () => {
        console.log("Arrow function:", this.value);
    },
};
traditionalVsArrow.traditionalFunction();
traditionalVsArrow.arrowFunction();
