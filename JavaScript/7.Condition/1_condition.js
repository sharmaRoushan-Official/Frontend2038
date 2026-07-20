// Q. Write a program to find the greatest of two number;

// const prompt = require("prompt-sync")();

// var num1 = parseInt(prompt("Enter first number: "));
// var num2 = parseInt(prompt("Enter second number: "));

// if (num1>num2){
//     console.log(`${num1} is greater than ${num2}`);
// }
// else{
//     console.log(`${num2} is greater than ${num1}`);
// }

// 2. Wirte a program to check number is divisible by 5 or 7.
// ----------------------------------------------------------------

// const prompt = require("prompt-sync")();

// var num1 = parseInt(prompt("Enter the number: "));

// if (num1 % 5 === 0 || num1 % 7 === 0){
//     console.log(`${num1} is divisible by 5 or 7`)
// }
// else{
//     console.log(`${num1} is not divisible`)
// }


// var res = (num1 % 5 === 0 || num1 % 7 === 0);
// console.log(`Yes it is divisible  ${res}`)



const prompt = require("prompt-sync")();

// var num1 = parseInt(prompt("Enter the number: "));

// if (num1 % 5 === 0 && num1 % 7 === 0){
//     console.log(`${num1} is divisible by 5 or 7`);
// }
// else if(num1 % 5 === 0 && num1 % 7 != 0){
//    console.log(`${num1} is divisible by 5 only `);
// }
// else if(num1 % 7 === 0 && num1%5!=0){
//    console.log(`${num1} is divisible by 7 only`);
// }
// else{
//     console.log(`${num1} is not divisible`);
// }

// ternary operator 

// let result = (num1 % 5 === 0 || num1 % 7 === 0) ? true : false;
// console.log(result);

// var res = (num1%5==0)?`${num1} is divisible by 5`:`${num1} is not divisible by 5`;
// console.log(res);


// Q. Wap to check user input number is multiple of 9.
var num = parseInt(prompt("Enter a number: "));

if (num % 9 === 0){
    console.log(`${num} is a multiple of 9.`)
}
else
{
    console.log(`${num} is not a multiple of 9.`)
}

// Wap to take input character and check it's vowel or consonent.
// var ch = prompt("Enter a string: ");
// const vowels = "aeiou";
// if (ch.length === 1){
//    if (vowels.includes(ch)){
//    console.log(`${ch} is a vowel`)
//    }
//    else{
//     console.log(`${ch} is a consonant`)
//    }
// }