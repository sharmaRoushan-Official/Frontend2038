class Student{
    // constructor with parameters is: name,age
    constructor(name,age){ // name,age are parameters of constructor
        this.name = name; // this is used to refer to the current object
        this.age = age; // this is used to refer to the current object
    }
    studentDetails(){
        console.log("Name",this.name);  // this is used to refer to the current object
        console.log("Age",this.age); // this is used to refer to the current object
    }
}

let s1 = new Student("Rohan",21); // passing arguments to constructor // Rohan, 21 are arguments of constructor
s1.studentDetails();
let s2 = new Student("Ramesh",22); // passing arguments to constructor // Ramesh, 22 are arguments of constructor
s2.studentDetails();