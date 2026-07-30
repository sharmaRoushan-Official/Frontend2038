// without destructuring 

// let student = {
//     name:"Ram",
//     age:22
// }
// let name = student.name;
// let age = student.age;

// console.log(name,age);


// with destructring 


let student1 = {
    name1 : "Ram",
    age: 22
};
let {name1,age} = student1;
console.log(name1);
console.log(age);



// Rename Variables


let{name1:studentName, age:studentAge} = student1;
console.log(studentName, studentAge);


// Default Values

let {name2,city1="Mumbai"} = student1;
console.log(city1);