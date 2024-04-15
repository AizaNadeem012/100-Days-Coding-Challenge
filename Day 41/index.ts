
// // // Question No 1:

for(let i = 0; i <= 10; i++){
    if(i === 5){
       continue;
   }
    console.log(i);
}
//Question No 2:

let num : number = 10;

while(num > 0){
   if(num === 5){
       break;
   }

   console.log(num);
   num--;   
}
// Question No 3:

function findVowel(str : string){
   let vowels = "aeiouAEIOU";
   for(const char of str){
       if(vowels.includes(char)){
           console.log(`First Vowel Find`);
           break;
           
       }
       console.log(char);
   }
}

findVowel('gtstuio');



