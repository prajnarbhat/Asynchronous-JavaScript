// Synchronous js
// 1. Synchronous: Operation are performed one after another in sequence. Each line of code waits the previous one to finish before
// proceeding to next Operation

console.log("Before");

console.log("After");

// First "Before" will execute then "after" is executed 
// Every line of code waits for previous one to get executed and it gets executed
// When fetching large amount of data its a time consuming tasks. If such tasks are included in the sequence it will block rest of the code from execution
