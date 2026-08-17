// 4. For...In Loop (10 Questions)

// 1. Print all keys of an object.
const person1 = { name: "Aditya", age: 22, city: "Pune" };
console.log("--- Question 1 ---");
for (let key in person1) {
    console.log(key);
}

// 2. Print all values of an object.
const person2 = { name: "Aditya", age: 22, city: "Pune" };
console.log("\n--- Question 2 ---");
for (let key in person2) {
    console.log(person2[key]);
}

// 3. Print both keys and values of an object.
const person3 = { name: "Aditya", age: 22, city: "Pune" };
console.log("\n--- Question 3 ---");
for (let key in person3) {
    console.log(`${key}: ${person3[key]}`);
}

// 4. Count the total properties in an object.
const person4 = { name: "Aditya", age: 22, city: "Pune", role: "Developer" };
let propertyCount = 0;
for (let key in person4) {
    propertyCount++;
}
console.log("\n--- Question 4 ---");
console.log("Total properties:", propertyCount);

// 5. Print only numeric values from an object.
const data5 = { a: 10, b: "hello", c: 45, d: true, e: 100 };
console.log("\n--- Question 5 ---");
for (let key in data5) {
    if (typeof data5[key] === "number") {
        console.log(data5[key]);
    }
}

// 6. Find the sum of all numeric values in an object.
const marks6 = { math: 80, student: "Aditya", english: 75, science: 90, active: true };
let sum = 0;
for (let key in marks6) {
    if (typeof marks6[key] === "number") {
        sum += marks6[key];
    }
}
console.log("\n--- Question 6 ---");
console.log("Sum of numeric values:", sum);

// 7. Convert all object keys to uppercase while displaying them.
const user7 = { name: "Aditya", age: 22, country: "India" };
console.log("\n--- Question 7 ---");
for (let key in user7) {
    console.log(`${key.toUpperCase()}: ${user7[key]}`);
}

// 8. Print only string-type values from an object.
const user8 = { name: "Aditya", age: 22, occupation: "Engineer", isStudent: false, city: "Mumbai" };
console.log("\n--- Question 8 ---");
for (let key in user8) {
    if (typeof user8[key] === "string") {
        console.log(user8[key]);
    }
}

// 9. Find the longest key in an object.
const user9 = { id: 1, firstname: "Aditya", occupation: "Developer", age: 22 };
let longestKey = "";
for (let key in user9) {
    if (key.length > longestKey.length) {
        longestKey = key;
    }
}
console.log("\n--- Question 9 ---");
console.log("Longest key:", longestKey);

// 10. Print the index and value of an array using for...in.
const fruits10 = ["Apple", "Banana", "Cherry", "Mango"];
console.log("\n--- Question 10 ---");
for (let index in fruits10) {
    console.log(`Index: ${index}, Value: ${fruits10[index]}`);
}
