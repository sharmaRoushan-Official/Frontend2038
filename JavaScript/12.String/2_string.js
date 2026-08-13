let text = "JavaScript";
console.log(text.length);  // total length of the string.




// string methods

// 1. toUpperCase() 

let text1 = text.toUpperCase();
console.log(text1);

// 2. toLowerCase();

let text2 = text.toLocaleLowerCase();
console.log(text2);


// 3.trim()
// Removes spaces from both ends
let text3 = "       Hello          ";
console.log(text3.trim());


// 4. trimStrart();

let text4 = text3.trimStart();
console.log(text4);

// 5. trimEnd()

let text5 = text3.trimEnd();
console.log(text5);

// 6. Concat()

// Joins two strings 


let first = "Hello";
let second = "world";

console.log(first.concat(" ",second));


// 7. repeat()
// Repeats a string

let text6 = "JS";
console.log(text6.repeat(3));


// 8. replace();
// Replaces the first matching text 


let text7 = "I Like Java";

console.log(text7.replace("Java","Python")); 


// 9. replaceAll()

// replaces all occurrences. 

let text8 = "cat cat cat";
console.log(text8.replaceAll("cat","dog"));

// 10. split  
// converts a string into an array 

let text9 = "Apple, Mango, Banana";
console.log(text9.split(","));
