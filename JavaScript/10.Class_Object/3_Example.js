// Example 3: Employee Class 

class Employee{
    constructor(name,salary){
        this.name = name;
        this.salary = salary;
    }
    employeeDetails(){
        console.log("Employee:",this.name);
        console.log("Salary:",this.salary);
    }
}
let e1 = new Employee("Rohan",50000);
e1.employeeDetails();
let e2 = new Employee("Ramesh",60000);
e2.employeeDetails();