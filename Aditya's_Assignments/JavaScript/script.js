const prompt = require("prompt-sync")();

var a = parseInt(prompt("Enter 1st number: "));

var b = parseInt(prompt("Enter Second number: "));

var c = a + b;

var d = a / b;

var e = a * b;

var f = a - b;

var g = a % b;

console.log(`the sum of ${a} and ${b} is ${c}`);

console.log(`the division of ${a} by ${b} is ${d}`);

console.log(`the multiplication of ${a} with ${b} is ${e}`)

console.log(`the subtraction of ${a} from ${b} is ${f}`)

console.log(`the modulo of ${a} and ${b} is ${g}`)