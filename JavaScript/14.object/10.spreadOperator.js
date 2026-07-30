// Copy an Object
let student = {
    name:"Ram",
    age:22
};

let copy = {
    ...student // spread operator
};
console.log(student);
console.log(copy);

// Merge Object
let obj1 = {
    a:1
};
let obj2={
    b:2
};
let obj3 ={
    ...obj1,
    ...obj2
};

console.log(obj3);

// Override Properties

// -----------------

let person ={
    name : "Ram",
    city : "Delhi"
};

let updated = {
    ...person,
    city:"Mumbai"
};
console.log(person);
console.log(updated);  // city override 


