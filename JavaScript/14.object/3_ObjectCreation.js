// Method 1

let student = {
    name:"Ram",
    age:22
};
console.log(student);

// This is the most commonly used method 


// Method 2
let student1 = new Object();

student1.name = "Ram";
student1.age = 25;
console.log(student1);


// Method 3 Constructor Function

// Useful when creating many similar objects 
function Student2(name,age){
    this.name = name;
    this.age = age;
};
let s1 = new Student2("Ram",22);
let s2 = new Student2("Shyam",25);

console.log(s1);
console.log(s2);

// Method 4 [Object.create()]

// creates a new object using another object as its prototype 

let person = {
    city:"Delhi"
};

let student3 = Object.create(person);
student3.name = "Ram";
console.log(person);
console.log(student3.name);
console.log(student3.city);