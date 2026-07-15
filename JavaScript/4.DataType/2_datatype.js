// 1 var --- Function Block 

var x = 5;   // global variable 
console.log(x);
{
    var x=25;  // local variable iniside the block
    console.log(x);
}
console.log(x);  // global variable is changed because var is function scoped, not block scoped //25


// 2. let --- Function Block

let y = 10;  // global variable is 10
console.log(y);
{
    let y = 20;  // local variable inside the block is 20
    console.log(y);
}
console.log(y);  // global variable is not changed because let is block scoped //10


// 3. const --- Function Block

const z = 15;  // global constant is 15
console.log(z);
// const z = 30;  // This would cause a TypeError because z is already declared as a constant
//z = 30; // This would cause a TypeError because z is a constant and cannot be reassigned
{
    const z = 25;  // local constant inside the block is 25
    console.log(z);
}
console.log(z);  // global constant is not changed because const is block scoped //15

const pi = 3.147