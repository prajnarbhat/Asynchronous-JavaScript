// Parallel Promise
// Promise.race => Promise.race() Method resolves or rejects as soon as the first promise settles.

const p1 = new Promise(function(resolve,reject) {
    // async operation
    setTimeout(function() {
        console.log("This is operation1");
        resolve(1);
    },2000);
});

// another promise
const p2 = new Promise(function(resolve,reject) {
    setTimeout(function() {
        console.log("This is operation2:");
        resolve(2);
    });
});

Promise.race([p1,p2])
    .then(function(result) {
        console.log(result);
    })

// promise.race will give an individual value
// if p1 is resolved it 1st checks for that execute the result
// It will check for one resolved promise


