
// Logical operators

// OR Operator:

let a = 7;
let b = 8;

console.log(a < b || a > b );


// AND Operator:

let c = 9;

let d = 8;

console.log(c != 9 && d == 8);

// NOT Operator:

let e = !true;

let f = !false;

console.log(e, f);



//Nullish coalescing operator '??' Check Undefined and Null


let user = {
    student: {
        name: null,
        age: 0,


    }
}

console.warn(user.student.name ?? "Unknown");
console.warn(user.student.age ?? 18 );






















































