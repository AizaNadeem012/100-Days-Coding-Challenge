// 🚀 Day 21 Challenge: Start Coding! 🚀
//Question 1
enum vehical {
    bike = "Ninga H2R",
    car = "Land Cruiser",
    truck = "Toyota Hilux",
  }
  let vehical1, vehical2, vehical3: vehical;
  vehical1 = vehical.bike;
  vehical2 = vehical.car;
  vehical3 = vehical.truck;
  console.log(vehical1);
  console.log(vehical2);
  console.log(vehical3);
  //Question 2
  interface studentsInfo {
    name: string;
    age: number;
    school: string;
  }
  let student1: studentsInfo = {
    name: "Wajahat Ali",
    age: 17,
    school: "Hassan Public School",
  };
  let student2: studentsInfo = {
    name: "Usman Ali",
    age: 2,
    school: "Happy Palace Grammar School",
  };
  console.log(student1);
  console.log(student2);
  //Question 3
  type shapes = {
    kind: "Circle" | "rectangles";
    radius?: number;
    height?: number;
    width?: number;
  };
  let circle: shapes = {
    kind: "Circle",
    radius: 5,
  };
  let rectangles:shapes = {
      kind:"rectangles",
      height:10,
      width:20,
  }
  console.log(circle);
  console.log(rectangles);
  
  