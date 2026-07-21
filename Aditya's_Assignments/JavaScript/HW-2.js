// write a program to take input of 2 numbers and find the greatest of them

const prompt = require("prompt-sync")();

var num1 = parseInt(prompt("Enter the first number: "));

var num2 = parseInt(prompt("Enter the second number:  "));

if (num1 > num2){
    console.log(`${num1} is greater than ${num2}`)
}
else{
    console.log(`${num2} is greater than ${num1}`)
}