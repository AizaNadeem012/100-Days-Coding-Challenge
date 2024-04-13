//🚀 Day 39 Challenge: Start Coding! 🚀
//Question 1
function getDayNum(dayNum: number): void {
    switch (dayNum) {
      case 1:
        console.log("Sunday");
        break;
      case 2:
        console.log("Monday");
        break;
      case 3:
        console.log("Tuesday");
        break;
      case 4:
        console.log("Wednesday");
        break;
      case 5:
        console.log("Thursday");
        break;
      case 6:
        console.log("Friday");
        break;
      case 7:
        console.log("Saturday");
        break;
      default:
        console.log("Invaild day number");
        break;
    }
  }
  getDayNum(1);
  //Question 2
  function getMounthNum(mounth: number): void {
    switch (mounth) {
      case 12:
      case 1:
      case 2:
        console.log("Winter");
        break;
      case 3:
      case 4:
      case 5:
        console.log("Spring");
        break;
      case 6:
      case 7:
      case 8:
        console.log("Summer");
        break;
      case 9:
      case 10:
      case 11:
        console.log("Fall");
        break;
      default:
        console.log("Invalid mounth number");
  
        break;
    }
  }
  getMounthNum(4);
  //Question 3
  function getGrade(grade: string) {
    switch (grade) {
      case "A":
        console.log("Excellent");
        break;
      case "B":
        console.log("Good");
        break;
      case "C":
        console.log("Fair");
        break;
      case "D":
        console.log("Poor");
        break;
      case "F":
        console.log("Fail");
        break;
      default:
        console.log("Invaild Grade");
        break;
    }
  }
  getGrade("G")
