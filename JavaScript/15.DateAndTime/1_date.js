// 1. Dates
let today = new Date();
console.log(today);


// 2. Creating Date Object 

// Method 1
let date  = new Date()
console.log(date);

// 3 .  Current Date 

let today1 = new Date();
console.log(today1);

console.log(today1.getFullYear());
console.log(today1.getMonth());
console.log(today1.getDate());


// 4. Creating a specific Date

// using Number 

let date2 = new Date(2026,6,30);
console.log(date2);


// 5. Date with Time 

// You can provide 
// year 
// month 
// day 
// hours
// minutes 
// seconds 
// milliseconds 

let date3 = new Date(2026,6,30,17,30,45);
console.log(date3);


// Creating Date using string 


let date4 = new Date("2026-07-30");
console.log(date4);


// ISO -  8601-style string such as 
// 2026-07-30T17:30:00Z 

/// 7. Date Object Internally  1970 


let date5 = new Date();
console.log(date5.getTime());

// 8.Timestamp


let date6 = new Date();
console.log(date6.getTime()); // unix epoch


// Using Date.now()  


console.log(Date.now());  // return timestamp


// 9. Date.now() vs new Date()


console.log(Date.now()); // return number.


console.log(new Date());  // return a Date object.










