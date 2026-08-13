// 1. slice() 

let text = "JavaScript";

console.log(text.slice(0,4));

// negative 

console.log(text.slice(-1));
console.log(text.slice(-3));

// substring 

let text1 = "JavaScript";
console.log(text1.substring(0,4));
console.log(text1.substring(-1000));  // no effect 

// substring() does not support negative indexes; 

// substr() (Deprecated) 

let text2 = "JavaScript";

console.log(text2.substr(4,6)); 

// Note: Avoid substr() in new code beacuse it is deprecated.

// -------------------------------------------- 

// Difference 
