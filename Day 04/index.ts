//🚀 Day 4 Challenge: Start Coding! 🚀
// Question 1
//part 1
//Print a PersonName
personName = "Hi Wajahat You Like TypeScript";
console.log(personName);
//Name "Wajahat" Date: 3/6/204 Message: "Print a PersonName";
//part 2
//personName convert a toUpperCase , toLowerCase , titleCase.
console.log(personName.toUpperCase());
console.log(personName.toLowerCase());
titleCase = personName.replace(/\b\w/g, function (c) {
  return c.toUpperCase();
});
console.log(titleCase);
//Name "Wajahat" Date: 3/6/204 Message: "personName convert a toUpperCase , toLowerCase , titleCase.";
//Question 2
let Names = ["Wajahat Ali", "Ahmed", "Usman Ali", "Anus", "Usaid"];
for (let i = 0; i < Names.length; i++) {
  console.log(Names[i]);
}
//Question 3
for (let i = 0; i < Names.length; i++) {
  console.log(
    `Assalam u Alikum: ${Names[i]} Would you like to learn some "Typescript" today.`
  );
};