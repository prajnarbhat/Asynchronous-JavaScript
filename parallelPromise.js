// Parallel Promise
// When there are multiple promises how to handle the response
// Example: fetching data from server1 and server2, after async operation we will get promise  from both server

// Promise.all : Waits for all promises to resolve and returns their results as an array. If any promise is rejected, it immediately rejects.
const p1 = new Promise(function(resolve,reject) {
    // async operation
    setTimeout(function() {
        console.log("This is operation1");
        // resolve(1);
        reject(new Error("something went wrong"));
    },2000);
});

// another promise
const p2 = new Promise(function(resolve,reject) {
    setTimeout(function() {
        console.log("This is operation2:");
        resolve(2);
    });
});

// so here we get data from both the server
// All the promises are handled by Promise.all(take1st,2nd)  
// It will take both the promise in form of array

// after both p1 and p2 get resolved promise.all function returns an promise
// result will have the data of both p1 and p2 object in the form of array
Promise.all([p1,p2]).then(function (result) {
    console.log("Promise of both promise:",result);
}).catch(function(error) {
    console.log(error);
})

// Promise of both promise: [ 1, 2 ]
// result of both promises will be stored in the form of array


// Here now only one promise object p1 is rejected not p2
// So inside promise.all([p1,p2]) if one promise get rejected entire response will give an error

/* This is operation2:
This is operation1
Error: something went wrong */

// Note: It will execute both the promises then will check if both of them resolved in promise.all
// p1,p2,.all