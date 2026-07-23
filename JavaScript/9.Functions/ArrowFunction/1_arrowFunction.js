//1. Normal Function 

function add(a,b){
    return a+b
}
console.log(add(5,6)); // Output: 11


// 2. Arrow Function

const add1=(a,b) => a+b;  // single line arrow function with implicit return
console.log(add1(5,6)); // Output: 11


// other method 

const add2 = (a,b) => {
    return a+b;
}
var result = add2(10,5);
console.log(result); // Output: 15