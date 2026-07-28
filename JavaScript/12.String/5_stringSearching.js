// 1. indexOf 

let text = "JavaScript";

console.log(text.indexOf("a"));

// lastIndexOf 

console.log(text.lastIndexOf("a"));

// includes 
// check if text exists or not ?

console.log(text.includes("Script"));


// startswith()

console.log(text.startsWith("Java"));

// endswith()

console.log(text.endsWith("Java"));
console.log(text.endsWith("Script"));


// match 
// Returned matched text. 
let text1 = "I Love java";
console.log(text1.match("java"));