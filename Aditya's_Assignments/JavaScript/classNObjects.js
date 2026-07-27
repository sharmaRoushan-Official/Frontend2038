// create a Person class with name and age.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method to display person details
    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }

    // Method to check if the person is an adult
    isAdult() {
        return this.age >= 18;
    }
}

// Example usage:
const person1 = new Person("Aditya", 20);
person1.displayInfo(); // Output: Name: Aditya, Age: 20
console.log(`Is adult? ${person1.isAdult()}`); // Output: Is adult? true

const person2 = new Person("Rahul", 15);
person2.displayInfo(); // Output: Name: Rahul, Age: 15
console.log(`Is adult? ${person2.isAdult()}`); // Output: Is adult? false

// Car class with brand and price
class Car {
    constructor(brand, price) {
        this.brand = brand;
        this.price = price;
    }

    // Method to display car details
    displayInfo() {
        console.log(`Brand: ${this.brand}, Price: $${this.price}`);
    }
}

// Example usage for Car:
const car1 = new Car("Toyota", 25000);
car1.displayInfo(); // Output: Brand: Toyota, Price: $25000

const car2 = new Car("Honda", 22000);
car2.displayInfo(); // Output: Brand: Honda, Price: $22000

// Book class with title and author
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    // Method to display book details
    displayInfo() {
        console.log(`Title: "${this.title}", Author: ${this.author}`);
    }
}

// Example usage for Book:
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
book1.displayInfo(); // Output: Title: "The Great Gatsby", Author: F. Scott Fitzgerald

const book2 = new Book("To Kill a Mockingbird", "Harper Lee");
book2.displayInfo(); // Output: Title: "To Kill a Mockingbird", Author: Harper Lee

// Employee class to display employee details
class Employee {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    // Method to display employee details
    displayInfo() {
        console.log(`Name: ${this.name}, Position: ${this.position}, Salary: $${this.salary}`);
    }
}

// Example usage for Employee:
const emp1 = new Employee("Aditya", "Software Engineer", 60000);
emp1.displayInfo(); // Output: Name: Aditya, Position: Software Engineer, Salary: $60000

const emp2 = new Employee("Priya", "Designer", 55000);
emp2.displayInfo(); // Output: Name: Priya, Position: Designer, Salary: $55000


// Student class with name and marks to calculate total marks
class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks; // Array of subject marks
    }

    // Method to display student details
    displayInfo() {
        console.log(`Student Name: ${this.name}, Marks: [${this.marks.join(", ")}]`);
    }

    // Method to calculate total marks
    calculateTotal() {
        return this.marks.reduce((total, mark) => total + mark, 0);
    }

    // Method to calculate average marks
    calculateAverage() {
        const total = this.calculateTotal();
        return total / this.marks.length;
    }
}

// Example usage for Student:
const student1 = new Student("Aditya", [85, 90, 78, 92, 88]);
student1.displayInfo();
console.log(`Total Marks: ${student1.calculateTotal()}`); // Output: Total Marks: 433
console.log(`Average Marks: ${student1.calculateAverage().toFixed(2)}`); // Output: Average Marks: 86.60

const student2 = new Student("Rahul", [72, 65, 80, 70, 75]);
student2.displayInfo();
console.log(`Total Marks: ${student2.calculateTotal()}`); // Output: Total Marks: 362
console.log(`Average Marks: ${student2.calculateAverage().toFixed(2)}`); // Output: Average Marks: 72.40
