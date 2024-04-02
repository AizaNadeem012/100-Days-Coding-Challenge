//🚀 Day 29 Challenge: Start Coding! 🚀
//Question 1
function findCodePosition(str: string): number {
    return str.indexOf("to"); 
  }
  console.log(findCodePosition("Learn to code with JavaScript"));
  //Question 2
  function checkText (str:string){
  if(str.includes("Javascript")){
    console.log(true);
    
  }else{
    console.log(false);
    
  }
  }
  checkText("I Love Javascript");
  //Question 3
  function extractFirstChar (str:string){
  return str.substring(0 , 10);
  }
  console.log(extractFirstChar("Hello Coders You Love Typescript!"));