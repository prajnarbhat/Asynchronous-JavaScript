
console.log("Before");

getUser(1, function(user) {
    console.log(user);
});

console.log("After");

function getUser(id) {
    // Function will return a new promise
    // promise will take a function with resolve and reject parameters
    // inside the promise function we will perform an asynchronous operation
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log("Fetching data from server")
            resolve({ id, userName: "abc"});
        },2000);
    });
};

function Repos(userName){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("Fetching repose of paritcular user:");
            resolve(["rep1","repo2","repo3"]);
        });
    });
};

function CommitMessage(repo) {
    return new Promise(function(resolve,reject){
        setTimeout(function() {
            resolve("commit message");
        });
    });
};