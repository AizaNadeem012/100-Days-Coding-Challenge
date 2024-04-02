"use strict";
//🚀 Day 18 Challenge: Start Coding! 🚀
//Question 1
let smartPhone = {
    make: "Tecno",
    model: "Camon 16 Pro",
    specs: {
        storage: "128GB ROM + 4GB RAM.",
        screenSize: "6.8 inches",
        battery: "34 hours ",
    },
};
console.log(smartPhone);
//Question 2
let developerSkills = {
    frameWorks: ["Angular", "Vue", "React"],
    Language: ["Javascript", "Typescript", "Python"],
    tools: ["git", "npm", "Vs code"],
};
let { Language, frameWorks, tools } = developerSkills;
console.log(`Language: ${Language[0]}, FrameWorks: ${frameWorks[0]}, Tools: ${tools[0]}`);
//Question 3
function creatObjectWithDynamicKey(key, value) {
    let dynamicObject = {};
    dynamicObject[key] = value;
    return dynamicObject;
}
let userPreferencr1 = creatObjectWithDynamicKey("Theme", "Light");
let userPreferencr2 = creatObjectWithDynamicKey("Theme", "Dark");
console.log(userPreferencr1);
console.log(userPreferencr2);
