// let studentName = "Ravi";
// let studentAge = 20;
// let studentCourse="Javascript";

// function displayStudent(){
//     console.log("Student Name: " + studentName);
//     console.log("Student Age: " + studentAge);
//     console.log("Student Course: " + studentCourse);
// };

// displayStudent();


// class Student{
//     constructor(name, age, course){
//         this.name = name;
//         this.age = age;
//         this.course = course;
//     }

//     displayStudent(){
//         console.log("Student Name: " + this.name);
//         console.log("Student Age: " + this.age);
//         console.log("Student Course: " + this.course);
//     }
// }
// obj1 = new Student("Ravi", 20, "Javascript");
// obj1.displayStudent();


// obj2 = new Student("Ramesh", 22, "Python");
// obj2.displayStudent();


// 2. Four Main OOPS Concept 

// 1. Encapsulation - private, public, protected
// 2. Inheirtance - extends, super [1.Simple Inheritance,2.Multiple Inheritance,3.Multilevel Inheritance,4.Hierarchical Inheritance,5.Hybrid Inheritance]

// 3. Polymorphism - Method Overloading [Compile-time], Method Overriding [Run-time]

// 4. Abstraction


// 3. Object 

// let student ={
//     name:"Ravi",
//     age: 22,
//     course:"JavaScript",
//     displayStudent: function(){
//         console.log("Student Name: " + this.name);
//         console.log("Student Age: " + this.age);
//         console.log("Student Course: " + this.course);
//     }
// };

// obj1= student;
// obj1.displayStudent();


// name - Property
// age - Property
// course- Property
// display- Method


// 11.  Encapsulation 

// class BankAccount {
//     #balance; // Must declare private field before using it

//     constructor() {
//         this.#balance = 0;          // Private Property
//         this.accountNumber = 123456; // Public Property
//         this._name = "Ravi";         // Protected (by convention) Property
//     }

//     deposite(amount) {
//         if (amount <= 0) {
//             console.log("Invalid Amount");
//             return;
//         } else {
//             this.#balance += amount;
//             console.log("Amount Deposited: " + amount);
//         }
//     }

//     // Optional: a way to read balance from outside
//     getBalance() {
//         return this.#balance;
//     }
// }

// const obj1 = new BankAccount();

// console.log(obj1.balance);      // undefined — not an error, just not accessible this way
// // console.log(obj1.#balance);  // This WOULD cause a SyntaxError — private fields can't even be referenced outside the class

// obj1.deposite(1000); // Amount Deposited: 1000
// obj1.deposite(-500); // Invalid Amount

// console.log(obj1.getBalance()); // 1000


// Getter 

// A getter allows controlled reading of a property 

// class Student{
//     constructor(name, age, course){
//         this._name = name;  // protected property (by convention)
//         this.age = age;
//         this.course = course;
//     }

//     // Getter for name
//     get name(){
//         return this._name;
//     }

//     // Setter for name
//     set name(newName){
//         if(newName.length > 0){
//             this._name = newName;
//         } else {
//             console.log("Invalid Name");
//     }
//     }
// }

// let s = new Student("Ravi", 20, "JavaScript");
// console.log(s.name); // Ravi
// s.name = "Ramesh";
// console.log(s.name); // Ramesh


// Static Methods 

// class mathUtil{
//     static square(num){
//         return num * num;
//     }
// }

// console.log(mathUtil.square(5)); // 25
// console.log(mathUtil.square(10)); // 100


// // Static Properties

// class Student{
//     static count = 0; // Static property to keep track of the number of Student instances
//     constructor(name){
//         this.name = name; 
//         Student.count++;  // Increment count whenever a new Student is created
//     }
// }

// console.log(Student.count); // 0
// let s1 = new Student("Ravi");
// console.log(Student.count); // 1
// let s2 = new Student("Ramesh");
// console.log(Student.count); // 2


// Inheritance 


// Parent Class
// class Person { 
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     displayInfo() {
//         console.log(`Name: ${this.name}, Age: ${this.age}`);
//     }
// }

// // Child Class or Subclass or Derived Class
// class Student extends Person {
//     constructor(name, age, course) {
//         super(name, age); // Call the parent class constructor
//         this.course = course; // Additional property for Student child class
//     }
// }

// let student1 = new Student("Ravi", 20, "JavaScript");
// student1.displayInfo();



// Super Constructor


// parent class
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// // child class

// class Student extends Person {
//     constructor(name, age, course) {
//         super(name, age); // Call the parent class constructor
//         this.course = course; // Additional property for Student child class
//     }
// }

// let student1 = new Student("Ravi", 20, "JavaScript");
// console.log(student1.name); // Ravi
// console.log(student1.age); // 20
// console.log(student1.course); // JavaScript



// Polymorphism

// Method Overloading (Compile-time Polymorphism) is not natively supported in JavaScript, but we can simulate it using default parameters or by checking the number of arguments passed to a function.

class Calculator {
    add(a, b, c) {
        if (c !== undefined) {
            return a + b + c; // If three arguments are provided
        } else {
            return a + b; // If only two arguments are provided
        }
    }
}

let calc = new Calculator();
console.log(calc.add(2)); // 2);
console.log(calc.add(2, 3)); // 5
console.log(calc.add(2, 3, 4)); // 9

// Method Overriding (Run-time Polymorphism)

// class Animal { 
//     constructor(name) {
//         this.name = name;
//     }

//     makeSound() {
//         console.log(`${this.name} makes a sound`);
//     }
// }

// class Dog extends Animal {
//     constructor(name, breed) {
//         super(name);
//         this.breed = breed;
//     }

//     makeSound() {
//         console.log(`${this.name} barks`);
//     }
// }

// let dog = new Dog("Buddy", "Golden Retriever");
// dog.makeSound(); // Buddy barks


// Data Abstraction 


// Abstract class
class Payment {
    pay(amount){
        throw new Error("Method 'pay()' must be implemented.");
    }
}


// Concrete class
class CreditCardPayment extends Payment {
    pay(amount) {
        console.log(`Paid ${amount} using Credit Card`);
    }
}

obj = new CreditCardPayment();
obj.pay(100); // Paid 100 using Credit Card

// obj1 = new Payment(); // This will throw an error if you try to call pay() on it
// obj1.pay(100); // Error: Method 'pay()' must be implemented.

