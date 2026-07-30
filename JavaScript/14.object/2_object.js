// Access Object Properties 

// Dot Notation 
let student ={
    name:"Ram",
    age:22,
    city:"Delhi"
};
console.log(student);
console.log(typeof(student));

// Dot Notation 

console.log(student.name);

// Bracket Notation 

console.log(student['name']);


// Modify Property 

student.age = 25;
console.log(student);


// Add Property

student.course = "Python";
console.log(student);

// Delete Property 


delete student.city;
console.log(student);