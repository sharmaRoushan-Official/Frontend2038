// 20. Local Time VS UTC 

// JavaScript provides tow sets of methods 

// Local 
// getFullYear()
// getMonth()
// getDate()
// getHours()


// UTC
// getUTCFullYear()
// getUTCMonth()
// getUTCDate()
// getUTCHours()


// Example: 

let date = new Date();
console.log(date.getHours);
console.log(date.getUTCHours());

// The value may differ depending on the user's timezone 

// 21.UTC Methods 

// getUTCFullYear()
// getUTCMonth() 
// getUTCDate() 
// getUTCDay() 
// getUTCHours() 
// getUTCMinutes() 
// getUTCSeconds()
// getUTCMilliseconds()


let date1 = new Date();
console.log("===============");
console.log(date1.getUTCDate());
console.log(date1.getUTCDay());
console.log(date1.getUTCFullYear());
console.log(date1.getUTCHours());
console.log(date1.getUTCMinutes());
console.log(date1.getUTCSeconds());
console.log(date1.getUTCMilliseconds());
console.log(date1.getUTCMonth());


// 22. Setting Date Values 

// javaScript also provides set methods 

let date2 = new Date();
date2.setFullYear(2030);
console.log(date2);

// setMonth() 

date2.setMonth(0);
console.log(date2);

// setDate()

date2.setDate(15);
console.log(date2);

// setHours() 
date2.setHours(10); 
console.log(date2);


// setMinutes() 

let date3 = new Date();
date3.setMinutes(30);
console.log(date3);


// setseconds() 

date3.setSeconds(45);
console.log(date3);

// 25. toString() :

let date4 = new Date();

console.log(date4.toString());


// 26.toDateString 
// Retursn only the date protion in a readable format 

let date5 = new Date();
console.log(date5.toDateString());


// 27. toTimeString() 

console.log(date5.toTimeString());


//28. One of the most important methods for APIs and Data storage.
console.log(date5.toISOString());

// 29.toUTCString() 

let date7 = new Date();

console.log(date.toUTCString());

// 30.LocalDateString() 

let date8 = new Date() ;

console.log(date8.toLocaleDateString());


// 31.toLocaleTimeString
console.log(date8.toLocaleTimeString());

// 33. Professional Date Formatting 

console.log("--------------------------");
let date9 = new Date();

let formatted = date9.toLocaleDateString("en-IN",{
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
});
console.log(formatted);
