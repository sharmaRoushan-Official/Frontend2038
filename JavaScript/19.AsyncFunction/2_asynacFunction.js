// // async function getData(){
// //     return "Hello";
// // }
// // let result = getData();
// // console.log(result);


// // It produces a Promise 

// // 26.await 

// // await pauses the execution of the async funciton until the awaited Promise settles. 


// // async function getData(){
// //     let result = await
// // Promise.resolve("Hello");
// // console.log(result);
// // }

// // Note
// // awai does not block the entire javaScirpt runtime. It Pauses the current async funciton while allowing other work to proceed. 

// // 27. async/await 

// function getData(){
//     return new Promise(resolve =>{
//         setTimeout(() =>{
//             resolve("Data Received")
//         }, 2000);
//     });
// }
// // async function main(){
// //     console.log("Start");
// //     let data = await getData();
// //     console.log(data);
// //     console.log("End");
// // }
// // main();


// // 29. Error Handling with async/await 

// // use:

// // try
// // catch 


// // async function main(){
// //     try{
// //         let data = await getData();
// //         console.log(data);
// //     }
// //     catch(error){
// //         console.log("Error",error);
// //     }
// // }
// // main();


// // 30. fetch()  

// // fetch() is a browser API used to make HTTP requests. 

// // It returns a Promise. 

// // Example 

// fetch(
//     "https://jsonplaceholder.typicode.com/posts"
// )
// .then(response =>{
//     console.log(response);
// })
// .catch(error =>{
//     console.log(error);
// })


// // 34. HTTP Error Handling with Fetch 

// // if (!Response.ok){
// //     throw new Error(
// //         `HTTP error: ${response.status}`
// //     )
// // }

async function getUser(){
    try{
        let response = await fetch(url);
        if (!response.ok){
            throw new Error(
                `HTTP error: ${response.status}`
            );
        } 
        let data = await response.json();
        console.log(data);
    }catch(error){
        console.log(error);
    }
}
console.log("====================");
// let result = getData()
// console.log(result);

let result = 


// // 35. Promise.all()

// // Used when multiple independent promises can run concureently and you need all result. 

// let p1 = fetch("/posts");

// let p2 = fetch("/posts/1");

// Promise.all([p1,p2])
//     .then(result =>{
//         console.log(result);
//     })


async function loadData() {

    try {

        let [users, posts] = await Promise.all([

            fetch(
                "https://jsonplaceholder.typicode.com/users"
            )
                .then(response => {
                    if (!response.ok) {
                        throw new Error(
                            `Users HTTP error: ${response.status}`
                        );
                    }

                    return response.json();
                }),

            fetch(
                "https://jsonplaceholder.typicode.com/posts"
            )
                .then(response => {
                    if (!response.ok) {
                        throw new Error(
                            `Posts HTTP error: ${response.status}`
                        );
                    }

                    return response.json();
                })

        ]);

        // console.log("Users:", users);
        // console.log("Posts:", posts);

    } catch (error) {

        console.log("Error:", error);

    }
}

loadData(); 

let users = await getUser();

console.log(users);

