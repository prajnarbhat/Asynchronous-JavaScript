// 1. Asynchronous programming allows multiple tasks to run independently without waiting for each other
// 2. In asynchronous execution, a task is initiated, and while it waits for completion, other tasks can continue running

// 3. Here, setTimeout is used as an asynchronous operation that schedules a function to log "message" after 2 seconds.

// 4. The setTimeout function accepts a callback function that logs a message after 2 seconds.
// 5. setTimeout is asynchronous operation, it doesn't block execution, it registers the task to run after the specified delay and continues executing the remaining code.

console.log("Before");

setTimeout(function() {
    console.log("Accessing data from the server (fetching data takes time)");
}, 2000);

// Since fetching data takes time, it is scheduled for later execution, and "After" is logged immediately.

console.log("After");