let obj1 = {
    a:1,
    b:2
};
let obj2 = {
    c:3,
    d:4
};

result = Object.assign({},obj1,obj2);
console.log(result);


/// Overwrites values

let obj3 = {
    name: "Ram"
};
let obj4 ={
    name : "Amit",
    age : 22
};

console.log(Object.assign({},obj3,obj4));