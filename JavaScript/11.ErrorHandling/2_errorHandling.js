try{
    console.log(name); // ReferenceError: name is not defined
}
catch(error){
    console.log("An error occurred: " + error.message);
}
console.log("Hello world"); // This line will be executed because the error was handled