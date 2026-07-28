// write a program to take input of 2 numbers and find the greatest of them

const prompt = require("prompt-sync")();

// var num1 = parseInt(prompt("Enter the first number: "));

// var num2 = parseInt(prompt("Enter the second number:  "));

// if (num1 > num2){
//     console.log(`${num1} is greater than ${num2}`)
// }
// else{
//     console.log(`${num2} is greater than ${num1}`)
// }
// ternary Solution
// const message = ( num1 > num2 ) ? `${num1} is greater than ${num2} !` : `${num2} is greater than ${num1}` 
// console.log(message)

// write a program to take input of 2 numbers and find the greatest of them

// write a program to find a number is even or odd.

// if (num1 % 2 == 0){
//     console.log(`${num1} is an even number.`)

// }
// else{
//     console.log(`${num2} is an odd number.`)
// }
// WAP to input a character is a vowel or consonant.
// var ch  = prompt("Enter the character : ");
// const vowels = "aeiuo"
// if (ch.length ===1){
//     if(vowels.includes(ch)){
//         console.log(`${ch} is a vowel.`)
//     }
//     else{
//         console.log(`${ch} is a consonant`)
//     }
// }

// WAP to find if a year is a leap year or not

// var year = prompt("Enter the year: ");

// if(year % 4 === 0 && year % 100 != 0){
//      console.log(`${year} is a leap year`)

// }
// else{
//        console.log(`${year} is not a leap year`)
// }

// WAP to input a character and check if it a upper, lower, digit or special character.
//  var charac = prompt("Enter the character : ")

//  var ch = charac[0]
// const specials = "~`!@#$%^&*()-_=+/|\[]{},.:;"

// if(ch === ch.toUpperCase() && ch !== ch.toLowerCase()){
//     console.log(`${ch} is a upper case character`)
// }
// else if(ch === ch.toLowerCase() && ch !== ch.toUpperCase()){
//     console.log(`${ch} is a lower case character`)
// }
// else if (/\d/.test(ch)){
//     console.log(`${ch} is a digit`)
// }
// else if (specials.includes(ch)){
//     console.log(`${ch} is a speical character`)
// }
// write a program to input subject marks and find its percentage , find the following grade A ->> 90 TO 100
// B ->> 80 to 89 ETC till E

// Solution using if-else-if ladder
var subject1 = parseInt(prompt("Enter marks for Subject 1: "));
var subject2 = parseInt(prompt("Enter marks for Subject 2: "));
var subject3 = parseInt(prompt("Enter marks for Subject 3: "));
var subject4 = parseInt(prompt("Enter marks for Subject 4: "));
var subject5 = parseInt(prompt("Enter marks for Subject 5: "));

var totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;
var percentage = (totalMarks / 500) * 100;

console.log(`Total Marks: ${totalMarks}/500`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);

if (percentage >= 90 && percentage <= 100) {
    console.log("Grade: A");
} else if (percentage >= 80 && percentage < 90) {
    console.log("Grade: B");
} else if (percentage >= 70 && percentage < 80) {
    console.log("Grade: C");
} else if (percentage >= 60 && percentage < 70) {
    console.log("Grade: D");
} else if (percentage >= 0 && percentage < 60) {
    console.log("Grade: E");
} else {
    console.log("Invalid marks entered.");
}
