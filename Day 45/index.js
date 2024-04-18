"use strict";
// Question No 1:
Object.defineProperty(exports, "__esModule", { value: true });
let object = {
    name: "Aiza",
    age: 18,
    friends: ["Kabshah", "Laiba"],
    city: "Karachi",
};
let convertFile = JSON.stringify(object);
console.log(convertFile);
// Question No 2:
const stringName = '{name: "Aiza", age: 18,friends: ["Kabshah", "Laiba"],city: "Karachi"}';
const parseNumber = JSON.parse(stringName);
console.log(parseNumber);
// Question No 3:
const person = {
    name: "Alice",
    age: 30,
    city: "Wonderland",
};
const jsonString = JSON.stringify(person, null, 2);
console.log(jsonString);
