function withdraw(balance, amount) {
    if (amount > balance) {
        throw new Error("Insufficient funds");
    }
    return balance - amount;
}

try{
    console.log(withdraw(100, 150)); // This will throw an error
}
catch(error){  // error is the parameter that will hold the error object
    console.log("An error occurred: " + error.message);
}
finally{
    console.log("This block will always be executed"); // This line will always be executed
}