//🚀 Day 6 Challenge: Start Coding! 🚀
//Question 1
inivitedPerson = ["Wajahat Ali", "Ahmed", "Usman Ali", "Anus"];
console.log(inivitedPerson);
console.log("I have a big Dinner table");
//adding more Guest for a dinner party
inivitedPerson.unshift("Noor Muhammed");
inivitedPerson.splice(3, 0, "Nadeem");
inivitedPerson.push("Roohan");
console.log(inivitedPerson);
//Question 2
for (let i = 0; i < inivitedPerson.length; i++) {
  console.log(`sorry ${inivitedPerson[i]} I have no big Dinner Table`);
}
inivitedPerson.splice(2, 5);
console.log(inivitedPerson);
//Question 3
let visitCountry = ["New Zealand.", "Australia.", "Brazil.", "Norway", "Italy"];
visitCountry.forEach((country) => {
  console.log(`I want to go ${country}`);
});