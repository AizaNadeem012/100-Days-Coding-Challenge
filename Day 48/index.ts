
// Question No 1:

const promise = new Promise ((resolve) => {
    setTimeout(() => {
     resolve ("Hello Aiza")
    }, 4000)
 })

 promise.then((message) => console.log(message));

//  Question No 2:

const p = new Promise((resolve, reject) => {
    const number = Math.random() * 2;
    if (number){
        resolve (number)
    }else {
        reject (new Error ("You are failure"))
    }
})

p.then((result) => console.log(result));
p.catch((error) => console.log(error.message));

// Question No 3:
let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("This is First Promise");
      resolve("Hello Aiza")
      
    }, 2000)
});
let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("This is Second Promise");
        resolve("Hello Areeba")
        
    } , 2000)
});
let promise3 = new Promise((resolve , reject) => {
    setTimeout(() => {
        console.log("This is third promise");
        reject("Hello Ahmed")
        
    }, 2000)
})
Promise.all([promise1, promise2, promise3]).then((result) => {
    console.log(`Result : ${result}`);
    
}) .catch((error) => {
    console.log(`Error : ${error}`);
    
});
























