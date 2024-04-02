  //🚀 Day 17 Challenge: Start Coding! 🚀
//Question 1
const hobbys = (...hobbyname: string[]) => {
    for (let i in hobbyname) {
      console.log(`I enjoy This ${hobbyname[i]} `);
    }
  };
  let hobby: string[] = ["coding", "Art", "Skydive"];
  hobbys(...hobby);
  //Question 2
  let salam: string = "Assalam o Alikum";
  let template1: string = `${salam} all of you.`;
  console.log(template1);
  let houseName: string = "Governor House";
  let template2: string = `Today at ${houseName}
  Have a nice day.`;
  console.log(template2);
  let tsCreater: string = "Anders Hejlsberg.";
  let template3: string = `${tsCreater}: Create a 
  Typescript Programming Language`;
  console.log(template3);
  //Question 3
  function calculateAeraSimple(width: number, height: number): number {
    return width * height;
  }
  console.log(calculateAeraSimple(5, 10));
  const calculateAeraArrow = (width: number, height: number): number =>
    width * height;
  console.log(calculateAeraArrow(10, 15));