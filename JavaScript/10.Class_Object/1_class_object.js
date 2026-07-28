class Student{
    // constructor is a special method for creating and initializing an object created with a class
    // constructor is called automatically when a new object is created
    // constructor without parameters
    constructor(){
        this.name = "Rohan"; // this is used to refer to the current object
        this.age = 21; // this is used to refer to the current object
    }
    // method 
    dipslay(){
        console.log("Name",this.name);  // this is used to refer to the current object
        console.log("Age",this.age); // this is used to refer to the current object
    }
}
let s1 = new Student();
s1.dipslay();