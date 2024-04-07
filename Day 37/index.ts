// Question No 1:

let time = new Date();

if(time.getHours() < 12 ){
    console.log("Good Morning");
    
}

// Question No 2:

function grade(score: number){
    if(score >= 90){
        return "A+";
    } else if(score >= 70){
        return "A";
    
    }else if ( score >= 60){
        return "B";
    }else if(score >= 50){
        return "C";
    }else if (score >= 40){
        return "D";
    }else {
        return"F";
    }


}
console.log(grade(76));
console.log(grade(95));
console.log(grade(35));

// Question No 3:

function findAge(age: number): string{
    if(age <= 13){
        return "child";
    } else if ( age < 19){
        return "teenager";
    } else {
        return "adult"
    }
}

console.log(findAge(45));
console.log(findAge(18));

