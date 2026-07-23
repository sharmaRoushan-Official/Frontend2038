// 5. Function with argument and return type


const prompt = require("prompt-sync")({ sigint: true });  // sigint is used to handle Ctrl+C event in the terminal

function multiplicationFunctionWithArgument(a, b,c)  // Formal Parameters
{
    return a*b*c; // Business Logic
}     
// PLL - Presentation Logic Layer
var result = multiplicationFunctionWithArgument(5, 6,7); // Actual Parameterss  
console.log(result);  

var input1 = parseInt(prompt("Enter the first number: "));
var input2 = parseInt(prompt("Enter the second number: "));
var input3 = parseInt(prompt("Enter the third number: "));  

var result2 = multiplicationFunctionWithArgument(input1, input2,input3); // Actual Parameterss
console.log("The result of multiplication is: " + result2);

