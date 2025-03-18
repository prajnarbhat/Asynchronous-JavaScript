// fetching json data

// Fetching the json file using promises

// fetch api returns a promise that need to be processed using .then function

// fetch('https://jsonplaceholder.typicode.com/users').then(function(result) {
//     // console.log("Fetching json data:",result.json());
//     // It returns an promise with array of object
//     return result.json();
//     // it returns a promise with Array(10)
//     // as it returns a promise again it needs to be processed
// }).then(function (data) {
//     for(let i = 0; i < data.length; i++){
//         console.log("Get data:",data[i].name);
//     }
// })

fetch('https://jsonplaceholder.typicode.com/users').then(function(result) {
    return result.json();
}).then(function(data) {
    // data contains array of object
    for ( let i = 0; i < data.length; i++) {
        console.log(data[i].name);
    }
}).catch(function(error) {
    console.log(error);
})

// output: I won the lottery today!

