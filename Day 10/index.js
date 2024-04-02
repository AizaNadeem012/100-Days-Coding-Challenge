"use strict";
//🚀 Day 10 Challenge: Start Coding! 🚀
//Question 1
let personStageName = "wajahat";
let age = 5;
if (personStageName === "wajahat" && age === 5) {
    console.log("These person is child");
}
else if (personStageName === "Wajahat" && age === 10) {
    console.log("These person is Tenager");
}
else if (personStageName === "Wajahat" && age === 18) {
    console.log("These person is young");
}
else if (personStageName === "Wajahat" && age === 35) {
    console.log("These person is Adult");
}
else if (personStageName === "Wajahat" && age === 50) {
    console.log("These person is old");
}
else if (personStageName === "Wajahat" && age === 65) {
    console.log("These person is elder");
}
//Question 2
let favoriteFruit = ["Apple", "Mango", "Graps", "Tomato", "Banana"];
for (let i = 0; i < favoriteFruit.length; i++) {
    if (favoriteFruit[i] === "Apple") {
        console.log(`${favoriteFruit[i]} :This are Favorite Fruit`);
    }
    else if (favoriteFruit[i] === "Mango") {
        console.log(`${favoriteFruit[i]} :This are Favorite Fruit`);
    }
    else {
        console.log(`${favoriteFruit[i]} :This are not Favorite Fruit`);
    }
}
//Question 3
let usernames = ["Admin", "User1", "User2", "User3", "User4"];
usernames.forEach((username) => {
    if (username === "Admin") {
        console.log(`Hello Admin, would you like to these website`);
    }
    else {
        console.log(`Hello ${username}, thank you for login these page `);
    }
});
