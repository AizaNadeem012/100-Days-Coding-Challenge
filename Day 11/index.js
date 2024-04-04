"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//🚀 Day 11 Challenge: Start Coding! 🚀
//Queston 1
let userList = [];
if (userList.length == 0) {
    console.log("find a User");
}
else {
    console.log("Greeting Users");
}
//Question 2
userList = [
    "wajahat Ali sadique",
    "Ahmed",
    "Usaid",
    "Anus",
    "Usman Ali sadique",
];
for (let i = 0; i < userList.length; i++) {
    if (userList[i] === "wajahat Ali sadique") {
        console.log(`${userList[i]}; This Person are Unique`);
    }
    else if (userList[i] === "Usman Ali sadique") {
        console.log(`${userList[i]}; This Person are Unique`);
    }
    else {
        console.log(`${userList[i]}:This Person are Normal `);
    }
}
//Question 3
let ordinalNumber = [1, 2, 3, 4, 5];
let suffix = "";
for (let a = 0; a < ordinalNumber.length; a++) {
    if (ordinalNumber[a] === 1) {
        suffix = "st";
        console.log(`${ordinalNumber[a]}${suffix}`);
    }
    else if (ordinalNumber[a] === 2) {
        suffix = "nd";
        console.log(`${ordinalNumber[a]}${suffix}`);
    }
    else if (ordinalNumber[a] === 3) {
        suffix = "rd";
        console.log(`${ordinalNumber[a]}${suffix}`);
    }
    else if (ordinalNumber[a] === 4) {
        suffix = "th";
        console.log(`${ordinalNumber[a]}${suffix}`);
    }
    else if (ordinalNumber[a] === 5) {
        suffix = "th";
        console.log(`${ordinalNumber[a]}${suffix}`);
    }
}
