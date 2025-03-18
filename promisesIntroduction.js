// Promises 

// 1. When a user requests data from the server, two things can happen:  
//    1)The data is received successfully
//    2)The request fails and data is not received  

// 2. Promises handle these cases using three states:
//    1)Pending: The request is in progress
//    2)Resolved: The request is successful and data is fetched 
//    3)Rejected: The request fails and an error occurs 

// 3. A promise is a JavaScript object that holds the result of an asynchronous operation  
// const p = new Promise(function(parameter))
// parameter => resolve,reject

// Creating a new Promise
const p1 = new Promise(function(resolve, reject) {
    // here we call an async operation(fetching data from server)
    // promise might be resolve or reject
    resolve(1);
    // so data is successfully fetched
})

console.log("Object of promise P1:", p1);
// output:  Promise { 1 }

// Now we need to pass the object data to the user who requested for the data
// p1 will take two methods then and catch
// Handling the resolved promise
// p1.then is an function which takes another function and log the fetched data
p1.then(function(result) {
    console.log("Data is fetched:",result);
})

// Handling rejected promises
const p2 = new Promise(function(resolve, reject) {
    reject(new Error("Error occurred"));
    //  a new erroe method will be created with an message
})

p2.then(function(result) {
    console.log(result);
}).catch(function(error) {
    console.log("Data is not fetched:", error.message);
})

// output:
/* Object of promise P1: Promise { 1 }
Data is fetched: 1
Data is not fetched: Error occurred */

// Explanation: 
// 1. 'p1' is a promise that resolves with data (1), which is then passed to `.then()` for further processing.  
// 2. If the data is not received (like in `p2`), the promise moves to the rejected state, and `.catch()` handles the error.  
// 3. '.then()' is used to process the resolved data, while '.catch()' is used to handle errors.  
// 4. The promise moves from pending to either resolved or rejected based on the outcome of the operation.  
