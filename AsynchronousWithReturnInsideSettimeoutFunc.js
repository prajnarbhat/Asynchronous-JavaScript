// 1. We will create a function that uses 'setTimeout' inside which delays for 2s  
// 2. The function 'getUser(id)' mimics fetching user data from a server (not a real API, just a mock) 
// 3. The 'getUser()' function should execute after a delay of 2000ms (2 seconds)
// 4. As 'setTimeout' is asynchronous, the function inside it will be executed after 'getUser()' is called.  
// 5. The `getUser()` function is supposed to return an object containing 'id' and 'username'  
// 6. However, due to JavaScript’s asynchronous nature, the return statement inside `setTimeout` doesn’t work as expected.  
// 7. The 'user' variable is assigned `undefined` because `getUser()` doesn’t return the object immediately.  

console.log("Before");

const user = getUser(1); // This does not return data immediately
console.log(user);
// This logs 'undefined'

console.log("After");

// Function to fetch user data from a serve
function getUser(id) {
    setTimeout(function() {
        console.log("Fetching data from server");
        return { id , getUserName: "abc"};
    },2000);
}

// output:

/* Before
undefined
After    
Fetching data from server */

// The function inside setTimeout is not executing after 2 seconds as expected.
// This is because the return statement belongs to the inner function inside setTimeout, not the getUser function itself.
