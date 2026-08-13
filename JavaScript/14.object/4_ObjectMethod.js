let student = {
    name:"Ram",
    age:22,
    display:function(){
        console.log(this.name,this.age);
    }
};
student.display();


// Method Shorthand(ES6)


let student1 = {
    name:"Ram",
    display1(){
        console.log(this.name);
    }
};
student1.display1();


// Understanding this 

// this refers to the current Object. 

// exmaple 

let employee = {
    name:"Amit",
    salary:50000,
    details(){
        console.log(this.name);
        console.log(this.salary);
    }
}
employee.details();