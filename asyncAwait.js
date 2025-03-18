// Async & Await 

// 1.'async' makes a function return a promise.  
// 2. 'await' pauses the function execution until the promise is resolved.  

console.log("Before");

// Using .then to handle the promise
// getUser(1).then(function(user) {
//     console.log(user);
// });

// Async-Await is another way to handle promises 
// 1 It has a simple syntax.  
// 2 Instead of .then() we use `await` before calling the promise function.  
// 3 The resolved data is stored in a variable, just like how .then() stores it in a callback.  

// Incorrect Usage Example:
// const user = await getUser(1);  
// console.log(user);  
// This will cause an error: "await is only valid inside async functions."  

// `await` must be inside an `async` function  
async function displayData() {
    try {
        const user = await getUser(1);
        console.log("Data fetched successfully:", user);
    }
    catch(error) {
        console.log(error);
    }
}

// Calling the async function
displayData();

// Function returning a promise
function getUser(id) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            // resolve({ id, userName: "abc" });
            reject(new Error("something went wrong"));
        }, 2000);
    });
}

// 1.Now how to handle reject data?
// reject(new Error("something went wrong"));
// so to catch them we use try
// try is a func which contains block of positive code
// catch will take error object and display the message
