// 36. Date Comparison

let date1 = new Date("2023-01-01");
let date2 = new Date("2023-01-02");

if (date1<date2){
    console.log("Date1 is earlier");
}


// 37. Calculating Time Difference


let date3 = new Date("2023-01-01");
let date4 = new Date("2023-01-02");

let difference = date4 - date3; // difference in milliseconds
let seconds = difference / 1000;

console.log(difference);  
console.log(seconds);