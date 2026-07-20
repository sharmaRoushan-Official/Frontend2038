// Q. Write a program to display 1 to 10 natural number using while loop. 

// var i = 1

// while (i<=10){
//     console.log(i);
//     i+=1;
// }

// Q. Wap to display Even number from 1 to 10.

// var i = 1;

// while (i<=10){
//     if (i%2==0){
//         console.log(i);
//     }
//     i+=1;
// }



// Q. Find the sum of user input value starts from 1 using while loop. 

// 1,10 = 55 
// 1, 20 = 210


const prompt = require("prompt-sync")();

var n = parseInt(prompt("Enter any number: "));

var i = 1;

var sum1 = 0;
while (i<n+1){
    sum1 = sum1 + i;
    i+=1;
}
console.log(`The Sum of value ${n} is: ${sum1}`);