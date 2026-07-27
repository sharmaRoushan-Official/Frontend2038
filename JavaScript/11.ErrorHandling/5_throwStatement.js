try{
    let age = 14;
    if(age < 18){
        throw new Error("Age must be at least 18");
    }
    console.log("Age is valid");
}
catch(error){
    console.log("An error occurred: " + error.message);
}
finally{
    console.log("This block will always be executed"); // This line will always be executed
}