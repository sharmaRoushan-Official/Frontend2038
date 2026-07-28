function login(password){
    if (password !== "Admin123@"){
        throw new Error("Invalid password");
    }
    return "Login successful";
}

try{
    console.log(login("Admin123")); // This will throw an error
}   
catch(error){
    console.log(error.message);
}
