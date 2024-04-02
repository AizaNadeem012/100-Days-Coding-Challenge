"use strict";
//🚀 Day 5 Challenge: Start Coding! 🚀
// Question 1
let vehicles = ["Bike", "Car", "Bus", "Van", "auto"];
vehicles.forEach((vehicle) => {
    console.log(`I would Like to Own a Honda: ${vehicle}`);
});
// Question 2
let inivitedPerson = ["Wajahat Ali", "Ahmed", "Usman Ali", "Anus"];
inivitedPerson.forEach((invitation) => {
    console.log(`${invitation}: Invited for a dinner party at Tomorrow.`);
});
//Question 3
inivitedPerson.splice(3, 3, "Usaid");
inivitedPerson.forEach((invitation) => {
    console.log(`${invitation}: Invited for a dinner party at Tomorrow.`);
});
