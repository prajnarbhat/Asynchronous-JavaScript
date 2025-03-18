
console.log("Before");

// async promise
// const p = getUser(id) console.log(p) will return promise with fetched data
// p.then(function(user) { console.log(user)})

// const p = getUser(1);
// console.log("Object data:", p)
// // Promise { { id: 1, userName: 'abc' } }
// console.log("Object data:", getUser(1))
// //  Promise { { id: 1, userName: 'abc' } }

getUser(1).then(function(user) {
    console.log("Fetched data:", user);
    // Fetched data: { id: 1, userName: 'abc' }Fetched data: { id: 1, userName: 'abc' } 
    getRepos(user.userName).then(function(repos) {
        console.log("Repos of the user:", repos);
        // Repos of the user: [ 'repo1', 'repo2', 'repo3' 
        getMessage(repos[0]).then(function(message) {
            console.log("Commit message of the user:", message);
            // Commit message of the user: My first commit
        })
    })
}).catch(function(error) {
    console.log(error.message);
})

function getUser(id){
    return new Promise(function(resolve, reject) {
        console.log("Fetching data from server:");
        resolve({id, userName: "abc"});
    },2000);
}

// get Repos of the user
function getRepos(userName) {
    return new Promise(function(resolve, reject) {
        console.log("Getting repos");
        resolve(["repo1","repo2","repo3"]);
    });
};

// commit message of the particualar repo
function getMessage(repo) {
    return new Promise(function(resolve, reject) {
        console.log("Commit message");
        resolve("My first commit");
    })
}