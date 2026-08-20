// ==========================================
// 26. async / await
// ==========================================

async function getData() {
    return "Hello";
}

let result = getData();
console.log(result);


// ==========================================
// await
// ==========================================

// await pauses the execution of the async function
// until the awaited Promise settles.

async function getHello() {
    let result = await Promise.resolve("Hello");
    console.log(result);
}

getHello();


// Note:
// await does not block the entire JavaScript runtime.
// It pauses the current async function while allowing
// other work to proceed.


// ==========================================
// 27. async/await
// ==========================================

function getDataFromServer() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Data Received");
        }, 2000);
    });
}

async function main() {
    console.log("Start");

    let data = await getDataFromServer();

    console.log(data);
    console.log("End");
}

main();


// ==========================================
// 29. Error Handling with async/await
// ==========================================

// use:
// try
// catch

async function handleData() {
    try {
        let data = await getDataFromServer();
        console.log(data);
    }
    catch (error) {
        console.log("Error", error);
    }
}

handleData();


// ==========================================
// 30. fetch()
// ==========================================

// fetch() is a browser API used to make HTTP requests.
// It returns a Promise.

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });


// ==========================================
// 34. HTTP Error Handling with Fetch
// ==========================================

async function getUser() {

    try {

        let response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error(
                `HTTP error: ${response.status}`
            );
        }

        let data = await response.json();

        console.log(data);

        return data;

    }
    catch (error) {

        console.log(error);

    }
}

console.log("====================");

let userResult = getUser();
console.log(userResult);


// ==========================================
// 35. Promise.all()
// ==========================================

// Promise.all()
// Wait for all; reject if one rejects.

let p1 = fetch(
    "https://jsonplaceholder.typicode.com/posts"
);

let p2 = fetch(
    "https://jsonplaceholder.typicode.com/posts/1"
);

Promise.all([p1, p2])
    .then(result => {
        console.log("Promise.all:", result);
    })
    .catch(error => {
        console.log(error);
    });


// ==========================================
// Promise.allSettled()
// ==========================================

// Promise.allSettled()
// Wait for all; regardless success/failure.

let p3 = Promise.resolve("Success");

let p4 = Promise.reject("Failed");

Promise.allSettled([p3, p4])
    .then(result => {
        console.log("Promise.allSettled:", result);
    });


// ==========================================
// Promise.race()
// ==========================================

// Promise.race()
// First settled Promise wins.

let p5 = new Promise(resolve => {
    setTimeout(() => {
        resolve("Promise 1");
    }, 2000);
});

let p6 = new Promise(resolve => {
    setTimeout(() => {
        resolve("Promise 2");
    }, 1000);
});

Promise.race([p5, p6])
    .then(result => {
        console.log("Promise.race:", result);
    });


// ==========================================
// Promise.any()
// ==========================================

// Promise.any()
// First fulfilled Promise wins.

let p7 = Promise.reject("Error");

let p8 = new Promise(resolve => {
    setTimeout(() => {
        resolve("Success 1");
    }, 2000);
});

let p9 = new Promise(resolve => {
    setTimeout(() => {
        resolve("Success 2");
    }, 1000);
});

Promise.any([p7, p8, p9])
    .then(result => {
        console.log("Promise.any:", result);
    })
    .catch(error => {
        console.log(error);
    });


// ==========================================
// Promise.all() with async/await
// ==========================================

async function loadData() {

    let [users, products] = await Promise.all([
        getUser(),
        fetch(
            "https://jsonplaceholder.typicode.com/posts"
        )
            .then(response => response.json())
    ]);

    console.log(users);
    console.log(products);
}

loadData();