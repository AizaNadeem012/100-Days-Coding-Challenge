//🚀 Day 26 Challenge: Start Coding! 🚀
const funParameter = (num1: number, name2: number) => {
    return num1 + name2;
  };
  console.log(funParameter(5, 4));
  //Question 2
  const greetUser = (name: String = "anonymous") => {
    console.log(`Hello ${name}!`);
  };
  greetUser("Wajahat");
  greetUser();
  //Question 3
  //According to function Declaraction
  function squareDeclaraction(number: number) {
    return number * number;
  }
  //According to function Expression
  const squarevariable = function squareExpression(number: number) {
    return number * number;
  };
  console.log(squareDeclaraction(4)); //Show 16
  console.log(squarevariable(4)); //Show 16