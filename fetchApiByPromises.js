// Fetching the text file using promises

// fetch api returns a promise that need to be processed using .then function

// fetch('https://v2.jokeapi.dev/joke/Any?format=txt').then(function(result) {
//     console.log("Fetching object:",result);
//     // It returns an object
//     // Which contains text: ƒ text() text function
//     console.log(result.text());
//     // It again results promise
//     /* Promise {<pending>}[[Prototype]]: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: "Hey Girl,\nRoses are #ff0000,\nViolets are 
//     #0000ff,\nI use hex codes,\nBut I'd use RGB for you." */
//     // This promise have data that need to be loges using another .then
// });

fetch('https://v2.jokeapi.dev/joke/Any?format=txt').then(function(result) {
    return result.text();
}).then(function(data) {
    console.log("Data fetched:",data);
}).catch(function(error) {
    console.log(error);
})

// output: I won the lottery today!

