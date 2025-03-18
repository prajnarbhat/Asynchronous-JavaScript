// A callback is a function passed as a parameter to another function.
// // It gets executed within the same function where it is passed.
// The callback function will return an object.

console.log("Before");

// No need to store the result in a variable because 'getUser is not returning anything
getUser(1, function(user) {
    console.log(user);
})
// getUser takes an id and a callback function as arguments.

console.log("After");

function getUser(id, callback) {
    setTimeout(function() {
        // callback function return an user object
        callback({id, userName: "abc"});
    });
};

// Inside getUser setTimeout  which has an asynchronous operation (fetching user data)
// After 2 seconds, the callback function is executed, returning a user object
// This returned object is passed to the callback function (function(user)) and logged in the console
