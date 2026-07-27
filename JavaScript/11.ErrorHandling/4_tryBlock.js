// try{
//     console.log("Hello world"); // This line will not be executed due to the error above
// }
// catch(error){
//     console.log("An error occurred: " + error.message);
// }

// try{
//     console.log(a); // ReferenceError: name is not defined
// }
// catch(error){
//     console.log("An error occurred: " + error.message);
// }


// try{
//     let result = 10/0; // This will not throw an error, but will result in Infinity
//     console.log(result); // Infinity
// }
// catch(error){
//     console.log("An error occurred: " + error.message);
// }


try{
    // console.log("Hello world"); // This line will not be executed due to the error above
    console.log(a); // ReferenceError: name is not defined
}
catch(error){
    console.log("An error occurred: " + error.message);     
}
finally{
    console.log("This block will always be executed"); // This line will always be executed
}