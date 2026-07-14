var globalVar = "I'm Global";  // Global Scope

function myFunction(){
    var functionVar = "I'm Local to the block";  //Function Block 

    if (true){
    let blockVar = "I'm local to the block"; // Block Scope

    console.log(globalVar);  // global variable; accessible
    console.log(functionVar); // function scope: accessbile
    console.log(blockVar); // block scope: accessible
    }
    console.log(globalVar);  // global variable: accessible
    console.log(functionVar); // function scope: accessbile
    // console.log(blockVar);   // block scope: not accessible
}

myFunction();
console.log(globalVar);  //global variable: accessible
// console.log(functionVar);  // function variable: not accessible
// console.log(blockVar);   // block variable: not accessible

