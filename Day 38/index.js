"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//🚀 Day 38 Challenge: Start Coding! 🚀
//Question 1
let contries = new Map();
contries.set("USA", "Washington, D.C.");
contries.set("France", "Paris");
contries.set("Japan", "Tokyo");
console.log(contries);
//Question 2
contries = new Map();
contries.set("USA", "Washington, D.C.");
contries.set("France", "Paris");
contries.set("Japan", "Tokyo");
function logCaptialOfCanada(contries) {
    if (contries.has("Canada")) {
        console.log(`The captial of Canada is ${contries.get("Canada")}`);
    }
    else {
        console.log("Canada is not in the Map.");
    }
}
logCaptialOfCanada(contries);
//Question 3
let student = new Map();
student.set(1, "Aiza Nadeem");
student.set(2, "Ahmed Ali");
student.set(3, "Usman Ali");
student.forEach((name, id) => {
    console.log(`Student ID :${id}, Name ${name}`);
});
