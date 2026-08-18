// console.log("Start");

// setTimeout(() => {
//     console.log("Timeout finished");
// }, 2000);
// console.log("End");

// Why 

// The timer doen'st block the rest of the javaScript code.


// 2. Synchronous vs Asynchronous

// Code execute one statement at a time and waits for each statement to finish before moving on to the next one. This is known as synchronous execution.

// Asynchronous execution allows the program to continue executing other statements while waiting for an operation to complete. This is useful for tasks that take time, such as network requests or file I/O, as it prevents the program from being blocked and allows it to remain responsive.



// synchronousFunction();
// console.log("A");
// console.log("B");
// console.log("C");


// // AsynchronousFunction()

// console.log("Start");

// setTimeout(() => {
//     console.log("Timeout finished");
// }, 2000);
// console.log("End");


/// Why Do we need Asynchronous Function?

// Imagine an API takes 5 seconds. 

// Request API
//     | 
// WAIT 5 seconds
//     |
// Continue  


// Durint that wiat, the application could become unresponsive.


// Asynchronous function programming allows 

// Start API request 
//     |
// Continue other work 
//     |
// API Finished
//     |
// Process result 


// javaScript is single-threaded. 

// JavaScript traditionally executes javascript code using a single main execution thread. This means that only one operation can be performed at a time.


// But browser provde APIs that can perform/ manage operations outside the javaScript call stack. 


// JavaScript 
//     |
// Call Stack
//     |
// Browser APIs
//     |
// Queues 
//     |
// Event loops 
//     |
// Call Stack 



// >> Call Stack
//     >> The Call stack keeps track of current execution javaScript functions. When a function is called, it is added to the top of the stack. When the function returns, it is removed from the stack. If the stack is empty, the JavaScript engine will wait for new functions to be added to the stack.

// >> Browser APIs
//     >> The browser provides APIs that can perform operations outside the JavaScript call stack. These APIs can handle tasks such as making network requests, setting timers, and handling user input. When an operation is completed, the browser API will add a callback function to the queue.

// function one(){  
//     two(); // Call Stack
// }

// function two(){
//     console.log("Two");
// }


// console.log("Start");
// one();  // Two
// console.log("End");

// // the stack grows as functions are called and shrinks as they finish. 


// // 7.  Example of Call Stack 

// function first(){
//     console.log("First");
// }

// function second(){
//     first();
//     console.log("Second");
// }

// console.log("Start");
// second();
// console.log("End");


// 8. Browser APIs and Queues 

// Browser provides APIs for operations such as 
// > Timers
// > Network requests
// > DOM events 
// > Geolocation
// > Some storage/browser functionality 

// Example 

// setTimeout(() => {
//     console.log("Timeout finished");
// }, 2000);

// console.log("End"); 


// 9. Event Loop 

// The event loop helps coordinates when queued callbacks can be executed by JavaScript 

// Callstack
//     |
// Event Loop 
//     |
// Queues 
//     |
// Browser APIs 

// The event loop keeps check whether javascript can take another queued job. 


// 10. Classic Event Loop  

// console.log("Start") 

// setTimeout(()=>{
//     console.log("Timeout")
// },0)

// 11. callback 

// A callback is a function passed to another function so it can be called later or under a particular conditions. 


// function greet(name,callback){
//     console.log("Hello "+name) // Hello Ravi
//     callback(); // Finished
// }

// function finish(){
//     console.log("Finished");
// }
// // obj = greet("Ravi",finish)
// // console.log(obj)

// greet("Ravi",finish)


// 12. Callback with Asynchronous Operations 

// setTimeout(()=>{
//     console.log("Data received")
// },2000);

// () => {
//     console.log("Data recieved"); // The Funciton is a callback
// }


// 13. Callback Hell 

// When Asynchronous operation are deeply nested. 

// getUser(function(user){
//     getOrders(user, function(orders){
//         getPayment(orders,function(payment){
//             sendEmail(payment,function(){
//                 console.log("Order Placed")
//             });
//         });
//     });
// });


// This becomes difficut to:

// > Read 
// > Maintain 
// > Debug 
// > Handle error 

// This is commonly called backback hell or the payramid of doom. 


// 14. Promise 

// A promise represents that eventual result of an asynchrounous operations 

// A promise has three states 

//     Pending
//         |
// ---------------------
// |                   |
// Fulfilled           Rejected


// Pending 

// Operations has not completed. 

// Fulfilled 

// Operations completed Successfully. 


// Rejected 

// Operations failed 



// 15. Creating a Promise 

let promise = new Promise(
    function(resolve, reject){
        // let success = true; 
        // let success = false;
        // let success = false;
        let success = true;

        if (success){
            resolve("Success");
        }
        else{
            reject("Failed")
        }

    }
)
console.log(promise);





