"use strict";
// Question No 1:
Object.defineProperty(exports, "__esModule", { value: true });
function currentDateTime() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth()).padStart(2, '0');
    const year = now.getFullYear();
    return `${day}-${month}-${year}`;
}
console.log(currentDateTime());
// Question No 2:
let today = new Date();
let newYear = new Date(today.getFullYear(), 3, 24);
if (today.getMonth() === 3 && today.getDate() > 24) {
    newYear.setFullYear(newYear.getFullYear() + 1);
}
let oneDay = 1000 * 60 * 60 * 24;
let diff = (newYear.getTime() - today.getTime() / oneDay);
console.log(newYear);
// Question No 3:
function myNextBirthday(month, day) {
    const today = new Date();
    let year = today.getFullYear();
    const birthday = new Date(year, month - 1, day);
    if (birthday < today) {
        birthday.setFullYear(year + 1);
    }
    return birthday;
}
const nextBirthday = myNextBirthday(5, 8);
console.log("Next birthday on:", nextBirthday.toLocaleDateString());
