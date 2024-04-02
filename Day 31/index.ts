//🚀 Day 31 Challenge: Start Coding! 🚀
//Question 1
console.log("Answer 1")
let  favoriteFruits = ["Apple","Cherry","Banana"]
console.log(favoriteFruits);
favoriteFruits.push("Graps");
console.log(favoriteFruits);
//Question 2
console.log("Answer 2")
console.log(favoriteFruits);
function removeElement(arr){
  let removeWord = favoriteFruits.pop()
  return removeWord
}
console.log(removeElement(favoriteFruits));
//Question 3
console.log("Answer 3")
console.log(favoriteFruits);
favoriteFruits.splice(2 , 1 ,"Mango")
console.log(favoriteFruits);