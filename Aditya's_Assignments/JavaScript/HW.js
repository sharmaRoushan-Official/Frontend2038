// Home work 

// const prompt = require("prompt-sync")();
// 1. wap to take tow input number from user and swap using third variables.

// console.log(`before swap numbers are a is now ${a} and b is now ${b}`)
// var c;

// c = a;
// a = b;
// b = c;

// console.log(`swapped numbers are a is now ${a} and b is now ${b}`)


// 2. wap to take two inoput and swap without using thrid variabe.

// var a  = parseInt(prompt("Enter number 1: "));
// var b  = parseInt(prompt("Enter number 2: "));
// console.log(`before swap numbers are a is now ${a} and b is now ${b}`)
// a = a + b;
// b = a - b;
// a = a - b;
// console.log(`swapped numbers are a is now ${a} and b is now ${b}`)

// const prompt = require("prompt-sync")();

// var num1 = parseInt(prompt("Enter the number: "));

// if (num1 % 5 === 0 && num1 % 7 === 0){
//     console.log(`${num1} is divisible by 5 or 7`)
// }
// else if(num1 % 5 === 0){
//    console.log(`${num1} is divisible by 5 only `)
// }
// else if(num1 % 7 === 0){
//    console.log(`${num1} is divisible by 7 only`)
// }
// else{
//     console.log(`${num1} is not divisible`)
// }





// let result = (num1 % 5 === 0 || num1 % 7 === 0) ? true : false;
// console.log(result);

// const prompt = require("prompt-sync")();

// var num = parseInt(prompt("Enter a number: "));

// if (num % 9 === 0){
//     console.log(`${num} is a multiple of 9.`)
// }
// else
// {
//     console.log(`${num} is not a multiple of 9.`)
// }

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

// 3. Wap to take input length and breadth of rectagle and find it's area, perimeter and diagonal.
// const prompt = require("prompt-sync")();
// var length = parseInt(prompt("Enter the length of the rectangle: "));

// var breadth = parseInt(prompt("Enter the Breadth of the rectangle: "));

// var perimeter = 2 * (length  + breadth)
// console.log(`The perimeter of the rectangle is : ${perimeter}`)

// var area = length * breadth
// console.log(`The area of the rectangle is: ${area}`)

// var diagonal = Math.sqrt(length ** 2 +breadth ** 2)
// console.log(`The diagonal of the rectangle is: ${diagonal}`)

// 4. Wap to take input radius of circle and find the area and circumference of the circle.
// const prompt = require("prompt-sync")();
// var radius = parseInt(prompt("Enter the radius of the circle: "));
// const pie = 3.147;
// var circum = 2 * pie * radius
// var area = pie * (radius**2)

// console.log(`The circumference of the circle is: ${circum}`)
// console.log(`The area of the circle is : ${area}`)

// 5. wap to create temperature calculatr-
//     a). °F to °C 
//     b). °C to °F
// const prompt = require("prompt-sync")();

// var Celcius = parseInt(prompt("Enter the temperature in celcius: "));

// var farhenheit = (Celcius * 9 / 5) + 32;

// var Celci = (farhenheit - 32 ) * 5 / 9;

// console.log(`The temperature in celcius is: ${Celci}`)
// console.log(`The temperature in farhenheit is: ${farhenheit}`)

// 6. wap to take input five number and find their sum and average.
// const prompt = require("prompt-sync")();
// var a = parseInt(prompt("Enter 1st number: "));
// var b = parseInt(prompt("Enter 2nd number: "));
// var c = parseInt(prompt("Enter 3rd number: "));
// var d = parseInt(prompt("Enter 4th number: "));
// var e = parseInt(prompt("Enter 5th number: "));

// var sum = a + b+ c+d +e
// var avg = sum / 5

// console.log(`The sum of the 5 numbers is : ${sum} and its average is :  ${avg}`)