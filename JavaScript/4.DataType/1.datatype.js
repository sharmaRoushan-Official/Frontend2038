// Primitive data type 

// 1. number 

var a = 20;
var b = 35.45;
console.log(a);
console.log(typeof(a));
console.log(b); 
console.log(typeof(b));

// 2. string 
var str1 = 'a';
console.log(str1);
console.log(typeof(str1));


// 3.Boolean 

var a1 = true;
var b1 = false;

console.log(a1);
console.log(typeof(a1));
console.log(b1);
console.log(typeof(b1));

// 4.undefined 

var a2 = undefined  // data type - undefined
console.log(a);
console.log(typeof(a2));

// 5. null 

a3 = null;  // object 
console.log(a3);
console.log(typeof(a3));

// 6. symbol

// Creating symbols
const sym1 = Symbol("id");
const sym2 = Symbol("id");

// Uniqueness check
console.log(sym1 === sym2); // false

// Accessing the description
console.log(sym1.description); // "id"



// 7. bigint 

// firstmethod 
a5 = BigInt(1651655656);
console.log(a5);
console.log(typeof(a5));


// secondmethod 

a6 = 1311561n;
console.log(a6);
console.log(typeof(a6));


