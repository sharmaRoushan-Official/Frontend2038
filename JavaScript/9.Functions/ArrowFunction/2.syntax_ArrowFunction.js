// 1. Arrow funciton with no parameter


const greet = () =>{
    console.log("Hello World");
}
greet(); // Output: Hello World


// 2. Arrow function with one parameter

const greet1 = (name) => {
    return `Hello ${name}`;
}
console.log(greet1("Alice")); // Output: Hello Alice


// 3. Arrow function with Multiple parameters

const greet2 = (name, age) => {
    return `Hello ${name}, you are ${age} years old`;
}
console.log(greet2("Bob", 25)); // Output: Hello Bob, you are 25 years old


// 4. Sinle line arrow function with implicit return 
const greet3 = (name) => `Hello ${name}`;
console.log(greet3("Charlie")); // Output: Hello Charlie


// 5. Arrow Function Returning an Object

const student = () => ({name: "John",age: 20});  // name and age are properties of the object returned by the arrow function
console.log(student()); // Output: { name: 'John', age: 20 }

// 6. Arrow Function with Default Parameters 
const greet4 = (name = "Guest") => {
    return `Hello ${name}`;
}
console.log(greet4()); // Output: Hello Guest
console.log(greet4("Aditya")); // Output: Hello Aditya

// 7. Arrow Function with Array Methods 

// 1. map() method: The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
let numbers = [1,2,3,4,5];
let squaredNumbers = numbers.map(num => num * num); // using arrow function with map method
console.log(squaredNumbers); // Output: [ 1, 4, 9, 16, 25 ]

// 2. filter() method: The filter() method creates a new array with all elements that pass the test implemented by the provided function.

let evenNumbers = numbers.filter(num => num % 2 === 0); // using arrow function with filter method
console.log(evenNumbers); // Output: [ 2, 4 ]

// 3. reduce() method: The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15

// accumulator is the accumulated value previously returned in the last invocation of the callback, or initialValue, if supplied.
// currentValue is the current element being processed in the array.

// 8. Arrow Function with setTimeout

setTimeout(() => {
    console.log("This message is displayed after 2 seconds");
}, 2000);

// 2000 milliseconds = 2 seconds